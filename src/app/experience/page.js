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

export default function Page() {
	return (
		<section
			id="experience"
			className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900"
		>
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400">
					Experience 
				</h2>

				<div className="mt-8 space-y-8 sm:space-y-6">
					{experienceData.map((job, index) => (
						<div
							key={index}
							className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all hover:shadow-2xl transform duration-300 text-left"
						>
							{/* Company Logo and Info */}
							<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
								<Image
									src={job.logo}
									alt={job.company}
									width={60}
									height={60}
									className="rounded-full bg-white py-3 h-auto w-auto"
								/>
								<div>
									<h3 className="text-xl sm:text-2xl font-semibold text-teal-600 dark:text-teal-400">
										{job.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 text-lg">
										{job.company}
									</p>
									<p className="text-gray-500 dark:text-gray-400 text-sm">
										{job.location}
									</p>
									<p className="text-gray-500 dark:text-gray-400 text-sm">
										{job.date}
									</p>
								</div>
							</div>

							{/* Summary of Responsibilities */}
							<ul className="mt-4 space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300">
								{job.summary.map((point, idx) => (
									<li
										key={idx}
										className="text-base sm:text-lg"
									>
										{point}
									</li>
								))}
							</ul>

							{/* Tech Stack */}
							<div className="mt-6 text-gray-800 dark:text-gray-200">
								<span className="font-semibold text-teal-600 dark:text-teal-400">
									Tech Stack:{" "}
								</span>
								{job.techStack}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
