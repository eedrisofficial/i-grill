import React, { useContext } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { GlobalContext } from "../../context/GlobalState";

const FlutterPay = () => {
  const { state } = useContext(GlobalContext);

  const config = {
    public_key: "FLWPUBK_TEST-d8ab65dc58a2ac1d980e96719cc1a0e7-X",
    tx_ref: Date.now(),
    amount: state.total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "eedrisharuna3@gmail.com",
      phone_number: "+2348132624679",
      name: "Idris",
    },
    customizations: {
      title: "igrills",
      description: "Payment for items in cart",
      logo: "https://lh3.googleusercontent.com/a/AAcHTtfOej-gN7jVTJBEyMQSrJGRL6Tq1jKGxdGvqLmRkQ=s192-c-rg-br100",
    },
  };

  const fwConfig = {
    ...config,
    text: "Checkout",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };
  return (
    <FlutterWaveButton
      {...fwConfig}
      className="bg-[#24B155] w-[100%] opacity-85 font-bold text-[#FFF] px-8 py-2 text-center  hover:opacity-100 duration-300"
    />
  );
};

export default FlutterPay;
