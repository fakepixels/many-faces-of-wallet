import SignupButton from "./components/SignupButton";
import BaseButton from "./components/BaseButton";
import CuteButton from "./components/CuteButton";
import CyberButton from "./components/CyberButton";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow grid grid-cols-4 grid-rows-2 gap-4 p-4">
          <div className="flex items-center justify-center">
            <SignupButton />
          </div>
          <div className="flex items-center justify-center">
            <BaseButton />
          </div>
          <div className="flex items-center justify-center">
            <CuteButton />
          </div>
          <div className="flex items-center justify-center">
            <CyberButton />
          </div>
        </div>
      </div>
    </div>
  );
}
