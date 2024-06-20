"use client";

import { lastEdits } from "@/constants/last-edits";
import { motion } from "framer-motion";
import Image from "next/image";

export const LatestEditsSection = () => (
  <section id="sample-resumes" className="relative py-24 sm:py-32">
    <div className="container flex flex-col gap-12 lg:min-h-[600px] lg:flex-row lg:items-start">
      <div className="space-y-4 lg:mt-16 lg:basis-96">
        <h2 className="text-4xl font-bold">{`Last Edits`}</h2>

        <p className="leading-relaxed">
          {`This and so much more can be done with ModernaBox. Start now and see your image here.`}
        </p>
      </div>

      <div className="w-full overflow-hidden lg:absolute lg:right-0 lg:max-w-[55%]">
        <motion.div
          animate={{
            x: [0, lastEdits.length * 200 * -1],
            transition: {
              x: {
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              },
            },
          }}
          className="flex items-center gap-x-6"
        >
          {lastEdits.map((edit, index) => (
            <motion.div
              key={index}
              className="max-w-none flex-none"
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Image
                alt={edit.name}
                loading="lazy"
                height={500}
                width={400}
                src={edit.src}
                className=" aspect-[1/1.4142] h-[400px] rounded object-cover lg:h-[600px]"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-background to-transparent lg:block" />
      </div>
    </div>
  </section>
);
