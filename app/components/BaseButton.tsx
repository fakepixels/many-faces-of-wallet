'use client';
import WalletWrapper from './WalletWrapper';

export default function BaseButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <WalletWrapper
        className="ockConnectWallet_Container min-w-[90px] shrink rounded-sm bg-[#0052ff] text-[#000000] hover:bg-[#86a6ec] hover:text-[#283295]"
        text="Get based"
      />
    </div>
  );
}