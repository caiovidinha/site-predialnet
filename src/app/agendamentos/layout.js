import { Suspense } from "react";
import RegistrarAgendamentos from "./page";

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <RegistrarAgendamentos />
    </Suspense>
  );
}
