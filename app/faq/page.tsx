"use client";
import Header from "@/components/ui/header";
import FAQData from "@/data/faq.json";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-[90vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header
            title="💬 Frequently Asked Questions"
            description="🔍 command + F or ctrl + F to search what you are looking for"
          />
        </motion.div>

        {FAQData.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="py-2.5"
          >
            <h2 className="text-sm font-bold">{faq.question}</h2>
            <p className="text-sm text-[#71717A]">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
