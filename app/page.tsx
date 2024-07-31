"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { differenceInMonths, differenceInWeeks, differenceInDays } from 'date-fns';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    weeks: 0,
    days: 0
  });

  const [isRegister, setIsRegister] = useState(true);

  useEffect(() => {
    const targetDate = new Date('2024-09-26T08:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const months = differenceInMonths(targetDate, now);
      const weeks = differenceInWeeks(targetDate, now) % 4;
      const days = differenceInDays(targetDate, now) % 7;

      setTimeLeft({ months, weeks, days });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 p-4 lg:p-12">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="lg:w-1/2 relative">
          <Image
            className="object-cover w-full h-full"
            src="/sky.png" // Imagen aleatoria, puedes cambiarla luego
            alt="Summit Background"
            layout="fill"
          />
        </div>
        <div className="p-8 lg:p-16 w-full lg:w-1/2 text-sm">
          <div className="mb-6 flex justify-center lg:justify-start">
            <Image
              src="/logo.png" // Asegúrate de que esta sea la ruta correcta para tu logo
              alt="Logo"
              width={150}
              height={50}
            />
          </div>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">2024 Summit</h2>
          <p className="text-lg text-blue-700 mb-8">Faltan</p>
          <div className="flex space-x-4 mb-8 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-900 bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center">
                {timeLeft.months}
              </div>
              <p className="text-base text-blue-700 mt-2">meses</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-900 bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center">
                {timeLeft.weeks}
              </div>
              <p className="text-base text-blue-700 mt-2">semanas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-900 bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center">
                {timeLeft.days}
              </div>
              <p className="text-base text-blue-700 mt-2">días</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">{isRegister ? "Registro" : "Iniciar Sesión"}</h3>
            <form className="space-y-4">
              {isRegister && (
                <>
                  <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Nombre" />
                  <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Teléfono" />
                  <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Empresa" />
                  <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Puesto" />
                </>
              )}
              <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Correo" />
              <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Contraseña" />
              <button className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">{isRegister ? "Registrar" : "Iniciar Sesión"}</button>
            </form>
            <button 
              className="w-full p-2 mt-4 text-blue-600 font-semibold rounded-lg hover:text-blue-700 transition-colors" 
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? "¿Ya tienes una cuenta? Inicia Sesión" : "¿No tienes una cuenta? Regístrate"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
