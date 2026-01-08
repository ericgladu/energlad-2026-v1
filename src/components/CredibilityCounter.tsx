import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterItemProps {
  endValue: number;
  suffix: string;
  label: string;
  description: string;
  delay?: number;
}

const CounterItem = ({ endValue, suffix, label, description, delay = 0 }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now() + delay * 1000;
    
    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, endValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6"
    >
      <div className="mb-2">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary">
          {count}
          {suffix}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
        {label}
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

const CredibilityCounter = () => {
  const stats = [
    {
      endValue: 65,
      suffix: "+",
      label: "Operating Solar Assets",
      description: "Under active stewardship across commercial and institutional portfolios",
    },
    {
      endValue: 10,
      suffix: "+ MW",
      label: "Managed Capacity",
      description: "Distributed generation under ongoing operations & maintenance",
    },
    {
      endValue: 100,
      suffix: "%",
      label: "Independent, Owner-Aligned",
      description: "Not an EPC or equipment vendor—focused solely on your interests",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterItem
              key={stat.label}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityCounter;
