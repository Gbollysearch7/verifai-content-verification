import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

export default function LandingPage() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-start md:p-4">
      <div className="absolute inset-0 -z-0 h-full w-full bg-[radial-gradient(#80808060_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <section className="w-full max-w-6xl md:max-w-4xl p-6 mt-8">
        <div className="text-left space-y-6">
          <h1 className="md:text-6xl text-4xl font-medium">
            Verify AI Content with Confidence
          </h1>
          <p className="text-gray-800 max-w-2xl">
            Hallucinations Detector analyzes your content, extracts claims, and checks them against reliable web sources using Exa. Get clear verdicts, suggested fixes, and confidence scores to keep your writing accurate.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/"
              className="px-4 py-2 bg-brand-default text-white font-semibold rounded-none ring-2 ring-brand-default hover:opacity-90"
            >
              Try the Tool
            </Link>
            <a
              href="https://github.com/exa-labs/exa-hallucination-detector"
              target="_blank"
              className="px-4 py-2 border-2 border-brand-default text-brand-default font-semibold rounded-none hover:bg-brand-default hover:text-white"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="mt-12">
          <img
            src={getAssetPath('/opengraph-image.jpg')}
            alt="Hallucinations Detector preview"
            className="w-full max-w-3xl border shadow-sm"
          />
        </div>
      </section>

      <section className="w-full max-w-6xl md:max-w-4xl p-6 mt-4 grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Extract Key Claims',
            desc: 'Automatically pulls verifiable statements from your text.',
          },
          {
            title: 'Source-Backed Checks',
            desc: 'Verifies with Exa-powered web search results.',
          },
          {
            title: 'Actionable Fixes',
            desc: 'Shows suggested corrections and confidence scores.',
          },
        ].map((f, i) => (
          <div key={i} className="bg-white p-6 border rounded-none shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">{f.title}</h3>
            <p className="text-gray-700 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

