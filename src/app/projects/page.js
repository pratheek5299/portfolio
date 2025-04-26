"use client";

import React from "react";

const projectsData = [
  {
    title: "Private Theater and Event Services Platform",
    summary: [
      "Developed a responsive web platform for booking private theaters for events such as birthdays and anniversaries, featuring high-quality audio and video systems.",
      "Enabled customization options for decorations and cakes, enhancing user experience.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Education Technology Platform for IAS Exam Preparation",
    summary: [
      "Built a platform with an admin panel for managing content, user plans, and exam resources.",
      "Integrated responsive design and user authentication to facilitate effective learning.",
    ],
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
  },
  {
    title: "Event Management Platform",
    summary: [
      "Developed a platform for managing events, including weddings and corporate functions, with features for planning services, venue selection, and decoration.",
      "Designed a responsive UI for service listings and contact inquiries.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Inventory Management and Billing Platform",
    summary: [
      "Created a web application for small businesses to manage inventory and billing.",
      "Integrated modules for stock tracking and invoice generation.",
    ],
    techStack: "Next.js, MongoDB",
  },
  {
    title: "E-Commerce Platform for Mobile Accessories",
    summary: [
      "Developed an online store for mobile accessories with features like product browsing, shopping cart, and secure payment.",
      "Optimized the platform for responsiveness across devices.",
    ],
    techStack: "Next.js, MongoDB",
  },
  {
    title: "Education Technology Platform for Tutors",
    summary: [
      "Built a platform connecting students and tutors for one-on-one learning sessions.",
      "Implemented booking and scheduling tools for session management.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Real Estate Property Listings Platform",
    summary: [
      "Developed a platform showcasing real estate property listings with images and descriptions.",
      "Included contact forms and mapping tools to locate properties.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Construction and Civil Projects Platform",
    summary: [
      "Created a platform displaying civil and infrastructure project details and descriptions.",
      "Designed a responsive UI for seamless access.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Architectural Design Services Platform",
    summary: [
      "Built a portfolio platform showcasing architectural designs for homes and offices.",
      "Integrated a contact form for inquiries and optimized the design for different devices.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Industrial Products Platform",
    summary: [
      "Developed a platform for showcasing industrial-grade fabric products used in packaging and manufacturing.",
      "Optimized for performance and accessibility, with a simple contact form for inquiries.",
    ],
    techStack: "Next.js",
  },
  {
    title: "Educational Resource Platform",
    summary: [
      "Built a platform offering English workbooks, vocabulary games, and writing tips for learners at all levels.",
      "Integrated cloud storage for downloadable resources and enabled backend admin to update games.",
    ],
    techStack: "Next.js, Cloudinary",
  },
];

const Page = () => {
  return (
    <section
      className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-[2rem] xl:px-[3rem] 2xl:px-[4rem] py-20 bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9] dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {project.title}
              </h3>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 text-sm">
                {project.summary.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
