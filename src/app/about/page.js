"use client";

import React from "react";

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12">
          About Me
        </h2>

        <div className="space-y-12">
          {/* Profile Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Profile Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I am a passionate Full-Stack Developer with a proven track record of building scalable, responsive web applications using technologies like Next.js, Tailwind CSS, Node.js, and MongoDB.
              Proficient in API integration, performance optimization, and creating seamless user experiences across diverse domains including event management, e-commerce, and education technology.
              I am a collaborative team player with strong problem-solving skills, attention to detail, and a drive to deliver high-impact solutions that enhance business success.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700 dark:text-gray-300">
              <span>Python</span>
              <span>Data Structures</span>
              <span>HTML, CSS, JavaScript</span>
              <span>NodeJS, ExpressJS</span>
              <span>SQL, SQLite</span>
              <span>MongoDB, Mongoose</span>
              <span>ReactJS, Redux</span>
              <span>Next.js, Tailwind CSS</span>
              <span>Postman</span>
              <span>GitHub</span>
              <span>Bootstrap, EJS, JWT</span>
              <span>React Routes, React Hooks</span>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Work Experience
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Full Stack Developer — HanviTec Solutions Pvt Ltd (July 2024 – Present)
                </h4>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Developed and maintained Full Stack Web Applications using Next.js with secure authentication systems.</li>
                  <li>Optimized database management using MongoDB for scalable performance.</li>
                  <li>Collaborated across teams on UI/UX design best practices.</li>
                  <li>Enhanced user engagement through responsive interfaces built with Tailwind CSS.</li>
                  <li>Improved overall application performance through code optimization and debugging.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  Full Stack Developer Intern — HanviTec Solutions Pvt Ltd (April 2024 – June 2024)
                </h4>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Designed and developed scalable Full Stack Web Applications using Next.js.</li>
                  <li>Worked on backend development using Node.js and MongoDB.</li>
                  <li>Created responsive UIs with Tailwind CSS.</li>
                  <li>Optimized React components for better frontend performance.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Education
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>PG-Diploma, Embedded Systems Design</strong> — Center for Development of Advanced Computing, Hyderabad (2020 - 2021)
              </p>
              <p>
                <strong>Bachelor of Engineering, Electronics and Communication Engineering</strong> — Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad (2015 - 2019)
              </p>
            </div>
          </div>
 
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>React Full Stack Developer (React, Node.js, MongoDB) - Coding Ninjas (April 2023 – February 2024)</li>
              {/* <li>Introduction to Python</li>
              <li>Data Structures in Python</li>
              <li>Frontend Development</li>
              <li>Backend with Node.js</li> */}
            </ul>
          </div>

          {/* Links */}
          <div className="text-center mt-10">
            <a
              href="https://linkedin.com/in/sai-pratheek-reddy-kasarla/"
              target="_blank"
              className="inline-block mx-2 text-teal-600 hover:underline dark:text-teal-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pratheek5299"
              target="_blank"
              className="inline-block mx-2 text-teal-600 hover:underline dark:text-teal-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
