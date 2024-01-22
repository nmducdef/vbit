import { createContext, useState, useContext, useEffect } from "react";
import medicalExamAPI from "../../api/MedicalHistoryAPI";

export const MedicalHistoryContext = createContext({
  setContext: () => {},
  data: {},
  selectedId: 24,
});

export const MedicalHistoryContextProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getAllMedicalHistory();
  // }, []);

  // const getAllMedicalHistory = async () => {
  //   const response = await medicalExamAPI.getAllMedicalHistory();
  //   setData(response.data.data || []);
  // };
  const [context, setContext] = useState([]);

  return (
    <MedicalHistoryContext.Provider value={{ ...context, setContext }}>
      {children}
    </MedicalHistoryContext.Provider>
  );
};

export const useMedicalHistoryContext = () => useContext(MedicalHistoryContext);
