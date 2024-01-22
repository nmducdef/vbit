import MedicalHistoryContainer from "./MedicalHistoryContainer";
import { MedicalHistoryContextProvider } from "./MedicalHistoryContext";
const MedicalHistoryPage = () => {
  return (
    <>
      <MedicalHistoryContextProvider>
        <MedicalHistoryContainer />
      </MedicalHistoryContextProvider>
    </>
  );
};

export default MedicalHistoryPage;
