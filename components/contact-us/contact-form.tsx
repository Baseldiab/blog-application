"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Swal from "sweetalert2";

// rules
import { contactFormSchema } from "@/components/rules/rules-validation";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      title: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="title"
          className="text-sm font-medium flex items-start gap-1"
        >
          Title
          <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          className="rounded border p-2"
          {...register("title")}
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-sm font-medium flex items-start gap-1"
        >
          Email
          <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          className="rounded border p-2"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium">
          Description (Optional)
        </label>
        <textarea
          id="description"
          placeholder="Enter your message here"
          className="rounded border p-2"
          rows={4}
          {...register("description")}
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
