"use client";
import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		// You can use EmailJS or backend API here
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
			<input
				name="name"
				placeholder="Your Name"
				onChange={handleChange}
				className="w-full p-2 border rounded"
			/>
			<input
				name="email"
				type="email"
				placeholder="Your Email"
				onChange={handleChange}
				className="w-full p-2 border rounded"
			/>
			<textarea
				name="message"
				rows="5"
				placeholder="Message"
				onChange={handleChange}
				className="w-full p-2 border rounded"
			/>
			<button type="submit" className="btn-primary">
				Send Message
			</button>
		</form>
	);
}
