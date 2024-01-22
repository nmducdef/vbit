import { createContext, useContext, useEffect, useState } from "react";
import medicalExamAPI from "../../api/MedicalHistoryAPI";
import { MedicalHistoryContext } from "../lich-su-kham-benh/MedicalHistoryContext";

const BoxUserInforContext = createContext({});

export default BoxUserInforContext;

export const BoxUserInforContextProvider = ({ children }) => {
  const { selectedId } = useContext(MedicalHistoryContext);

  const [dataMedicalHistory, setDataMedicalHistory] = useState([]);
  useEffect(() => {
    const getMedicalHistory = async () => {
      const response = await medicalExamAPI.getMedicalHistory(+selectedId);
      setDataMedicalHistory(response.data.data || []);
      console.log(response.data.data);
    };

    getMedicalHistory();
  }, [selectedId]);

  return (
    <BoxUserInforContext.Provider value={{ dataMedicalHistory }}>
      {children}
    </BoxUserInforContext.Provider>
  );
};

export const useBoxUserInforContext = () => useContext(BoxUserInforContext);
