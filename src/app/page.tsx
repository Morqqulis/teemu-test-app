import CopyButton from "@/components/CopyButton"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className={``}>
        <div
          className={`min-h-dvh container flex justify-center items-center flex-col`}
        >
          <div className={`text-center flex flex-col gap-2.5 select-none`}>
            <h1 className={`text-3xl font-bold`}>Teemu</h1>
            <h2 className={`font-semibold text-lg`}>
              PGP Public Key Fingerprint
            </h2>

            <p className={`font-normal mb-2.5 select-text`}>
              24ee 1ba9 6b82 d2b2 e5f5 05b9 9a42 c42a 8dcc
            </p>

            <div className={`flex gap-4 justify-center items-center`}>
              <CopyButton />
              <Link
                className={`rounded py-1 px-3 border border-white w-fit hover:bg-foreground hover:text-background hover:border-blue-500 transition-all duration-300 active:scale-95 active:bg-blue-500`}
                target="_blank"
                href={`https://storage.googleapis.com/commonsensefm/publickey.teemuairamo%40protonmail.com-cb7924ee1ba96b82d2b2e5f505b99a42c42a8dcc.asc`}
              >
                Public Key
              </Link>
            </div>
            <h3 className={`font-semibold text-xl`}>Email</h3>
            <p>
              <a> teemuairamo [@] protonmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
