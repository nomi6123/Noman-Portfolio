"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "I provide Frontend Development using React.js and Next.js, AI-powered web applications, video editing, photo editing, graphic design, and UI/UX design."
  },
  {
    question: "How can AI improve my website or application?",
    answer:
      "AI can enhance your project with smart automation, chatbots, recommendation systems, and data-driven insights, improving user engagement and efficiency."
  },
  {
    question: "Do you provide custom web development services?",
    answer:
      "Yes, I create custom websites and web applications tailored to your specific needs using React.js, Next.js, and modern technologies."
  },
  {
    question: "What is your experience with React.js and Next.js?",
    answer:
      "I have extensive experience building high-performance, dynamic web applications with React.js and Next.js."
  },
  {
    question: "Do you offer UI/UX design services?",
    answer:
      "Yes, I specialize in crafting visually appealing and user-friendly UI/UX designs that improve engagement."
  },
  {
    question: "Can you assist with video and photo editing?",
    answer:
      "Absolutely! I offer professional video editing, photo enhancement, and motion graphics for various platforms."
  },
  {
    question: "What graphic design services do you provide?",
    answer:
      "I design logos, branding materials, social media graphics, and marketing visuals to make your brand stand out."
  },
  {
    question: "How do you start a new project?",
    answer:
      "I begin by understanding your requirements, followed by planning, designing, developing, and testing to ensure the best results."
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via email or through the contact form on my website to discuss your project needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-gray-900 rounded-full mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about my services and how we can work together
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-transform duration-200 ${
                    openIndex === index ? "rotate-45 bg-gray-900" : ""
                  }`}
                >
                  <span
                    className={`text-lg font-light transition-colors duration-200 ${
                      openIndex === index ? "text-white" : "text-gray-600"
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't hesitate to reach out! I'm here to help with any inquiries.
            </p>
            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
