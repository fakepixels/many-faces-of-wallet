'use client';
import WalletWrapper from './WalletWrapper';

export default function CyberButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <WalletWrapper
        className="cyberButton group min-w-[150px] px-6 py-3 shrink rounded-none bg-transparent text-[#00ff00] border-2 border-[#00ff00] hover:bg-[#00ff00] hover:text-[#] transition-all duration-300 shadow-[0_0_10px_#00ff00] hover:shadow-[0_0_20px_#00ff00] relative overflow-hidden"
        text="Gamer mode"
      />
    </div>
  );
}