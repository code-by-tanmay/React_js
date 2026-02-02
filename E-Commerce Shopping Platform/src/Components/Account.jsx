import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Account() {
  const { orders } = useContext(CartContext);

  return (
    <div className="flex mt-[100px]">
      <div className="w-[250px] bg-gray-100 p-5 h-screen shadow-md">
        <h2 className="text-xl font-bold mb-5 text-center">Account</h2>
        <a
          href="#orders"
          className="block py-2 px-3 rounded hover:bg-gray-200 text-center"
        >
          My Orders
        </a>
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="border p-6 rounded-lg shadow-md mb-6"
            >
              <h2 className="text-xl font-bold mb-3">
                Order ID: {order.id}
              </h2>

              <p className="text-gray-600 mb-3">Date: {order.date}</p>

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="border-b py-2 flex justify-between"
                >
                  <span>
                    {item.title} (x{item.quantity})
                  </span>
                  <span>₹ {item.price * item.quantity}</span>
                </div>
              ))}

              <h3 className="text-lg font-bold mt-4">
                Total: ₹ {order.total}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Account;
