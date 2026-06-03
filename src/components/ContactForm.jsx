"use client";

import { data } from "autoprefixer";
import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const[message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        //FORM VALIDATION
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.message
        ) {
            setMessage("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            // PLACEHOLDER: Replace with email service
            await sendEmail(formData);

            setMessage("Thank you! Your message has been sentj.");
            setFormData({ firstNAme: "", lastName: "", email: "", message: "" });
            setSubmitted(false);
        }   catch (error) {
            setMessage("Error sending message. Please try again.");
        }   finally {
            setLoading(false);
        }
    };

    const sendEmail = async (data) => {
        //PLACEHOLDER FUNCTION
        console.log("Email would be sent with:", data);

        return new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return (
        <form
        action="#"
        method="POST"
        onSubmit={handleSubmit}
        className="items-center bg-inherit shadow-x1 border-2 border-(--brown-700) rounded-lg p-3 gap-2 mb-5 grid
        grid-cols-1 md:grid-cols-2 xl:mr-4"
        >
        <h2 cclassName="col-span-1 md:col-span-2 text-center text-2xl font-bold mb-4">Send us a message. We'd love
            to hear from you!</h2>
            <label className="flex flex-col gap-1">
                <span className="text-lg fond-medium pl-1">First Name</span>
                <input
                type="text"
                name="firstName"
                id="firstName"
                // required
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`bg-(--expresso)/60 p-1.5 rounded-md border focus:bg-(--expreso)/80 ${
                    submittd && !formData.firstName? "border-red-800 text-red-600"
                    : "border-(--taupe)"
                }` }
                />
                {submitted && !formData.firstName&& (
                    <p className="text-red-700 text-sm">First name is required</p>
                )}
            </label>
            <label className="flex flex-col gap-1">
                <span className="text-lg font-medium pl-1">Last name</span>
                <input
                type="text"
                name="lastName"
                id="lastName"
                // required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`bg-(--expresso)/60 p-1.5 rounded-md border focus:bg-(--expresso)/80 $(
                submitted && !formData.lastName
                ? "border-red-800 text-red-600"
                : "border-(--taupe)"
                )`}
                />
                {submitted && !formData.lastName && (
                    <p className="text-red-700 text-sm">Last name is required</p>
                )}
            </label>
            <label className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <span className="text-lg font-medium pl-1">Email</span>
                <input
                type="email"
                name="email"
                id="email"
                // required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={` bg-(--expresso)/60 p-1.5 rounded-md border focus:bg-(--expresso)/80 ${
                    submitted && !formData.email?"border-red-800 rext-red-600"
                    : "border-(--taupe)"
                }`}
                />
                {submitted && !formData.email && (
                    <p className="text-red-700 text-sm">Email is Required</p>
                )}
            </label>

            <label className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <span className="text-lg font-medium pl-1">Message</span>
                <textarea
                Name="message"
                id="footer-message"
                placeholder="Enter your message here."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={handleChange}
                className={`bg-(--expresso)/60 p-1.5 rounded-md border focus:bg-(--expresso)/80 ${
                    submitted && !formData.message
                    ? "border-red-800 text-red-600"
                : "border-(--taupe)"
            }`}
            />
            {submitted && !formData.message && (
                <p className="text-red-700 text-sm">Pkease enter a message</p>
                )}
            </label>

            <button
            type="submit"
            disabled={loading}
            className="col-span-1 text-center md:col-span-2 bg-(--brown-700) text-white p-2 rounded-md hover:bg-(--brown-700)/80
            disabled:opacity-50 transition-colors"
            >
                {loading ?"Sending..." : "Submit Message"}
            </button>
            </form>
    );
}