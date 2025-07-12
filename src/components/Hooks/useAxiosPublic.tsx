import axios from "axios";
const axiosPublic = axios.create({
  // baseURL:"https://college-booking-server-neon.vercel.app/"
  baseURL:"http://localhost:9000/"
})
const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;