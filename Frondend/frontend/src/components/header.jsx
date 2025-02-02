import React from "react";
import Logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";

const header = () => {
  return (
    <header class="bg-DarkBlue">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/Home">
            <span class="sr-only">Comp. Studio</span>
            <img class="h-16 w-auto relative" src={Logo} />
          </a>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-md/6 font-semibold text-white">
            Community
          </a>
          <a href="#" class="text-md/6 font-semibold text-white">
            FAQs
          </a>
          <a href="#" class="text-md/6 font-semibold text-white">
            Contact Us
          </a>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end align-center gap-x-6">
          <a
            href="/Login"
            class="text-md/6 font-semibold text-white flex items-center"
          >
            Log in <FaArrowRight className="ml-2" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default header;
