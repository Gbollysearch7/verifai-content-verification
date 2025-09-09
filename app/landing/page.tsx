import Link from "next/link";
import { getAssetPath } from "@/lib/utils";
import { Particles } from "@/components/ui/particles";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Pricing } from "@/components/ui/pricing-cards";
import TestimonialsColumn from "@/components/ui/testimonials-columns-1";
import { sampleTestimonials } from "@/lib/data/testimonials";
import { FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

export default function LandingPage() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Claim extraction",
      description: "Pulls verifiable statements from any text.",
      href: "/app",
      cta: "Try now",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Inline fixes",
      description: "One‑click corrections for incorrect facts.",
      href: "/app",
      cta: "See fixes",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Source‑backed checks",
      description: "Validates with live web results via Exa.",
      href: "/app",
      cta: "How it works",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <main className="flex relative min-h-screen flex-col items-center justify-start md:p-4">
      <div className="absolute inset-0 -z-0 h-full w-full bg-white"></div>
      <Particles className="absolute inset-0" quantity={80} color="#e5e7eb" />

      <section className="w-full max-w-6xl md:max-w-4xl p-6 mt-8">
        <div className="text-left space-y-6">
          <h1 className="md:text-6xl text-4xl font-medium tracking-tight text-[#09090b]">
            Verify AI content with confidence
          </h1>
          <p className="text-[#71717a] max-w-2xl text-lg leading-7">
            VerifAI analyzes your content, extracts claims, validates them against reliable web sources, and suggests clear one‑click fixes—so you can publish with certainty.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/app"
              className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:opacity-90"
            >
              Get started
            </Link>
            <a
              href="#how"
              className="px-4 py-2 border border-gray-300 text-black font-semibold rounded-md hover:bg-gray-50"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="mt-12">
          <img
            src={getAssetPath('/opengraph-image.jpg')}
            alt="VerifAI screenshot"
            className="w-full max-w-3xl border shadow-sm"
          />
        </div>
      </section>

      <section id="features" className="w-full max-w-6xl md:max-w-4xl p-6 mt-4">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((f) => (
            <BentoCard key={f.name} {...f} />
          ))}
        </BentoGrid>
      </section>

      <section id="how" className="w-full max-w-6xl md:max-w-4xl p-6 mt-12">
        <div className="bg-white p-6 border rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-[#09090b]">Upload or copy & paste</h2>
          <p className="text-[#71717a] mt-2">
            Bring your draft however you write—paste text or upload a PDF/DOCX. VerifAI extracts claims, finds sources, and returns suggested fixes.
          </p>
        </div>
      </section>

      <section id="use-cases" className="w-full max-w-6xl md:max-w-4xl p-6 mt-8 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Marketing', desc: 'Blog posts, landing pages, social copy.'},
          { title: 'Sales', desc: 'Outreach emails, proposals, case studies.'},
          { title: 'Product', desc: 'Docs, release notes, feature pages.'},
          { title: 'Compliance', desc: 'Policy summaries and risk notes.'},
          { title: 'Education', desc: 'Study guides, lesson notes, summaries.'},
          { title: 'Healthcare', desc: 'Patient communications and handouts.'},
        ].map((f, i) => (
          <div key={i} className="bg-white p-6 border rounded-md shadow-sm">
            <h3 className="font-semibold text-lg text-[#09090b]">{f.title}</h3>
            <p className="text-[#71717a] mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="w-full max-w-6xl md:max-w-4xl p-6 mt-8">
        <div className="flex justify-center gap-6 mt-2 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={sampleTestimonials.slice(0,3)} duration={15} />
          <TestimonialsColumn testimonials={sampleTestimonials.slice(3,6)} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={sampleTestimonials.slice(6,9)} className="hidden lg:block" duration={17} />
        </div>
      </section>

      <section id="pricing" className="w-full">
        <Pricing />
      </section>
    </main>
  );
}
