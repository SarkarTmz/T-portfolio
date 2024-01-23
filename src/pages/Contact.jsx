import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact container pt-12">
      <div className="contact__wrapper">
        <p className='font-bold text-xl'>Contact</p>
        <form action="">
          <label htmlFor="name">Name</label><br />
          <input type="text" name='name' class="h-8 text-black"/><br />
          <label htmlFor="number">Number</label><br />
          <input type="number" name='number' class="h-8 text-black"/><br />
          <label htmlFor="email">Email</label><br />
          <input type="email" name='email' class="h-8 text-black"/><br />
          <label htmlFor="textarea">Message</label><br />
          <textarea name="textarea" id="" cols="30" rows="10" className='text-black'></textarea>
          <button type="submit" class="h-8 bg-white text-black">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact