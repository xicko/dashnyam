'use client';

import React, { useState } from "react";

const WorkTogether = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    ideas: "",
    budget: "",
    filterReason: "",
    otherReason: "",
    contactInfo: "",
  });

  const [notification, setNotification] = useState<string | null>(null); // Explicitly type the state

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification(
          "Submitted successfully! We will reach you out within 48 hours."
        );
        setFormData({
          name: "",
          organization: "",
          ideas: "",
          budget: "",
          filterReason: "",
          otherReason: "",
          contactInfo: "",
        });
      } else {
        setNotification("Submission failed.");
      }
    } catch (error) {
      setNotification("Error submitting form.");
    }
  };

  return (
    <section className="flex justify-center mb-8">
      <div className="text-white md:px-20 px-8 my-[10px] font-semibold ">
        <form onSubmit={handleSubmit} className="mt-0">
          <div className="flex justify-start space-x-8  mb-0">
            <div className="md:w-[200px] w-[145px] mb-4 md:mb-4">
              <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 text-white text-lg  ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]"
                required
                placeholder="Your name"
              />
            </div>

            <div className="md:w-[200px] w-[145px]">
              <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 text-white text-lg  ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]"
                placeholder="Company"
              />
            </div>
          </div>

          <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">Ideas</label>
          <textarea
            name="ideas"
            value={formData.ideas}
            onChange={handleChange}
            className="w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 mb-4 text-white text-lg  ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]"
            rows={4}
            placeholder="Describe your ideas"
          ></textarea>

          <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">Budget</label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-[200px] font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 mb-4 text-white text-lg  ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]"
            placeholder="What's your budget?"
          />

          <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">
            What is the filter for?
          </label>
          <select
            name="filterReason"
            value={formData.filterReason}
            onChange={handleChange}
            aria-label="What is the filter for?"
            className="w-[300px] font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 mb-4 text-white text-lg  ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]"
          >
            <option value="">Select an option</option>
            <option value="advertisement">
              AR Advertisement for Brand/Company/Event/Organization
            </option>
            <option value="personal">Personal Custom Filter</option>
            <option value="other">Other</option>
          </select>

          {formData.filterReason === "other" && (
            <>
              <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">Other</label>
              <input
                type="text"
                name="otherReason"
                value={formData.otherReason}
                onChange={handleChange}
                className="w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 mb-4 text-white text-lg  ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]"
                placeholder="Other"
              />
            </>
          )}

          <label className="block customfonttitle tracking-wider text-xl text-gray-200 mb-2">
            Email Address
          </label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-black p-2 mb-6 text-white text-lg ease-linear duration-150 transition shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]" // Black text
            required
            placeholder="What's your email address?"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-slate-50 text-slate-700 py-2.5 px-5 rounded-lg ease-linear duration-150 transition shadow-[0_5px_60px_-15px_rgba(197,227,242,0)] hover:shadow-[0_5px_60px_-15px_rgba(197,227,242,1)]"
            >
              Submit
            </button>
          </div>
        </form>

        {notification && (
          <div className="text-white md:max-w-[432px] max-w-full text-lg bg-zinc-800 bg-opacity-30 rounded-lg text-center mt-6 px-4 py-4">
            <p>{notification}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkTogether;