import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const turnstileToken = formData.get("turnstileToken");

    if (!turnstileToken || typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Turnstile verificatie ontbreekt." },
        { status: 400 }
      );
    }

    const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

    if (!secretKey) {
      console.error("Cloudflare Turnstile secret key ontbreekt.");
      return NextResponse.json(
        { error: "Server configuratie ontbreekt." },
        { status: 500 }
      );
    }

    // Controleer de Turnstile-token bij Cloudflare
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      console.error("Turnstile verificatie mislukt:", turnstileResult);

      return NextResponse.json(
        { error: "Beveiligingscontrole mislukt." },
        { status: 403 }
      );
    }

    // Turnstile-token verwijderen voordat het formulier naar Formspree gaat
    formData.delete("turnstileToken");

    // Verstuur het formulier naar Formspree
    const formspreeResponse = await fetch(
      "https://formspree.io/f/mnpavdga",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!formspreeResponse.ok) {
      console.error(
        "Formspree fout:",
        await formspreeResponse.text()
      );

      return NextResponse.json(
        { error: "Formulier kon niet worden verzonden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API fout:", error);

    return NextResponse.json(
      { error: "Er is een onverwachte fout opgetreden." },
      { status: 500 }
    );
  }
}