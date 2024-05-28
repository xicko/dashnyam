import React from 'react';

const FAQs = () => {
  return (
    <section className='md:w-[460px] md:mx-10 bg-black md:bg-opacity-20 bg-opacity-0 md:rounded-3xl p-10 md:mt-4 md:mb-0 mb-14 space-y-6'>
        <div className='space-y-2'>
            <p className='font-bold text-xl'>&#8226; What kind of filters do you create?</p>
            <p>I work with color grading, makeup, photo frames, product demonstration, target tracking, and a lot more!</p>
        </div>

        <div className='min-w-full min-h-[2px] bg-zinc-600 bg-opacity-60 rounded-full'></div>
    
        <div className='space-y-2'>
            <p className='font-bold text-xl'>&#8226; How long does it take to create a filter?</p>
            <p>The duration of filter creation varies depending on the complexity
            of the project. However, for the simplest effects, the minimum lead
            time is three business days.</p>
        </div>

        <div className='min-w-full min-h-[2px] bg-zinc-600 bg-opacity-60 rounded-full'></div>

        <div className='space-y-2'>
            <p className='font-bold text-xl'>&#8226; What is the value for creating an effect?</p>
            <p>This depends on the filter style you want, the time available for
            creation, and also the budget available for your campaign. To talk
            to me about budgets, fill out this form or send me an email.</p>
        </div>
    </section>
  )
}

export default FAQs