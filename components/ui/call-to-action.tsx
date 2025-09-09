import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 lg:p-14 gap-8 items-center border">
          <div>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Ready to eliminate inaccurate content?
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Join thousands of professionals who trust VerifAI for content accuracy. 
              Start verifying your content today and publish with confidence.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline">
              Book a demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Free <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };