// /src/app/components/Hero.js
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="flex flex-col justify-center bg-fixed items-center bg-gradient-to-r from-teal-500 to-blue-500 text-center py-20 min-h-screen">
			<h1 className="text-5xl font-bold text-white">
				Sai Pratheek Reddy Kasarla
			</h1>
			<h2 className="text-2xl text-gray-200 mt-2">
				Full Stack Developer
			</h2>

			<p className="mt-4 text-lg text-gray-100 max-w-xl mx-auto">
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
				/>
			</div>

			{/* CTA Button */}
			<div className="mt-8">
				<Link
					href="/images/Sai_Pratheek_Reddy_Kasarla_Resume.pdf" // Replace with your actual resume link
					target="_blank"
					className="px-6 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all"
				>
					My Resume
				</Link>
			</div>
		</section>
	);
}
