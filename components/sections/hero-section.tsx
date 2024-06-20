"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { defaultTiltProps } from "@/constants/parallax-tilt";
import { HeroSectionCTA } from "./hero-section-CTA";
import heroImg from "../../public/image-box.jpg";
import Image from "next/image";

export const HeroSection = () => (
  <section id="hero" className="relative">
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:h-screen lg:items-center lg:px-12">
      <motion.div
        className="mx-auto mt-32 max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="hidden items-center gap-x-4 sm:flex">
          <Badge>{`Version 1.0`}</Badge>

          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "link" }),
              "space-x-2 text-left"
            )}
          >
            <p>{`What's new in the latest version`}</p>
            <ArrowRight />
          </a>
        </div>

        <div className="mt-10 space-y-2">
          <h6 className="text-base font-bold tracking-wide">{`ModernaBox,`}</h6>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {`An image storage & online editor`}
          </h1>
        </div>

        <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
          {`An online tool to edit images the way you want it with option to convert file.`}
        </p>

        <div className="mt-10 flex items-center gap-x-8">
          <HeroSectionCTA />
        </div>
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Tilt {...defaultTiltProps}>
              <Image
                width={3600}
                height={2078}
                src={heroImg}
                alt="Reactive Resume - Screenshot - Builder Screen"
                className="w-[76rem] rounded-lg bg-background/5 shadow-2xl ring-1 ring-foreground/10"
              />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
