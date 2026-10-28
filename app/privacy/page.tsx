import type { Metadata } from "next";
import { PageHero } from "@/app/components/blocks";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Kerria.online does not run accounts or a contact form. Email you send is used to reply.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Privacy"
        title="This site does not keep an account for you."
        lede="There is no sign-in, no newsletter box, and no form that stores what you type. The only message path is email."
      />
      <section className="shell max-w-3xl space-y-5 py-12">
        <p className="lede">
          If you write to {company.email}, that message arrives in the company
          inbox and is used to reply. Don’t send passwords or payment details.
        </p>
        <p className="lede">
          Hosting this website can create ordinary server logs, such as the
          address of a page request. Kerria does not sell personal information,
          and this site is not set up to build a marketing list.
        </p>
        <p className="lede">
          Questions about a message you already sent can go to the same address.
        </p>
        <a className="btn mt-4" href={mailto}>
          {company.email}
        </a>
      </section>
    </main>
  );
}
