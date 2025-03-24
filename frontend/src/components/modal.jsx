import React from "react";

const Modal = ({ show, component, onClose, productList, onProductSelect }) => {
  if (!show || !component) return null;

  // List of dynamic properties to display conditionally
  const productDetails = [
    { key: "Socket", label: "Socket" },
    { key: "MemoryType", label: "Memory Type" },
    { key: "Eff_Rating", label: "Efficiency Rating" },
    { key: "Type", label: "DDR Type" },
    { key: "Resolution", label: "Resolution" },
    { key: "Form", label: "Form Factor" },
    { key: "Capacity", label: "Capacity" },
    { key: "RPM", label: "RPM" },
    { key: "Watts", label: "Wattage" },
  ];

  return (
    <div className="fixed inset-0 bg-gray-500/80 flex items-center justify-center z-50">
      <div className="bg-white pt-16 p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-500 hover:text-red-500 text-3xl"
        >
          &times;
        </button>

        {/* Product List */}
        {productList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto max-h-[500px]">
            {productList.map((product, index) => (
              <div
                key={index}
                className="w-auto p-4 bg-gray-100 rounded-lg shadow hover:shadow-md cursor-pointer transition"
                onClick={() => onProductSelect(product)}
              >
                {product.imageURL ? (
                  <img
                    src={product.imageURL}
                    alt={product.Description || "Product Image"}
                    className="w-auto mx-auto mb-3 rounded-lg"
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto mb-3 bg-gray-200 rounded-lg" />
                )}

                <h3 className="text-lg font-semibold text-center">
                  {product.Description || "Unnamed Product"}
                </h3>

                <p className="text-sm text-slate-500 text-center">
                  Price: ${product.Price || "N/A"}
                </p>

                <div className="mt-3 space-y-1 text-sm text-slate-500">
                  {productDetails.map(
                    (detail) =>
                      product[detail.key] && (
                        <p key={detail.key}>
                          {detail.label}: {product[detail.key]}
                        </p>
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
