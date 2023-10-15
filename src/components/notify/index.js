import { toast } from "react-toastify";

export const notify = (title, type) => {
  toast(title, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    type,
  });
};
