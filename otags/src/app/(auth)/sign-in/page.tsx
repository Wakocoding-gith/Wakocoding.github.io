import AuthForm from "@/components/shared/AuthForm";
import AuthImage from "@/components/shared/AuthImage";
import React from "react";

const Signin = () => {
  return (
    <section className="flex">
      <div className="hidden lg:block sticky top-0 left-0 flex-center h-screen flex-center w-1/2">
        <AuthImage path="/assets/signin.png" width={436.31} height={494.97} />
      </div>
      <div className="w-1/3 py-24">
        <AuthForm type="SIGN_IN" />
      </div>
    </section>
  );
};

export default Signin;
