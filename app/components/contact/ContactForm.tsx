"use client";

import Image from "next/image";
import { useState, type SubmitEvent } from "react";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { toast } from "sonner";

import {
  type ContactFormErrors,
  type ContactFormValues,
  validateContactInput,
} from "@/lib/form-validation";

import arrowIcon from "@/public/assets/icons/icon-arrow.svg";
import FormField from "./FormField";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const fieldTransition: Transition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};

const formContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const formItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: fieldTransition,
  },
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const shouldReduceMotion = useReducedMotion();

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateContactInput(values);

    if (!validation.success) {
      setErrors(validation.errors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setValues(initialValues);
    setStatus("sent");
    toast.success("Your message has been submitted.");
  }

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  return (
    <motion.form
      className="grid gap-6"
      noValidate
      onSubmit={handleSubmit}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.35 }}
      variants={shouldReduceMotion ? undefined : formContainerVariants}>
      <motion.div variants={shouldReduceMotion ? undefined : formItemVariants}>
        <FormField
          id="name"
          label="Name"
          value={values.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
        />
      </motion.div>

      <motion.div variants={shouldReduceMotion ? undefined : formItemVariants}>
        <FormField
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
        />
      </motion.div>

      <motion.div variants={shouldReduceMotion ? undefined : formItemVariants}>
        <FormField
          id="message"
          label="Message"
          value={values.message}
          error={errors.message}
          multiline
          onChange={(value) => updateField("message", value)}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="ml-auto grid size-20 place-items-center bg-arch-black transition-colors hover:bg-arch-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black"
        aria-label="Send message"
        variants={shouldReduceMotion ? undefined : formItemVariants}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}>
        <Image
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className="h-4.5 w-6 brightness-0 invert"
        />
      </motion.button>

      <p className="sr-only" role="status">
        {status === "sent" ? "Your message has been submitted." : ""}
      </p>
    </motion.form>
  );
}
