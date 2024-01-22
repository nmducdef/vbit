import { useEffect } from "react";
import { useMedicalHistoryContext } from "../../lich-su-kham-benh/MedicalHistoryContext";
import BoxDataResultView from "./BoxDataResultView";
import medicalExamAPI from "../../../api/MedicalHistoryAPI";
import { useBoxDataResultContext } from "./BoxDataResultContext";

const BoxDataResultContainer = () => {
  const { selectedId } = useMedicalHistoryContext();
  const { setContext, data } = useBoxDataResultContext();

  useEffect(() => {
    const getDataResult = async () => {
      const response = await medicalExamAPI.getDataResult(+selectedId);
      setContext((prev) => ({
        ...prev,
        data: response.data.data,
      }));
      return data;
    };
    getDataResult();
  }, [selectedId]);

  return (
    <>
      <BoxDataResultView />
    </>
  );
};

export default BoxDataResultContainer;
