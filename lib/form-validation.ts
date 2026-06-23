export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const emptyError = "Can't be empty";
const nameError = "Can only include letters";
const emailError = "Use a valid email address";
const namePattern = /^[\p{L}'-]+(?:\s+[\p{L}'-]+)*$/u;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function validateContactInput(values: ContactFormValues) {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = emptyError;
  } else if (!namePattern.test(values.name.trim())) {
    errors.name = nameError;
  }

  if (!values.email.trim()) {
    errors.email = emptyError;
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = emailError;
  }

  if (!values.message.trim()) {
    errors.message = emptyError;
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}
