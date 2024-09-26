'use client';
import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <WalletWrapper
        className="ockConnectWallet_Container min-w-[90px] shrink bg-[#af1faf] text-[#030712] hover:bg-black"
        text="Sign up"
      />
    </div>
  );
}