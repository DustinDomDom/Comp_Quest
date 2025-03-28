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
  const [totalPrice, setTotalPrice] = useState(0);

  const userid = localStorage.getItem("userid"); // Get userID from localStorage

  // Fetch component data from backend
  const fetchComponentData = async (type) => {
    try {
      const response = await axios.get(`http://localhost:3000/API/${type}`);
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

  // Handle product selection and update component
  const handleProductSelect = (product) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = {
        ...prevProducts,
        [selectedComponent.name]: product,
      };

      // Update total price after selecting a product
      calculateTotalPrice(updatedProducts);
      return updatedProducts;
    });
    closeModal();
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedComponent(null);
    setProductList([]);
  };

  // Calculate total price of selected products
  const calculateTotalPrice = (products) => {
    let total = Object.values(products).reduce(
      (sum, product) => (sum += parseFloat(product.Price || 0)),
      0
    );
    setTotalPrice(total.toFixed(2));
  };

  // Check if all components are selected
  const allComponentSelected = () => {
    return Components.every(
      (component) => selectedProducts[component.name] !== undefined
    );
  };

  // Send order to the backend
  const handleOrder = async () => {
    if (!allComponentSelected()) {
      alert("Complete the Build!");
      return;
    }

    const orderData = {
      userID: userid,
      components: selectedProducts,
      totalPrice: parseFloat(totalPrice),
      orderDate: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/order/Pending",
        orderData
      );

      if (response.data.success) {
        alert("Order Successfully Placed!");
        console.log("Order saved:", response.data);
      } else {
        console.error("Error placing order:", response.data.message);
        alert("Error placing order!");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred while submitting the order.");
    }
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 pb-12 pt-12">
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
      <hr />
      <div className="w-auto pt-6 pb-6">
        <div className="flex justify-between">
          <div>
            <button
              onClick={handleOrder}
              className="transform rounded-md bg-green-700 px-5 py-3 font-medium text-white transition-colors hover:bg-DarkBlue"
            >
              Order Confirm
            </button>
          </div>
          <h3>Total ${totalPrice}</h3>
        </div>
      </div>
    </section>
  );
};

export default Build;
