import React, { useState } from "react";
import Modal from "../components/Modal";
import CPU from "../assets/SVG/CPU.svg";
import Cooler from "../assets/SVG/Cooler.svg";
import Monitor from "../assets/SVG/Monitor.svg";
import Motherboard from "../assets/SVG/Motherboard.svg";
import RAM from "../assets/SVG/RAM.svg";
import VideoCard from "../assets/SVG/GPU.svg";
import Case from "../assets/SVG/Case.svg";
import PowerSupply from "../assets/SVG/PSU.svg";
import axios from "axios";

const Components = [
  { name: "CPU", icon: CPU },
  { name: "GPU", icon: VideoCard },
  { name: "PSU", icon: PowerSupply },
  { name: "MEMORY", icon: RAM },
  { name: "MONITOR", icon: Monitor },
  { name: "MOTHERBOARD", icon: Motherboard },
  { name: "STORAGE", icon: Case },
  { name: "CPU_COOLER", icon: Cooler },
];

const Build = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});

  // Fetch component data from the backend
  const fetchComponentData = async (type) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/API/Component/${type}`
      );
      const result = response.data;

      if (result.success) {
        setProductList(result.data);
      } else {
        console.error("Error fetching component data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching component data:", error);
    }
  };

  // Handle component selection and open modal
  const handleSelect = async (component) => {
    setSelectedComponent(component);
    await fetchComponentData(component.name);
    setShowModal(true);
  };

  // Handle product selection and update the component
  const handleProductSelect = (product) => {
    setSelectedProducts((prevProducts) => ({
      ...prevProducts,
      [selectedComponent.name]: product,
    }));
    closeModal();
    console.log(product.Price);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedComponent(null);
    setProductList([]);
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Components.map((component, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg hover:shadow-lg cursor-pointer transition"
              onClick={() => handleSelect(component)}
            >
              <img
                src={component.icon}
                alt={component.name}
                className="w-40 h-40 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-center">
                {component.name}
              </h3>
              {selectedProducts[component.name] && (
                <p className="text-sm text-center text-green-500">
                  {selectedProducts[component.name].Description} - $
                  {selectedProducts[component.name].Price}
                </p>
              )}
            </div>
          ))}
        </div>

        <Modal
          show={showModal}
          component={selectedComponent}
          onClose={closeModal}
          productList={productList}
          onProductSelect={handleProductSelect}
        />
      </div>
    </section>
  );
};

export default Build;
