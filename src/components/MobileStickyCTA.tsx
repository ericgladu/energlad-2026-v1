import { Button } from "@/components/ui/button";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
      <Button 
        size="lg" 
        className="w-full rounded-full py-6 text-base font-semibold" 
        asChild
      >
        <a href="mailto:info@energlad.com?subject=Consultation%20Request">
          Request a Consultation
        </a>
      </Button>
    </div>
  );
};

export default MobileStickyCTA;
