import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [testPayment, setTestPayment] = useState(false);

  const handleTestPayment = () => {
    setTestPayment(true);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />
      {!testPayment ? (
        <div className="pb-10">
          <p>
            Payment gateway is only available for production. Want to test?
          </p>
          <button
            onClick={handleTestPayment}
            className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
          >
            Test Payment
          </button>
          <Link to="/">
            <button className="ml-4 w-52 h-10 bg-gray-400 text-white text-lg hover:bg-black duration-300">
              Explore More
            </button>
          </Link>
        </div>
      ) : (
        <div className="pb-10">
          <p className="text-green-500 font-semibold">
            Test payment successful! Thank you.
          </p>
        </div>
      )}
    </div>
  );
};

export default Payment;
