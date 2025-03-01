import { useState,useEffect } from "react";
const SplashScreen:React.FC<{onFinish: () => void}> = ({onFinish}) => {
    const [fadeOut,setFadeOut] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                onFinish();
            },500);
        },3000);
    },[onFinish]);
  return (
    <div className={`h-screen w-screen flex justify-center items-center bg-white ${fadeOut ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <div className="w-2xl h-32">
            <img src="/assets/icons/splash.png" alt="splash"  className="w-full h-full"/>
        </div>
    </div>
  );
}
export default SplashScreen;