import React from "react";

import CPU from "../assets/SVG/CPU.svg";
import Cooler from "../assets/SVG/Cooler.svg";
import Monitor from "../assets/SVG/Monitor.svg";
import Motherboard from "../assets/SVG/Motherboard.svg";
import RAM from "../assets/SVG/RAM.svg";
import VideoCard from "../assets/SVG/GPU.svg";
import Case from "../assets/SVG/Case.svg";
import PowerSupply from "../assets/SVG/PSU.svg";

const Components = [
  {
    Component_name: CPU,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: Cooler,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: Monitor,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: Motherboard,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: RAM,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: VideoCard,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: Case,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
  {
    Component_name: PowerSupply,
    Selected_name: "",
    Tags: [],
    Price_tag: "",
    Wattage: "",
  },
];

const Build = () => {
  return (
    <section class="container px-4 mx-auto">
      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden"></div>
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-300 text-black">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-sm font-normal text-center"
                  >
                    <div class="flex items-center justify-center gap-x-3">
                      <span>Component</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-12 py-3.5 text-sm font-normal text-center "
                  >
                    <div class="flex items-center justify-center gap-x-3">
                      <span>Selection</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-center "
                  >
                    <div class="flex items-center justify-center gap-x-3">
                      <span>Tags</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-center "
                  >
                    <div class="flex items-center justify-center gap-x-3">
                      <span>Price</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-center "
                  >
                    <div class="flex items-center justify-center gap-x-3">
                      <span>Estimated Wattage</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white  divide-y divide-gray-200 dark:divide-gray-700">
                {Components.map((component) => (
                  <tr>
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="flex items-center justify-center">
                        <div class="text-sm text-gray-900 w-32">
                          <img src={component.Component_name} alt="" />
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {component.Selected_name}
                      </div>
                    </td>
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {component.Tags.map((tag) => (
                          <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 ">
                        {component.Price_tag}
                      </div>
                    </td>
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 ">
                        {component.Wattage}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Build;
