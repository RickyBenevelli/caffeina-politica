import React, {useState, useEffect} from 'react'
import {GrSend} from 'react-icons/gr'

import { useForm } from "react-hook-form";
import dayjs from 'dayjs'

import { sendQuestion } from '../lib/api.js'
import dati from '../json/events.json'

const Question = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  // const [showBanner, setShowBanner] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const events = JSON.parse(JSON.stringify(dati))
  const nextEvent = trovaProssimoEvento(events)
  
  const onSubmit = async (data) => {
    data.date = dayjs(new Date()).format('DD MMMM YYYY, HH:mm:ss')
    data.event = nextEvent.title
    
    try {
      await sendQuestion(data)
      setIsSubmitted(true)
      setIsError(false)
      reset()
    }
    catch (error) {
      console.log(error)
      console.log('ERROR RECEVING IN CLIENT')
      setIsError(true)
      setIsSubmitted(false)
      reset()
    }
    // setShowBanner(true);
  }

  return (
    <section className={`bg-gradient-to-br from-[#dc6041] via-[#e6a24f] to-[#dc6041]`}>
        {/* Contenitore generale */}
        <div className='flex flex-col pt-20 pb-14 text-slate-900 px-5 max-w-[1350px] m-auto min-h-screen items-center justify-center'>
          
          <div className={`fixed flex flex-row top-28 bg-green-400 rounded-lg px-4 py-2 text-lg items-center text-white ${(isSubmitted && !isError) ? "": "hidden"}`}>
            <div>
              Sended
            </div>
            <GrSend className='ml-2 fill-white'/>
          </div>

          <div className={`fixed flex flex-row top-28 bg-red-500 rounded-lg px-4 py-2 text-lg items-center text-white ${(isSubmitted && isError)||(errors.message) ? "": "hidden"}`}>
            <div>
              Error
            </div>
            <GrSend className='ml-2 fill-white'/>
          </div>
          
          <div className='font-semibold text-2xl text-center sm:text-3xl md:text-3xl py-2 md:py-3'>
              <h2>Form per fare domande</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[500px] flex flex-col text-black items-end'>
            <textarea placeholder='Scrivi la domanda che vorresti chiedere' {...register("message", { required: true })} className={`w-full mt-3 mb-1 p-2 rounded-md`}/>
            {errors.message && <div className='w-full text-center text-red-500 font-bold'>Message required</div>}
            <span>
              <input type="submit" placeholder='Send' value="Send" className='text-right py-2 px-4 mt-2 cursor-pointer text-[#E4914B] bg-white rounded-md'/>
            </span>
          </form>

        </div>
    </section>
  )
}

export default Question

function trovaProssimoEvento(events){
  const oggi = new Date()
  oggi.setDate(oggi.getDate() - 1);
  let prossimoEvento = null

  events.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })
  for (let i = 0; i < events.length; i++) {
    if (new Date(events[i].date) >= oggi) {
      prossimoEvento = events[i]
      break
    }
  }

  return prossimoEvento
}