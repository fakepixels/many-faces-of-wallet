'use client';
import WalletWrapper from './WalletWrapper';

export default function BaseButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <WalletWrapper
        className="ockConnectWallet_Container min-w-[120px] px-4 py-2 shrink rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        text="Get Cute!"
      />
    </div>
  );
}