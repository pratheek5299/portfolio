// /src/app/components/ThemeToggle.js
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	return (
		<button
			onClick={() => setIsDark(!isDark)}
			className="px-4 py-2 border rounded"
		>
			{isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
		</button>
	);
}
