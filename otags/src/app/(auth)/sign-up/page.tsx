import AuthForm from "@/components/shared/AuthForm";
import AuthImage from "@/components/shared/AuthImage";
import React from "react";

const Signup = () => {
  return (
    <section className="flex">
      <div className="hidden lg:block sticky top-0 left-0 flex-center h-screen flex-center w-1/2">
        <AuthImage path="/assets/signup.png" width={436.31} height={494.97} />
      </div>
      <div className="w-1/3 py-24">
        <AuthForm type="SIGN_UP" />
      </div>
    </section>
  );
};

export default Signup;
