"use client";

import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { formSchema } from "@/constants/validation";
import { ReactNode } from "react";

const authFormSchema = formSchema("SIGN_UP");

interface Props {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  icon?: ReactNode;
}

const CustomInput = ({ control, name, label, icon }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={name === "password" ? "password" : "text"}
                {...field}
                className={`w-full h-[56px] border rounded-xl border-border bg-input ${
                  name === "password" ? "pl-3" : "pl-14"
                }`}
              />
              <div className="absolute top-1/3 left-5">{icon}</div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
