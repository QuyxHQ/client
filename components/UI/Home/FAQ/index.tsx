"use client";

import React, { useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import "./FAQ.css";
import {
  montserratAlternatesBold,
  montserratAlternatesMedium,
} from "@/lib/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { opacityReveal } from "@/lib/utils/variants";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQList: FAQItem[] = [
  {
    question: "Can I create more than one profile card?",
    answer:
      "Absolutely! You can create as many cards as possible. At least for now.",
  },
  {
    question: "Can I connect more than one website to a card?",
    answer:
      "Yes. This also promotes - make changes on dashboard, reflect everywhere. So, that way you don't have changing info for each website",
  },
  {
    question: "Which EVM is powering Web3 OAuth",
    answer:
      "Currently, Web3 OAuth can run on any EVM Compatible chain but currently running on the FON Smart Chain",
  },
  {
    question: "Can NFTs be used as PFP when creating cards?",
    answer:
      "100% possible. We tried to make it as easy as possible. You can always select your favorite NFT as a PFP or even generate an image with help of our integrated AI",
  },
];

const index = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const chooseQuestion = (id: number) => {
    if (currentIndex === id) {
      setCurrentIndex(null);
      return;
    }

    setCurrentIndex(id);
  };

  return (
    <section className={`faq pt-5 pb-10 bg-black mx-auto`} id="faq">
      <div className=" p-8 ">
        <h2
          className={`text-5xl text-center font-bold mb-8 text-[#fff] ${montserratAlternatesBold.className}`}
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col w-[90vw] max-w-[600px] mx-auto">
          {FAQList.map((faq, i) => (
            <div
              className="w-full cursor-pointer select-none"
              onClick={() => chooseQuestion(i)}
              key={`faq-list-${i}`}
            >
              <div
                className={`single-faq w-full text-[#fff] ${
                  FAQList.length === i + 1 && "border-none"
                }`}
              >
                <div className="w-full flex items-center justify-between">
                  <h4
                    className={`text-center text-[#fff] ${montserratAlternatesBold.className}`}
                  >
                    {faq.question}
                  </h4>
                  <IoChevronUp
                    className={`${
                      currentIndex === i ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>

                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    {currentIndex === i && (
                      <motion.p key={"somthing" + i} {...opacityReveal}>
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};

export default index;
