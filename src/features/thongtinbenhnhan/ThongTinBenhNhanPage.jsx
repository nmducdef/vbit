import { MedicalHistoryContextProvider } from "../lich-su-kham-benh/MedicalHistoryContext";
import ThongTinBenhNhanContainer from "./ThongTinBenhNhanContainer";
import { BoxUserInforContextProvider } from "./ThongTinBenhNhanContext";

const ThongTinBenhNhanPage = () => {
  return (
    <BoxUserInforContextProvider>
      <ThongTinBenhNhanContainer />
    </BoxUserInforContextProvider>
  );
};

export default ThongTinBenhNhanPage;
