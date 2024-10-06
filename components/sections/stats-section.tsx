"use client";

import SlotCounter from "react-slot-counter";

type Statistic = {
  name: string;
  value: number;
};

export const StatsSection = () => {
  const stats: Statistic[] = [
    { name: `Users`, value: 250 },
    { name: `Images Edited`, value: 300 },
    { name: `Images Downloaded`, value: 500 },
  ];

  return (
    <section id="statistics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-3">
              <dt className="text-base leading-7 opacity-60">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                <SlotCounter
                  animateOnVisible={true}
                  startValue={"0"}
                  value={stat.value}
                />
                +
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
