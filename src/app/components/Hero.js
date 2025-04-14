"use client";

import { Raleway } from "next/font/google";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "600"],
	variable: "--font-raleway",
});

export default function Hero() {
	return (
		<section
			className={`h-screen flex bg-fixed items-center justify-center text-center px-4 bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] ${raleway.className}`}
		>
			<div className="max-w-3xl">
				<h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
					Hi, I&apos;m Sai Pratheek Reddy Kasarla
				</h1>
				<p className="mt-4 text-xl text-gray-300">
					Full Stack Web Developer
				</p>

				<div className="mt-8 flex flex-wrap justify-center gap-4">
					<a
						href="/resume.pdf"
						className="px-6 py-3 rounded-xl text-white bg-green-600 hover:bg-green-700 transition font-medium"
					>
						View Resume
					</a>
					<a
						href="/contact"
						className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition font-medium"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
}
