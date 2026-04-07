import React from "react";
import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
 
export const AuthPage = () => {
  const [isForgot, setIsForgot] = useState(false);
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-xl w-full bg-white p-6 rounded-xl border border-gray-200 md:p-10 shadow-lg ">
        <div className="flex justify-center mb-6">
          <img
            src="/src/assets/img/kinal_sports.png"
            alt="Kinal Sports"
            className="h-20 w-auto"
          />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3x1 font-bold text-gray-900 mb-2">
            {isForgot ? "Recuperar Contraseña" : "Bienvenido de nuevo"}
          </h1>
 
          <p className="text-gray-600 text-base max-w-md mx-auto">
            {isForgot
              ? "Ingresa tu correo electrónico para recuperar tu contraseña"
              : "Ingresa a tu cuenta de administrador Kinal Sports"}
          </p>
        </div>
 
        {isForgot ? (
          <ForgotPasswordForm
            onSwitch={() => {
              setIsForgot(false);
            }}
          />
        ) : (
          <LoginForm
            onforgot={() => {
              setIsForgot(true);
            }}
          />
        )}
      </div>
    </div>
  );
};