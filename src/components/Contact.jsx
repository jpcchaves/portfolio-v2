import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useFormik } from "formik";
import FormErrorFeedback from "./formErrorFeedback/index.jsx";
import { notify } from "./notify/index.js";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("This is a required field"),
      email: Yup.string()
        .email("You need to provide a valid email")
        .required("This is a required field"),
      message: Yup.string().required("This is a required field"),
    }),
    onSubmit: ({ name, email, message }) => {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            to_name: import.meta.env.VITE_APP_EMAILJS_NAME,
            from_email: email,
            to_email: import.meta.env.VITE_APP_EMAILJS_EMAIL,
            message: message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            notify(
              "Thank you. I will get back to you as soon as possible.",
              "success",
            );
            clearForm();
          },
          (error) => {
            setLoading(false);
            console.error(error);

            notify("Ahh, something went wrong. Please try again.", "error");
          },
        );
    },
  });

  const clearForm = () => {
    validation.resetForm();
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit(e);
          }}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={validation.values.name}
              onChange={validation.handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-l font-medium ${
                validation.touched.name && validation.errors.name
                  ? "border border-red-500 focus:outline-none"
                  : "outline-0"
              }`}
            />
            {validation.touched.name && validation.errors.name ? (
              <FormErrorFeedback message={validation.errors.name} />
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={validation.values.email}
              onChange={validation.handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium ${
                validation.touched.email && validation.errors.email
                  ? "border border-red-500 focus:outline-none"
                  : "outline-0"
              }`}
            />
            {validation.touched.email && validation.errors.email ? (
              <FormErrorFeedback message={validation.errors.email} />
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={validation.values.message}
              onChange={validation.handleChange}
              placeholder="What you want to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium ${
                validation.touched.message && validation.errors.message
                  ? "border border-red-500 focus:outline-none"
                  : "outline-0"
              }`}
            />
            {validation.touched.message && validation.errors.message ? (
              <FormErrorFeedback message={validation.errors.message} />
            ) : null}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
