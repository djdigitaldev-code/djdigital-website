export default function Home() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 py-32">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#C1978D] mb-6">
            Web Developer
          </p>

          <h1 className="
          text-5xl
          md:text-7xl
          font-light
          leading-tight
          ">

            Websites die rust,
            <br />

            uitstraling en
            resultaat brengen.

          </h1>

          <p className="
          mt-10
          text-[#7F7F72]
          max-w-[720px]
          mx-auto
          text-lg
          leading-9
          ">

            Moderne websites voor ondernemers —
            stijlvol ontworpen, snel gebouwd
            en volledig op maat.

          </p>

          <button
            className="
            mt-12
            px-10
            py-5
            rounded-full
            bg-[#C1978D]
            text-white
            hover:scale-[1.03]
            transition
            "
          >
            Bekijk projecten
          </button>

        </div>

      </section>

    </main>
  )
}