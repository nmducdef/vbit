import { useContext, useEffect } from "react";
import MedicalHistoryView from "./MedicalHistoryView";
import medicalExamAPI from "../../api/MedicalHistoryAPI";
import useConfig from "antd/es/config-provider/hooks/useConfig";
import { MedicalHistoryContext } from "./MedicalHistoryContext";

const MedicalHistoryContainer = () => {
  const { data, setContext } = useContext(MedicalHistoryContext);

  useEffect(() => {
    const getAllMedicalHistory = async () => {
      const response = await medicalExamAPI.getAllMedicalHistory();
      setContext((prev) => ({
        ...prev,
        data: response.data.data,
      }));
      return data;
    };
    getAllMedicalHistory();
  }, []);
  return (
    <>
      <MedicalHistoryView />
    </>
  );
};

export default MedicalHistoryContainer;
