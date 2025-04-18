// /src/app/components/AboutSection.js
export default function AboutSection() {
	return (
		<section id="about" className="py-20 px-6 bg-gray-50">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-4xl font-bold text-teal-600">About Me</h2>
				<p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
					I’m a passionate Full Stack Developer with experience in
					building dynamic web applications. I specialize in
					JavaScript-based technologies such as React, Node.js, and
					Next.js, and I’m always eager to learn and work with new
					technologies.
				</p>

				<div className="mt-8">
					<h3 className="text-2xl font-semibold text-teal-600">
						Skills
					</h3>
					<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 text-gray-700">
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">JavaScript</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">React</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">Node.js</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">Next.js</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">MongoDB</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">Tailwind CSS</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">Express.js</span>
						</li>
						<li className="flex justify-center items-center space-x-2">
							<span className="font-semibold">Git</span>
						</li>
					</ul>
				</div>

				{/* CTA Button */}
				<div className="mt-8">
					<a
						href="#contact" // Link to your contact section or page
						className="px-6 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all"
					>
						Get In Touch
					</a>
				</div>
			</div>
		</section>
	);
}
