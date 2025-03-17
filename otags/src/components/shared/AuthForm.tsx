"use client";

import Link from "next/link";

import { formSchema } from "@/constants/validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";

import { LuUserRound, LuUserRoundPen } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaApple, FaGoogle, FaSpinner } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi2";

const authSchema = formSchema("SIGN_UP");

const AuthForm = ({ type }: { type: string }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 w-full max-w-[777px] flex-center flex-col"
      >
        <h1 className="text-4xl font-bold">
          {type === "SIGN_IN" ? "Log in" : "Sign up"}
        </h1>
        <div className="w-full max-w-[555px] space-y-6">
          {type === "SIGN_UP" && (
            <>
              <div className="flex-between gap-3 w-full">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First name"
                  icon={<LuUserRound size={20} className="text-gray-400" />}
                />

                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last name"
                  icon={<LuUserRoundPen size={20} className="text-gray-400" />}
                />
              </div>

              <CustomInput
                control={form.control}
                name="phone"
                label="Phone"
                icon={<HiOutlinePhone size={20} className="text-gray-400" />}
              />
            </>
          )}

          <CustomInput
            control={form.control}
            name="email"
            label="Email address"
            icon={<RxEnvelopeClosed size={20} className="text-gray-400" />}
          />

          <CustomInput
            control={form.control}
            name="password"
            label="Password"
          />
          <Button
            type="submit"
            className="w-full p-7 rounded-full bg-green-primary text-white text-lg font-bold"
          >
            {form.formState.isSubmitting && (
              <FaSpinner size={18} className="animate-spin" />
            )}
            {type === "SIGN_IN" ? "Login" : "Sign up"}
          </Button>
        </div>

        <span className="text-sm font-semibold text-center -mt-6">
          By continuing, you agree to the{" "}
          <span className="border-b border-b-green-primary text-green-primary">
            terms of use
          </span>{" "}
          and{" "}
          <span className="border-b border-b-green-primary text-green-primary">
            privacy policy.
          </span>
        </span>

        <div className="w-full max-w-[520px] flex-center gap-1">
          <div className="w-full border border-gray-300" />
          <span>Or</span>
          <div className="w-full border border-gray-300" />
        </div>

        <div className="w-full max-w-[520px] flex-between">
          <Link
            href="#"
            className="flex-center gap-2 w-63 h-8 rounded-xl bg-[#f7f7f7] border border-[#D9D9D980]"
          >
            <FaGoogle size={18} />
            <span className="text-sm font-medium">Sign in with Google</span>
          </Link>
          <Link
            href="#"
            className="flex-center gap-2 w-63 h-8 rounded-xl bg-[#f7f7f7] border border-[#D9D9D980]"
          >
            <FaApple size={18} />
            <span className="text-sm font-medium">Sign in with Apple</span>
          </Link>
        </div>
        {type === "SIGN_IN" ? (
          <span className="text-base font-semibold text-center">
            Don’t have an account?{" "}
            <Link
              href="/sign-up"
              className="border-b border-b-green-primary text-green-primary"
            >
              Sign Up
            </Link>{" "}
          </span>
        ) : (
          <span className="text-base font-semibold text-center">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="border-b border-b-green-primary text-green-primary"
            >
              Login
            </Link>{" "}
          </span>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
