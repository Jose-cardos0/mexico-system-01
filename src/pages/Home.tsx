import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, Home as HomeIcon, User } from "lucide-react";
import { useApp } from "../context/AppContext";
import { TransferModal } from "../components/TransferModal";
import { AnimatedValue } from "../components/AnimatedValue";

export function Home() {
  const navigate = useNavigate();
  const { userData, availableForms } = useApp();
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  return (
    <div className="bg-[#F1F2FF] min-h-screen">
      {/* Transfer Modal */}
      <TransferModal
        isOpen={isTransferModalOpen}
        onClose={() => setIsTransferModalOpen(false)}
      />

      {/* Top decorative curve */}
      <div className="absolute top-0 left-0 right-0 h-[25%] bg-[#00A650] rounded-b-[2.5rem]"></div>

      <div className="container mx-auto px-4 pt-8 pb-20 relative">
        {/* Header */}
        <div className="flex flex-col justify-start items-center">
          <div className="flex justify-center gap-2 items-center">
            <img
              className="w-20 animate-spin-logo max-md:w-10"
              src="/icon192.png"
              alt="Portal de Beneficios de México"
            />
            <h1 className="text-white text-sm font-semibold">
              MEXICO <br />
              SYSTEM
            </h1>
          </div>
          <h1 className="text-white text-2xl font-semibold mb-6 mt-4">
            Hola, Leon
          </h1>
        </div>
        {/* Main Card */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-lg font-medium mb-8">
            Ingresos en los últimos 7 días
          </h2>

          {/* Wallet icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#00A650] rounded-full flex items-center justify-center">
              <Wallet className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Number of forms */}
          <p className="text-center text-sm mb-2">
            {userData.completedForms} Rescates realizados
          </p>

          {/* Main value */}
          <AnimatedValue
            value={userData.totalFormsValue}
            className="text-center text-[#00A650] text-5xl font-bold mb-6"
          />

          {/* Salary card */}
          <div className="bg-[#F1F2FF] rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-[#00A650]" />
              <span className="font-medium">Mi salario</span>
            </div>
            <p className="text-[#00A650] font-medium mt-1">
              MX$ {userData.salary.toFixed(2)}
            </p>
          </div>

          {/* Transfer button */}
          <button
            onClick={() => setIsTransferModalOpen(true)}
            className="w-full bg-[#00A650] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2"
          >
            <img
              src="https://i.ibb.co/ycd47ZT9/paypal-1.png"
              alt="PayPal"
              className="w-5 h-5"
            />
            Transferir fondos
          </button>
        </div>

        {/* Forms Section */}
        <section>
          <h2 className="text-[#00A650] text-xl font-semibold mb-4">
            Valores recibidos:
          </h2>

          {/* Forms list */}
          <div className="space-y-3">
            {availableForms.map((form) => (
              <button
                key={form.id}
                onClick={() => navigate(`/form/${form.id}`)}
                className="w-full bg-white rounded-xl p-4 flex justify-between items-center shadow-sm"
              >
                <div>
                  <h3 className="text-[#00A650] font-medium">{form.title}</h3>
                  <p className="text-gray-500">{form.type}</p>
                </div>
                <span className="text-[#00A650] font-medium">
                  + MX$ {form.reward.toFixed(2)}
                </span>
              </button>
            ))}
          </div>
        </section>
        <p className="text-center text-[#00A650] underline font-medium mt-4">
          Ver todos los formularios
        </p>
      </div>

      {/* Navigation menu */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-4">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <button className="text-[#00A650]">
              <HomeIcon className="w-6 h-6" />
            </button>
            <button className="text-[#00A650]">
              <Wallet className="w-6 h-6" />
            </button>
            <button className="text-[#00A650]">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

