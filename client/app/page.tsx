import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <section className="flex flex-col md:flex-row p-5">
      <div className="self-baseline ml-2 mx-10">
        <h1 className="text-3xl">Knit</h1>
        <hr />
        <div className="w-full md:w-[275px] mt-3">
          <p className="text-xl w-full">
             Join Knit today and startweaving your own digital tapestry of connections, one thread at a time!
          </p>
        </div>
      </div>
      <form action="" className="block md:px-5 self-center mt-5 md:m-0 w-full lg:mx-10">
        <div className="mb-5">
          <h1 className="text-3xl">Login</h1>
          <hr />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" className="mb-4 w-full"/>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name="password"  className="w-full"/>
          <br />
          <button className=" w-[100%] text-s mt-2 rounded-full hover:bg-[#81a48c] hover:text-white transition-colors py-2 px-3 mx-auto">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default page;
