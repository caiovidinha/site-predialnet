"use client";
import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.predialnet.app";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/br/app/minha-predialnet/id6743764762";
    } else {
      window.location.href = "https://www.predialnet.com.br";
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center font-sans bg-white text-center px-6">
      <div>
        <h1 className="text-2xl text-[#9c0004] font-semibold mb-4">Redirecionando...</h1>
        <p className="text-gray-600 text-lg">Você está sendo levado para a loja de aplicativos.</p>
        <p className="text-gray-500 text-sm mt-2">
          Se nada acontecer, <a href="https://www.predialnet.com.br" className="underline">clique aqui</a>.
        </p>
      </div>
    </div>
  );
}
