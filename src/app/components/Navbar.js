"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";
import { Menu, X } from "lucide-react";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "600"],
});

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Experience", href: "/experience" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className={`fixed top-0 w-full shadow z-50 bg-white dark:bg-gray-900 ${raleway.className} transition-colors duration-300`}
		>
			<div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-[2rem] xl:px-[3rem] 2xl:px-[4rem] flex justify-between items-center">
				<Link href="/">
					<h1 className="font-bold py-5 text-md md:text-2xl text-black dark:text-white">
						Pratheek
					</h1>
				</Link>

				{/* Hamburger Icon for Mobile */}
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-black dark:text-white"
						aria-label="Toggle Menu"
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Desktop Nav */}
				<div className="hidden md:flex gap-6">
					{navItems.map(({ name, href }) => {
						const isActive = pathname === href;

						return (
							<Link
								key={href}
								href={href}
								className={`relative px-1 py-2 hover:text-black dark:hover:text-white transition duration-200 ${
									isActive
										? "font-semibold text-black dark:text-white"
										: "text-black dark:text-gray-300"
								}`}
							>
								{name}
								{isActive && (
									<span className="absolute left-0 -bottom-[16px] w-full h-[3px] bg-black dark:bg-white rounded-sm" />
								)}
							</Link>
						);
					})}
				</div>
			</div>

			{/* Mobile Nav Dropdown */}
			{isOpen && (
				<div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 transition-all duration-300">
					{navItems.map(({ name, href }) => {
						const isActive = pathname === href;

						return (
							<Link
								key={href}
								href={href}
								onClick={() => setIsOpen(false)}
								className={`block px-2 py-2 rounded-md text-lg ${
									isActive
										? "font-semibold text-black dark:text-white"
										: "text-black dark:text-gray-300"
								}`}
							>
								{name}
							</Link>
						);
					})}
				</div>
			)}
		</nav>
	);
}
