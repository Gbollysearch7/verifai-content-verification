"use client";

import Link from "next/link";
import { getAssetPath } from "@/lib/utils";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/animated-hero";
import { Particles } from "@/components/ui/particles";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ShineBorder, Timeline } from "@/components/ui/shine-border";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { CTA } from "@/components/ui/call-to-action";
import { FileTextIcon, GlobeIcon, CheckIcon, LightningBoltIcon, LockClosedIcon, BarChartIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Smart Claim Extraction",
      description: "AI-powered extraction of verifiable statements from any text content.",
      href: "/app",
      cta: "Try now",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-60 rounded-lg" />
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: LightningBoltIcon,
      name: "One-Click Corrections",
      description: "Instant fixes for inaccurate information with suggested alternatives.",
      href: "/app",
      cta: "See fixes",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-60 rounded-lg" />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: GlobeIcon,
      name: "Real-time Verification",
      description: "Validates claims against current web sources using advanced search.",
      href: "/app",
      cta: "Learn more",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 opacity-60 rounded-lg" />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: LockClosedIcon,
      name: "Source Attribution",
      description: "Complete transparency with source links and confidence scores.",
      href: "/app",
      cta: "View sources",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100 opacity-60 rounded-lg" />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
  ];

  const testimonials = [
    {
      text: "VerifAI revolutionized our content workflow. We catch inaccuracies instantly and publish with complete confidence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b436?w=100&h=100&fit=crop&crop=face",
      name: "Sarah Chen",
      role: "Content Director",
    },
    {
      text: "The AI-powered fact-checking is incredible. It saves us hours of manual research and ensures our content is always accurate.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Michael Rodriguez",
      role: "Marketing Manager",
    },
    {
      text: "VerifAI's source verification feature gives us the credibility we need. Our audience trusts our content more than ever.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "Emily Watson",
      role: "Communications Lead",
    },
    {
      text: "The one-click corrections feature is a game-changer. We can fix inaccuracies instantly without disrupting our workflow.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "David Park",
      role: "Product Manager",
    },
    {
      text: "Our compliance team loves VerifAI. It ensures all our regulatory content meets accuracy standards before publication.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      name: "Lisa Thompson",
      role: "Compliance Officer",
    },
    {
      text: "VerifAI transformed how we create educational content. Students and parents trust our materials completely now.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      name: "James Mitchell",
      role: "Education Director",
    },
    {
      text: "The real-time source verification is outstanding. We can fact-check any claim against current web data instantly.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      name: "Rachel Kumar",
      role: "Research Analyst",
    },
    {
      text: "VerifAI's accuracy detection saved our campaign from potential misinformation. It's an essential tool for any content team.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "Alex Johnson",
      role: "Campaign Manager",
    },
    {
      text: "The healthcare content we create is now 100% accurate thanks to VerifAI. Patient safety is our priority.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      name: "Dr. Maria Garcia",
      role: "Medical Communications",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 font-ui-sans-serif">
      {/* Navigation */}
      <Navigation />
      
      {/* Background particles */}
      <div className="fixed inset-0 -z-10">
        <Particles className="absolute inset-0" quantity={80} color="#3b82f6" />
      </div>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Screenshot Showcase */}
        <section className="w-full max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              See VerifAI in Action
            </Badge>
          </div>
          <ShineBorder
            borderWidth={2}
            className="mx-auto max-w-5xl"
            color={["#3b82f6", "#8b5cf6"]}
            borderRadius={16}
          >
            <img
              src={getAssetPath('/opengraph-image.jpg')}
              alt="VerifAI Dashboard Interface"
              className="w-full rounded-lg"
            />
          </ShineBorder>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Content Verification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to ensure your content is accurate, reliable, and trustworthy.
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-2">
            {features.map((f) => (
              <BentoCard key={f.name} {...f} />
            ))}
          </BentoGrid>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Upload or copy & paste to get started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bring your draft however you write—paste text or upload a PDF/DOCX. 
              VerifAI extracts claims, finds sources, and returns suggested fixes.
            </p>
          </div>

          <ShineBorder
            borderWidth={3}
            className="border bg-white/50 shadow-2xl backdrop-blur-md max-w-4xl mx-auto"
            color={["#3b82f6", "#8b5cf6", "#06d6a0"]}
          >
            <div className="p-8">
              <Timeline />
              <div className="text-center mt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href="/app">Try VerifAI Now</Link>
                </Button>
              </div>
            </div>
          </ShineBorder>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Use Cases
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From marketing to healthcare, ensure accuracy across all your content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Marketing Teams', 
                desc: 'Blog posts, landing pages, social media content, and campaigns.',
                icon: <BarChartIcon className="w-6 h-6" />,
                gradient: 'from-blue-500 to-purple-500'
              },
              { 
                title: 'Sales Professionals', 
                desc: 'Outreach emails, proposals, case studies, and presentations.',
                icon: <CheckIcon className="w-6 h-6" />,
                gradient: 'from-green-500 to-teal-500'
              },
              { 
                title: 'Product Teams', 
                desc: 'Documentation, release notes, feature descriptions, and guides.',
                icon: <FileTextIcon className="w-6 h-6" />,
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                title: 'Compliance Officers', 
                desc: 'Policy summaries, regulatory content, and risk assessments.',
                icon: <LockClosedIcon className="w-6 h-6" />,
                gradient: 'from-red-500 to-orange-500'
              },
              { 
                title: 'Educators', 
                desc: 'Study materials, lesson plans, research summaries, and curricula.',
                icon: <GlobeIcon className="w-6 h-6" />,
                gradient: 'from-yellow-500 to-orange-500'
              },
              { 
                title: 'Healthcare Providers', 
                desc: 'Patient communications, educational handouts, and medical content.',
                icon: <LightningBoltIcon className="w-6 h-6" />,
                gradient: 'from-teal-500 to-cyan-500'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm p-6 border border-gray-200/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Badge className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What our users say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how VerifAI is transforming content verification across industries.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] overflow-hidden">
            <TestimonialsColumn testimonials={testimonials.slice(0,3)} duration={15} />
            <TestimonialsColumn testimonials={testimonials.slice(3,6)} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={testimonials.slice(6,9)} className="hidden lg:block" duration={17} />
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
    </div>
  );
}
