import axios from "axios";
const axiosPublic = axios.create({
  // baseURL:"https://college-booking-server-neon.vercel.app/"
  baseURL:"https://college-booking-server-neon.vercel.app/"
})
const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;