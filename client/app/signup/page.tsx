'use client'

import React from 'react'



const page = () => {
  return (
    <form className="block p-5">
      <div className="mb-5">
        <h1 className="text-xl">Login</h1>
        <hr />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" className="mb-4 w-full" />
        <br />
        <label htmlFor="email">Username</label>
        <br />
        <input type="email" id="email" name="email" className="w-full" />
        <br />
        <br />
        <div className="float float-left mr-1">
          <label htmlFor="name">First Name</label>
          <br />
          <input type="text" className="" />
        </div>
        <div className="float float-left mb-4">
          <label htmlFor="name">Last Name</label>
          <br />
          <input type="text" className="" />
        </div>
        <br></br>
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" className='w-full'/>
        <br />
        <button className=" w-[100%] text-s mt-2 rounded-full hover:bg-[#81a48c] hover:text-white transition-colors py-2 px-3 mx-auto">
          Signup
        </button>
      </div>
    </form>
  );
}

export default page