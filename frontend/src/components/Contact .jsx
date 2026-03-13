import React from "react";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex items-center justify-center py-24 px-4">

        <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full">

          {/* Left Side Info */}
          <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Let's Talk 👋</h2>

            <p className="text-blue-100 mb-8">
              Have questions about expenses or want to collaborate on a project?
              Send me a message and I'll get back to you soon.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>contact@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+91 9876543210</span>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-10">

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Me
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent Successfully 👌");
              }}
              className="flex flex-col gap-5"
            >

              {/* Name */}
              <div className="relative">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-3 pl-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-3 pl-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition"
              />

              {/* Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;