import ErrorSection from "../components/ErrorSection";

export default function Custom404() {
  return (
    <ErrorSection errorCode={404} errorMessage={"Página não encontrada"} />
  );
}
