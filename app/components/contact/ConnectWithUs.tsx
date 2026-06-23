import ContactForm from "./ContactForm";

export default function ConnectWithUs() {
  return (
    <section className="site-container mt-18 grid gap-12 md:mt-50 md:gap-16 xl:grid-cols-[21.875rem_1fr] xl:gap-7.5">
      <h2 className="heading-lg">Connect with us</h2>
      <ContactForm />
    </section>
  );
}
