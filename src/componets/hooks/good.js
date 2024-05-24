import axios from "axios";
import Swal from "sweetalert2";

export const BASE_URL = "http://localhost:5000";

const fetcher = () => {
  return axios.create({
    withCredentials: true,
  });
};

const successSwal = () =>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Успешно!",
    showConfirmButton: false,
    timer: 1500,
  });

const errorSwal = (msg) =>
  Swal.fire({
    icon: "error",
    title: "Произошла ошибка",
    text: msg || "Ошибка сервера",
  });

  
  

export const getAllGoodsRequest = async () => {
  const axios = fetcher();
  try {
    const response = await axios.get(`${BASE_URL}/goods/get_all`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      errorSwal(error.response.data.message);
    } else {
      errorSwal();
    }
    return false;
  }
};
