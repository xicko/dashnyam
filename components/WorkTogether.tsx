'use client';

import React, { useState } from 'react';

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
    <section className='flex justify-center mb-8 md:mt-3 mt-0'>
      <div className='text-white md:px-20 px-8 my-[10px] font-semibold'>
        <form onSubmit={handleSubmit} className='mt-0'>
          <div className='flex justify-start space-x-8  mb-0'>
            <div className='md:w-[200px] w-[145px] mb-4 md:mb-4'>
              <label className='block text-xl text-zinc-700 dark:text-gray-200 mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 text-black dark:text-white text-lg ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
                required
                placeholder="Your name"
              />
            </div>

            <div className='md:w-[200px] w-[145px]'>
              <label className='block text-xl text-zinc-700 dark:text-gray-200 mb-2'>
                Organization
              </label>
              <input
                type='text'
                name='organization'
                value={formData.organization}
                onChange={handleChange}
                className='w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 text-black dark:text-white text-lg  ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
                placeholder="Company"
              />
            </div>
          </div>

          <label className='flex items-center space-x-[6px] w-fit text-xl text-zinc-700 dark:text-gray-200 mb-2'>
            Ideas
            <svg xmlns='http://www.w3.org/2000/svg' className='opacity-[0.8]' fill='white' width={30} height={20} viewBox='0 0 384 512'><path d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/></svg>
          </label>
          <textarea
            name='ideas'
            value={formData.ideas}
            onChange={handleChange}
            className='w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 mb-4 text-black dark:text-white text-lg  ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
            rows={4}
            placeholder="Describe your ideas"
          ></textarea>

          <label className='flex items-center space-x-[6px] w-fit  text-xl text-zinc-700 dark:text-gray-200 mb-2'>
            Budget
            <svg xmlns='http://www.w3.org/2000/svg' className='opacity-[0.8]' fill='white' width={40} height={19} viewBox='0 0 576 512'><path d='M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z'/></svg>
          </label>
          <input
            type='text'
            name='budget'
            value={formData.budget}
            onChange={handleChange}
            className='w-[200px] font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 mb-4 text-black dark:text-white text-lg  ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
            placeholder="What's your budget?"
          />

          <label className='block text-xl text-zinc-700 dark:text-gray-200 mb-2'>
            What is the filter for?
          </label>
          <select
            name='filterReason'
            value={formData.filterReason}
            onChange={handleChange}
            aria-label='What is the filter for?'
            className='w-[300px] font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 mb-4 text-black dark:text-white text-lg  ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
          >
            <option value=''>Select an option</option>
            <option value='advertisement'>
              AR Advertisement for Brand/Company/Event/Organization
            </option>
            <option value='personal'>Personal Custom Filter</option>
            <option value='other'>Other</option>
          </select>

          {formData.filterReason === 'other' && (
            <>
              <label className='block text-xl text-gray-700 dark:text-gray-200 mb-2'>Other</label>
              <input
                type='text'
                name='otherReason'
                value={formData.otherReason}
                onChange={handleChange}
                className='w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 mb-4 text-black dark:text-white text-lg  ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
                placeholder="Other"
              />
            </>
          )}

          <label className='flex items-center space-x-[6px] w-fit text-xl text-zinc-700 dark:text-gray-200 mb-2'>
            Email Address
            <svg xmlns='http://www.w3.org/2000/svg' className='opacity-[0.8]' fill='white' width={36} height={19} viewBox='0 0 512 512'><path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
          </label>
          <input
            type='text'
            name='contactInfo'
            value={formData.contactInfo}
            onChange={handleChange}
            className='w-full font-normal bg-opacity-30 rounded-lg border border-gray-300 bg-gray-300 dark:bg-black p-2 mb-6 text-black dark:text-white text-lg ease-linear duration-150 transition dark:shadow-[0_0px_30px_-15px_rgba(197,227,242,0)] dark:md:hover:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:hover:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)] dark:md:focus:shadow-[0_0px_30px_-15px_rgba(197,227,242,1)] dark:focus:shadow-[0_0px_30px_-12px_rgba(197,227,242,1)]'
            required
            placeholder="What's your email address?"
          />

          <div className='flex justify-center'>
            <button
              type='submit'
              className='flex items-center space-x-[6px] w-fit bg-cyan-100 text-xl font-semibold text-slate-800 py-2.5 px-5 rounded-lg scale-100 hover:scale-110 ease-linear duration-150 transition shadow-[0_5px_60px_-15px_rgba(197,227,242,0)] hover:shadow-[0_5px_60px_-15px_rgba(197,227,242,0.7)]'
            >
              <span>Submit</span>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 512 512'><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
            </button>
          </div>
        </form>

        {notification && (
          <div className='text-black dark:text-white md:max-w-[432px] max-w-full text-lg bg-zinc-300 dark:bg-zinc-800 bg-opacity-30 rounded-lg text-center mt-6 px-4 py-4'>
            <p>{notification}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkTogether;