import { officeLocations } from "@/lib/helpers";
import ViewOnMapLink from "./ViewOnMapLink";
import StaggeredReveal, { RevealItem } from "../ui/StaggeredReveal";

export default function ContactDetails() {
  return (
    <section className="site-container mt-19 grid gap-10 md:mt-50 md:gap-16 xl:grid-cols-[21.875rem_1fr] xl:gap-7.5">
      <h2 className="heading-lg">Contact Details</h2>

      <StaggeredReveal
        className="grid gap-10 xl:grid-cols-2 xl:gap-7.5"
        amount={0.35}
        stagger={0.18}>
        {officeLocations.map((office) => (
          <RevealItem
            as="article"
            key={office.name}
            className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end xl:block">
            <div>
              <h3 className="body-copy font-bold">{office.name}</h3>
              <dl className="body-copy mt-4 grid gap-1">
                <div className="flex gap-2">
                  <dt>Mail :</dt>
                  <dd>{office.mail}</dd>
                </div>
                <div className="flex gap-2">
                  <dt>Address :</dt>
                  <dd>{office.address}</dd>
                </div>
                <div className="flex gap-2">
                  <dt>Phone :</dt>
                  <dd>{office.phone}</dd>
                </div>
              </dl>
            </div>

            <ViewOnMapLink officeId={office.id} officeName={office.name} />
          </RevealItem>
        ))}
      </StaggeredReveal>
    </section>
  );
}
