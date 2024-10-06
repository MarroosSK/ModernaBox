"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const Question1 = () => (
  <AccordionItem value="1">
    <AccordionTrigger className="text-left leading-relaxed">
      What is ModernaBox?
    </AccordionTrigger>
    <AccordionContent className="prose max-w-none dark:prose-invert">
      <p>
        ModernaBox is online tool to serve your creativity. Do you want to
        create new images from scrath? Do you want to edit your images? Do you
        want to change file size and format? ModernaBox can provide that.
      </p>
    </AccordionContent>
  </AccordionItem>
);

const Question2 = () => (
  <AccordionItem value="2">
    <AccordionTrigger className="text-left leading-relaxed">
      How much does it cost to use ModernaBox?
    </AccordionTrigger>
    <AccordionContent className="prose max-w-none dark:prose-invert">
      <p>
        Everything is free and always will be. You can buy creator a coffee to
        support development.
      </p>
    </AccordionContent>
  </AccordionItem>
);

const Question3 = () => (
  <AccordionItem value="3">
    <AccordionTrigger className="text-left leading-relaxed">
      Can i delete my images?
    </AccordionTrigger>
    <AccordionContent className="prose max-w-none dark:prose-invert">
      <p>
        Unfortunately not, but you can report image with detailed description
        and we will look into it.
      </p>
    </AccordionContent>
  </AccordionItem>
);

const Question5 = () => (
  <AccordionItem value="5">
    <AccordionTrigger className="text-left leading-relaxed">
      Is there OpenAI Integration?
    </AccordionTrigger>
    <AccordionContent className="prose max-w-none dark:prose-invert">
      <p>Not at the moment but we do plan implement it later.</p>
    </AccordionContent>
  </AccordionItem>
);

export const FAQSection = () => (
  <section id="faq" className="container relative py-24 sm:py-32">
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>

        <p className="text-base leading-loose">
          If you did not find your answer, feel free to contact support.
        </p>
        <Button>Contact Support</Button>
      </div>

      <div className="col-span-2">
        <Accordion type="single" collapsible>
          <Question1 />
          <Question2 />
          <Question3 />
          <Question5 />
        </Accordion>
      </div>
    </div>
  </section>
);
