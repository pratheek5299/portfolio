"use client";

import React from "react";
import Image from "next/image";

const experienceData = [
	{
		title: "Full Stack Developer",
		company: "HanviTec Solutions Pvt Ltd",
		logo: "/images/HanviTec Logo.png",
		location: "Hyderabad, India",
		date: "July 2024 – Present",
		summary: [
			"Implemented and maintained Full Stack Web applications using Next.js, focusing on secure authentication and seamless user experiences.",
			"Optimized database performance and scalability using MongoDB.",
			"Collaborated with cross-functional teams on UI/UX design and implementation.",
			"Built responsive interfaces using Tailwind CSS.",
			"Enhanced performance via code optimization and advanced debugging.",
		],
		techStack: "Next.js, MongoDB, Tailwind CSS, Node.js, JavaScript",
	},
	{
		title: "Full Stack Developer Intern",
		company: "HanviTec Solutions Pvt Ltd",
		logo: "/images/HanviTec Logo.png",
		location: "Hyderabad, India",
		date: "April 2024 – June 2024",
		summary: [
			"Developed scalable Full Stack Web Applications using Next.js.",
			"Worked on backend development using Node.js and MongoDB with API integration.",
			"Designed responsive UIs using Tailwind CSS and modern frontend practices.",
			"Optimized React components and improved JavaScript code structure.",
		],
		techStack: "Next.js, Node.js, MongoDB, Tailwind CSS, React",
	},
];

const Page = () => {
	return (
		<div
			className="max-w-[1536px] bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9]
 mx-auto px-4 md:px-8 lg:px-[2rem] xl:px-[3rem] 2xl:px-[4rem] h-screen py-10 "
		>
			<h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900 text-black">
				Experience
			</h2>

			<div className="grid grid-cols-2 gap-10">
				{experienceData.map((exp, index) => (
					<div
						key={index}
						className="bg-white bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 border-gray-700 hover:shadow-xl transition"
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="bg-white rounded-full py-2">
								<Image
									src={exp.logo}
									alt={`${exp.company} logo`}
									width={50}
									height={50}
									className="rounded-full object-contain"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 text-white">
									{exp.title}
								</h3>
								<p className="text-sm text-gray-600 text-gray-400">
									{exp.company} — {exp.location}
								</p>
								<p className="text-xs text-gray-400 mt-1">
									{exp.date}
								</p>
							</div>
						</div>

						<ul className="list-disc list-inside text-gray-700 text-gray-300 space-y-2 text-sm">
							{exp.summary.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>

						<p className="text-sm text-gray-500 text-gray-400 mt-4">
							<strong>Tech stack:</strong> {exp.techStack}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
