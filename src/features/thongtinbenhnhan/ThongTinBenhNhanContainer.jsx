import { useEffect } from "react";
import medicalExamAPI from "../../api/MedicalHistoryAPI";
import ThongTinBenhNhanView from "./ThongTinBenhNhanView";
import {
  MedicalHistoryContextProvider,
  useMedicalHistoryContext,
} from "../lich-su-kham-benh/MedicalHistoryContext";
import {} from "./ThongTinBenhNhanContext";

const ThongTinBenhNhanContainer = () => {
  return (
    <>
      <MedicalHistoryContextProvider>
        <ThongTinBenhNhanView />
      </MedicalHistoryContextProvider>
    </>
  );
};

export default ThongTinBenhNhanContainer;
