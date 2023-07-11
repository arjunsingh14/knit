import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="self-baseline pb-4">
        <h1 className="text-3xl">Knit</h1>
        <hr className=""></hr>
      </div>
      <div>
        <p className="text-l">
          Welcome to Knit, the minimalist social media platform designed to connect people
          through short,<br></br>concise messages. Join Knit today and start
          weaving your own digital tapestry of connections,
          <br></br>one thread at a time.
        </p>
      </div>
      <div className="mt-5">
        <button className="rounded-full px-4">
          <Link href="/login">Login</Link>
        </button>
        <button className="rounded-full px-4">
          <Link href="/signup">Signup</Link>
        </button>
      </div>
    </section>
  );
};

export default page;
