import { ContactFormValues } from "@/lib/form-validation";

export default function FormField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  multiline = false,
}: {
  id: keyof ContactFormValues;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  multiline?: boolean;
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const sharedClassName = `w-full border-0 border-b border-arch-black bg-transparent px-8 pb-5 text-xl font-bold leading-6 text-arch-black outline-none transition-colors placeholder:text-arch-black/50 focus:border-b-2 ${
    error ? "border-arch-red pr-36 text-arch-red placeholder:text-arch-red" : ""
  }`;

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          placeholder={label}
          rows={4}
          className={`${sharedClassName} min-h-23 resize-y`}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={label}
          className={sharedClassName}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? (
        <p
          id={`${id}-error`}
          className="absolute right-4 bottom-5 text-right text-base font-bold text-arch-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}
