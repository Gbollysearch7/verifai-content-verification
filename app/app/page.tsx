import FactChecker from '@/components/FactChecker';
import { Particles } from '@/components/ui/particles';
import { Navigation } from '@/components/ui/navigation';
import { Badge } from '@/components/ui/badge';

export default function Tool() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 font-ui-sans-serif">
      <Navigation />
      
      <div className="fixed inset-0 -z-10">
        <Particles className="absolute inset-0" quantity={60} color="#3b82f6" />
      </div>
      
      <main className="pt-8">
        <div className="w-full max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              VerifAI Tool
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              AI Content Verification
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your content and get instant fact-checking with source verification. 
              Eliminate inaccuracies and publish with complete confidence.
            </p>
          </div>
          
          <FactChecker hideBranding={true} showFooter={false} biggerInput={true} />
        </div>
      </main>
    </div>
  );
}
