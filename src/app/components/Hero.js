import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="flex flex-col justify-center items-center text-center py-16 sm:py-20 min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4 sm:px-6">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white">
				Sai Pratheek Reddy Kasarla
			</h1>

			<h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-300 mt-2">
				Full Stack Developer
			</h2>

			<p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100 dark:text-gray-400 max-w-xl mx-auto">
				I specialize in building scalable and efficient web applications
				using modern technologies. My goal is to create seamless user
				experiences while ensuring robust functionality behind the
				scenes.
			</p>

			{/* Profile Image */}
			<div className="mt-8">
				<Image
					src="/images/Sai Pratheek Photo.jpg"
					alt="Sai Pratheek Reddy Kasarla"
					width={150}
					height={150}
					className="rounded-full mx-auto"
					priority
				/>
			</div>

			{/* CTA Button */}
			<div className="mt-6 sm:mt-8">
				<Link
					href="/images/Sai_Pratheek_Reddy_Kasarla_Resume.pdf"
					target="_blank"
					className="px-5 sm:px-6 py-2 text-sm sm:text-base text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all"
				>
					My Resume
				</Link>
			</div>
		</section>
	);
}
