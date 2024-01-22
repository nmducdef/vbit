import axiosClient from "./axiosClient";

const medicalExamAPI = {
  getAllMedicalHistory: () => {
    const url = `/TKQXN/MedicalHistory`;
    return axiosClient.get(url);
  },

  getMedicalHistory: (id) => {
    const url = `/TKQXN/detail/${id}`;
    return axiosClient.get(url);
  },

  getDataResult: (id) => {
    const url = `/TKQXN/Lis/${id}`;
    return axiosClient.get(url);
  },

  getTestFiles: (id) => {
    const url = `/TKQXN/files/${id}`;
    return axiosClient.get(url);
  },
  GetShowFile: (params) => {
    const url = `/TKQXN/showPDFFile`;
    return axiosClient.post(url, params);
  },
  GetFileById: (params) => {
    const url = `/TKQXN/getFileById`;
    return axiosClient.post(url, params);
  },
};

export default medicalExamAPI;
