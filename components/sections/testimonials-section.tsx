"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";

const email = "hello@amruthpillai.com";

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[][] = [
  [
    {
      name: "Anonym1",
      quote:
        "This is really a thank you for ModernaBox for allowing me to create cool images!",
    },
  ],
  [
    {
      name: "Anonym1",
      quote:
        "Hey, Just wanted to let you know i am using this app everyday, because i like it. It's great!",
    },
  ],
  [
    {
      name: "Anonym2",
      quote: "Thank you so much for making this kind of thing.",
    },
  ],
];

export const TestimonialsSection = () => (
  <section
    id="testimonials"
    className="container relative space-y-12 py-24 sm:py-32"
  >
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">{`Testimonials`}</h1>
      <p className="mx-auto max-w-2xl leading-relaxed">
        We always love to hear from the users of ModernaBox with feedback or
        support. Here are some of the messages we have received. If you have any
        feedback, feel free to post it{" "}
        <Link href={"#"} className="underline">
          here
        </Link>
        .
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-y-0">
      {testimonials.map((columnGroup, groupIndex) => (
        <div key={groupIndex} className="space-y-8">
          {columnGroup.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.25 },
              }}
              className={cn(
                "relative overflow-hidden rounded-lg bg-secondary-accent p-5 text-primary shadow-lg",
                index > 0 && "hidden lg:block"
              )}
            >
              <Quote
                size={64}
                className="absolute -right-3 bottom-0 opacity-20"
              />
              <blockquote className="italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-medium">
                {testimonial.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      ))}
    </div>
  </section>
);
