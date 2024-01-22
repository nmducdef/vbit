import BoxDataResultContainer from "./BoxDataResultContainer";
import { BoxDataResultContextProvider } from "./BoxDataResultContext";

const BoxDataResultPage = () => {
  return (
    <>
      <BoxDataResultContextProvider>
        <BoxDataResultContainer />
      </BoxDataResultContextProvider>
    </>
  );
};

export default BoxDataResultPage;
