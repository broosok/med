import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../shared/lib/config";

const fetcher = () => {
  return axios.create({
    withCredentials: true,
  });
};

const errorSwal = (msg) =>
  Swal.fire({
    icon: "error",
    title: "Произошла ошибка",
    text: msg || "Ошибка сервера",
  });

export const getOrders = async () => {
  const axios = fetcher();
  try {
    const response = await axios.get(`${BASE_URL}/goods/get_order`);

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
