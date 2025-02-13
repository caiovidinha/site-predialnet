import { Suspense } from "react";
import ResetPassword from "./page";

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
