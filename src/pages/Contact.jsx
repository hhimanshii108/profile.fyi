import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="mt-8 text-xl font-bold">Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4539523201634!2d78.07031219999999!3d30.366464999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7cbdc6e9d1b%3A0x7082f9fac370bdb7!2sPacific%20Mall%20Dehradun!5e0!3m2!1sen!2sin!4v1724009814278!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full p-4 flex justify-center">
        <form
          action="https://formspree.io/f/xovanvwa"
          method="POST"
          className="w-80 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Username"
            name="Username"
            required
            autoComplete="off"
            className="w-full border p-2 focus:border-red-500 focus:border-2 focus:outline-none rounded"
            value={isAuthenticated ? user.name : ""}
          />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off"
            className="border p-2 focus:border-red-500 focus:border-2 focus:outline-none rounded"
            value={isAuthenticated ? user.email : ""}
          />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message."
            className="border p-2 focus:border-red-500 focus:border-2 focus:outline-none rounded"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="bg-red-500 w-20 p-1 text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
