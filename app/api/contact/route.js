import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const turnstileToken = formData.get("turnstileToken");

    if (!turnstileToken || typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Turnstile verificatie ontbreekt." },
        { status: 400 }
      );
    }

    // Geef de Turnstile-token door aan Formspree.
    // Formspree controleert de token vervolgens zelf bij Cloudflare.
    formData.set("cf-turnstile-response", turnstileToken);

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
      const errorText = await formspreeResponse.text();

      console.error("Formspree fout:", errorText);

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