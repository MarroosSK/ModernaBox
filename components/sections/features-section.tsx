"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Currency,
  Earth,
  File,
  Folder,
  GitBranch,
  Languages,
  Sun,
  X,
} from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  className?: string;
};

const featureLabel = cn(
  "flex cursor-default items-center justify-center gap-x-2 rounded bg-secondary px-4 py-3 text-sm font-medium leading-none text-primary transition-colors hover:bg-primary hover:text-background"
);

export const FeaturesSection = () => {
  const features: Feature[] = [
    { icon: <Currency />, title: `Free forever` },
    { icon: <GitBranch />, title: `New Features` },
    { icon: <X />, title: `No advertising` },
    { icon: <Languages />, title: `Available in English` },
    { icon: <File />, title: `Customize images` },
    { icon: <Folder />, title: `Change image format` },
    { icon: <Sun />, title: `Light or dark theme` },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="space-y-6 leading-loose">
          <h2 className="text-4xl font-bold">{`Rich in features, not in pricing.`}</h2>
          <p className="max-w-4xl text-base leading-relaxed">
            {`ModernaBox is a project that comes with a number of ideas and features that have been built to (near) perfection.`}
          </p>

          <div className="!mt-12 flex flex-wrap items-center gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -50 }}
                className={cn(featureLabel, feature.className)}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                {feature.icon}
                <h4>{feature.title}</h4>
              </motion.div>
            ))}

            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: (features.length + 1) * 0.1 },
              }}
            >
              {`and many more...`}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
