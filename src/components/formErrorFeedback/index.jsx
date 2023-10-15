import React from "react";

const FormErrorFeedback = ({ message }) => {
  return <p className={"text-red-500 text-sm mt-2"}>{message}</p>;
};

export default FormErrorFeedback;
