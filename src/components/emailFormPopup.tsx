"use client"

import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Popup() {
  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setVisible(!visible);
  }

  // Email form
  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!form.current) return;

      try {
          await emailjs.sendForm(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
              form.current,
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          );
          alert("Message sent successfully!");
          togglePopup();
          form.current.reset();
      } catch (err) {
          console.log(err);
          alert("Failed to send message, please try again.");
      }
  }

  return (
    <div>
      {/* POP-UP BUTTON */}
      <button id='btnMail' onClick={togglePopup}>
        <div className="flex h-14">
          <div className='w-14 h-auto bg-tosca flex justify-center items-center'>
            <EnvelopeIcon className="size-8 text-baseLight"/>
          </div>
          <div id='btnMailText' className='w-auto h-auto bg-blue px-4 text-lg flex justify-center items-center text-baseLight font-semibold'>
            Mail Me
          </div>
        </div>
      </button>

      {/* POP-UP CONTAINER */}
      <div className={
        `fixed top-0 left-0 w-[100vw] h-[100vh] bg-baseDark/50 dark:bg-baseLight/20 flex justify-center items-center z-50
        ${visible ? '' : 'hidden'}` 
      }>
        {/* POP-UP FORM */}
        <div className="contentToggleLight bgToggleLight max-w-[90vw] w-[25rem] h-auto max-h-[90vh] overflow-y-scroll overscroll-contain px-5 pt-10 pb-5 relative">
          <button className='absolute top-0 right-0' onClick={togglePopup}>
            <div className='w-10 h-10 flex justify-center items-center bg-[rgba(255,0,0,0.7)]'>
              <XMarkIcon className='size-auto text-baseLight'/>
            </div>
          </button>
          <form ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col gap-4'>

              <div className="formField">
                <label>Name</label>
                <input type="text" name="sender_name" required/>
              </div>

              <div className="formField">
                <label>Email Address</label>
                <input type="email" name="sender_email" required/>             
              </div>

              <div className="formField">
                <label>Subject</label>
                <input type="text" name="subject" required/> 
              </div>

              <div className="formField">
                <label>Message</label>
                <textarea className='resize-none' rows={4} name="content" required/>
              </div>

              <button id='btnMailSubmit' type="submit" className='bg-tosca hover:bg-tosca/80 text-baseLight py-3'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}