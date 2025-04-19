export default function AboutSection() {
	return (
		<section
			id="about"
			className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900"
		>
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400">
					About Me
				</h2>

				<p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
					I’m a passionate Full Stack Developer with experience in
					building dynamic web applications. I specialize in
					JavaScript-based technologies such as React, Node.js, and
					Next.js, and I’m always eager to learn and work with new
					technologies.
				</p>

				{/* Skills Section */}
				<div className="mt-10">
					<h3 className="text-xl sm:text-2xl font-semibold text-teal-600 dark:text-teal-400">
						Skills
					</h3>
					<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 text-gray-700 dark:text-gray-300">
						{[
							"JavaScript",
							"React",
							"Node.js",
							"Next.js",
							"MongoDB",
							"Tailwind CSS",
							"Express.js",
							"Git",
						].map((skill, index) => (
							<li
								key={index}
								className="flex justify-center items-center font-semibold text-sm sm:text-base"
							>
								{skill}
							</li>
						))}
					</ul>
				</div>

				{/* CTA Button */}
				<div className="mt-10">
					<a
						href="#contact"
						className="inline-block px-5 py-2 text-sm sm:text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all dark:bg-teal-500 dark:hover:bg-teal-600"
					>
						Get In Touch
					</a>
				</div>
			</div>
		</section>
	);
}
