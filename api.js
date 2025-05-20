import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});
export const api = {

  registerDonation: async (values) => {
    const res = await instance.post("/api/donation/donation", null , {params: values})
    return res
  },

  fetchDonations: async () => {
    const res = await instance.get("/api/donation/donation?_limit=20")
    return res
  },

  totalDonations: async () => {
    const res = await instance.get("/api/donation/total")
    return res
  },

  registerSignature: async (values) => {
    const res = await instance.post("/api/signature/signature", null, {params: values})
    return res
  },

  fetchSignatures: async () => {
    const res = await instance.get("/api/signature/signature?_limit=20")
    return res
  },

  totalSignatures: async () => {
    const res = await instance.get("/api/signature/total")
    return res
  },


};
