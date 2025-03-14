import React from "react";

const Home = () => {
  return (
    <section class="py-18 flex items-center min-h-screen justify-center bg-white">
      <div class="mx-auto max-w-[43rem]">
        <div class="text-center">
          <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-DarkBlue font-poppins drop-shadow-md">
            Select Your Components. Build Your Dream PC. Deliver to You.
          </h1>
          <p class="mt-3 text-lg leading-relaxed text-slate-400 font-poppins ">
            Choose your components, and we’ll handle the assembly, pricing, and
            compatibility for a flawless, ready-to-use custom PC.
          </p>
        </div>

        <div class="mt-6 flex items-center justify-center gap-4">
          <a
            href="/Build"
            class="transform rounded-md bg-LightBlue-100 px-5 py-3 font-medium text-white transition-colors hover:bg-DarkBlue"
          >
            Start Your Build
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
