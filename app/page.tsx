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
    <main className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Sección de bienvenida */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">GBT Summit 2024</h1>
          <div className="text-center">
            <p className="text-2xl lg:text-3xl font-extrabold mb-4">Faltan</p>
            <div className="flex space-x-4 mb-8 justify-center">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold bg-white text-blue-900 rounded-full w-20 lg:w-24 h-20 lg:h-24 flex items-center justify-center animate-pulse">
                  {timeLeft.months}
                </div>
                <p className="text-base lg:text-lg mt-2">meses</p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold bg-white text-blue-900 rounded-full w-20 lg:w-24 h-20 lg:h-24 flex items-center justify-center animate-pulse">
                  {timeLeft.weeks}
                </div>
                <p className="text-base lg:text-lg mt-2">semanas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold bg-white text-blue-900 rounded-full w-20 lg:w-24 h-20 lg:h-24 flex items-center justify-center animate-pulse">
                  {timeLeft.days}
                </div>
                <p className="text-base lg:text-lg mt-2">días</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de formulario */}
        <div className="lg:w-1/2 bg-white flex flex-col justify-center p-8 lg:p-16 shadow-lg rounded-lg">
        <Image src="/logo.svg" alt="Logo" width={150} height={50} />
         
          <h3 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-4">{isRegister ? "Registro" : "Iniciar Sesión"}</h3>
          <form className="space-y-4">
            {isRegister && (
              <>
                <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="text" placeholder="Nombre" />
                <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="text" placeholder="Teléfono" />
                <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="text" placeholder="Empresa" />
                <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="text" placeholder="Puesto" />
              </>
            )}
            <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="email" placeholder="Correo" />
            <input className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="password" placeholder="Contraseña" />
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
    </main>
  );
}
