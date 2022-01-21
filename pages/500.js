import ErrorSection from "../components/ErrorSection";

export default function Custom500() {
  return (
    <ErrorSection
      errorCode={500}
      errorMessage={"Houston we have a problem"}
      description={"Houve um erro no servidor tente novamente mais tarde."}
    />
  );
}
