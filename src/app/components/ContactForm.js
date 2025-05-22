"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function ContactForm() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const toastId = toast.loading('Sending message...')
		try {
			const res = await fetch("/api/send-mail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});

			if (res.ok) {
				toast.success("Message sent successfully!", { id: toastId });
				setForm({ name: "", email: "", message: "" });
			} else {
				toast.error("Failed to send message. Please try again later.", { id: toastId });
			}
		} catch (error) {
			console.error("Error sending message:", error);
			toast.error("Something went wrong. Please try again.", { id: toastId });
		}
	};
	return (
		<section
			id="contact"
			className="py-16 sm:py-20 px-6 sm:px-8 bg-gray-100 dark:bg-gray-900"
		>
			<Toaster />
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400">
					Contact Me
				</h2>
				<p className="mt-2 text-gray-600 dark:text-gray-300 text-md sm:text-xl">
					Have a question, opportunity, or just want to say hello?
					I&apos;d love to hear from you.
				</p>

				<form
					onSubmit={handleSubmit}
					className="mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 space-y-6 text-left"
				>
					{/* Name Field */}
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
						>
							Full Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							value={form.name}
							onChange={handleChange}
							required
							className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
						/>
					</div>

					{/* Email Field */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
						>
							Email Address
						</label>
						<input
							id="email"
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							required
							className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
						/>
					</div>

					{/* Message Field */}
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							value={form.message}
							onChange={handleChange}
							required
							className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
						/>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
