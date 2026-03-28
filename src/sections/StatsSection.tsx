"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import MovingEdge from "../components/MovingEdge";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

const statsData: StatItem[] = [
  {
    value: 26,
    suffix: "k+",
    label: "Projects Completed",
  },
  {
    value: 98,
    suffix: "%",
    label: "Customers Satisfied",
  },
  {
    value: 20,
    suffix: "M",
    label: "Special Machinery",
  },
  {
    value: 30,
    suffix: "+",
    label: "Years in Business",
  },
];

function CountUp({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
        <MovingEdge
                imageSrc="/images/bartop.png"
                position="bottom"
                speed="normal"
                height={30}
              />
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-[58px] leading-none tracking-[-0.04em] text-[#cfcfcf] sm:text-[72px] lg:text-[108px]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="mt-6 text-[16px] font-normal text-[#707070] sm:text-[18px] lg:text-[20px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}