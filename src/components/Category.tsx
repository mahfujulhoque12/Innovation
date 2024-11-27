"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { cardData } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");

  // Filter cards based on the selected category
  const filteredCards = cardData.filter(
    (card) => card.category === selectedCategory
  );

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  // Updated Hover Effect
  const hoverEffect = {
    hover: {
      scale: 1.03, // Slight scaling of the card
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)", // Soft shadow
      borderColor: "#3b82f6", // Glowing border effect
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-center text-lg md:text-3xl font-semibold text-gray-700">
            Our Services
          </h2>

          {/* Category Buttons */}
          <motion.div
            className="flex justify-center gap-4 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {["web", "mobile", "video", "ux"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-md ${
                  selectedCategory === category
                    ? "bg-[#072083] text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-[#072083] hover:text-white transition-all`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  className="border rounded-lg overflow-hidden bg-white group relative transition-transform"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={hoverEffect.hover} // Applying new hover effect
                >
                  {/* Card Image */}
                  <div className="overflow-hidden relative">
                    <motion.div
                      className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={300}
                        className="object-cover h-[200px] w-full"
                        priority
                      />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Content */}
                  <div
                    className="p-4 transition-transform transform group-hover:-translate-y-2 duration-500 ease-in-out"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{card.des}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-blue-500 font-bold">
                        {card.price}
                      </span>
                      <span className="text-gray-400 line-through">
                        {card.oldPrice}
                      </span>
                    </div>

                    {/* Link to Details */}
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-block bg-[#072083] px-4 py-2 rounded-md shadow-md text-white text-sm font-bold hover:bg-[#051960] transition-all"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Category;
