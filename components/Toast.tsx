
import React from 'react';

interface ToastProps {
  message: string;
}

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F4F4F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-6 py-3 bg-[#12120D] text-[#F4F4F4] rounded-full shadow-lg animate-slideInUp"
        role="alert"
        aria-live="assertive"
    >
        <style>{`
            @keyframes slideInUp {
                0% { transform: translate(-50%, 100px); opacity: 0; }
                100% { transform: translate(-50%, 0); opacity: 1; }
            }
            .animate-slideInUp { animation: slideInUp 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; }
        `}</style>
        <CheckCircleIcon />
        <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default Toast;
