"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";

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

	return (
		<nav
			className={`fixed top-0 w-full  shadow z-50 ${raleway.className}`}
		>
			<div className="max-w-[1536px] bg-white mx-auto  px-4 md:px-8 lg:px-[2rem] xl:px-[3rem] 2xl:px-[4rem] flex justify-between items-center">
				<Link href={'/'}>
					<h1 className="font-bold py-5 text-2xl text-black">
						Pratheek (Website in development)
					</h1>
				</Link>
				<div className="flex gap-6">
					{navItems.map(({ name, href }) => {
						const isActive = pathname === href;

						return (
							<Link
								key={href}
								href={href}
								className={`relative px-1 py-2 hover:text-[black] transition duration-200
                ${isActive ? "font-semibold text-black " : "text-black"}`}
							>
								{name}
								{isActive && (
									<span className="absolute left-0 -bottom-[16px] w-full h-[3px] bg-black rounded-sm" />
								)}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
