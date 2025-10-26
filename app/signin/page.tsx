import Footer from "@/components/Footer";
import AuthForm from "@/components/SignupForm";
import Image from "next/image";

export default function SigninPage() {
  return (
    <div className=" flex flex-col bg-white max-w-7xl mx-auto ">
      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Left Side - Travel Visual */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center    from-blue-50 to-blue-100">
          <div className="relative w-full h-full flex items-center justify-start">
            <Image
              src="/signup/singUp.png"
              alt="Sign In"
              width={600}
              height={600}
              className="w-[600px] h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Right Side - Signin Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center  p-20 bg-white">
          <div className="w-full max-w-md">
            <div className="bg-white border border-gray-200  rounded-2xl p-5  shadow-lg ">
              <AuthForm mode="signin" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
