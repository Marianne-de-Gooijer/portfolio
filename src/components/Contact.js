import Link from "next/link";

function FooterLink({ label, href, title, className = "" }) {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={label}
      className={`${className} relative group`}
    >
      {title}
      <span className="h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-5">
        <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
          Contact
        </p>
        <div className="flex flex-col md:flex-row md:justify-between max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
          <div className="mb-5 md:mb-0">
            <FooterLink
              href="https://www.linkedin.com/in/marianne-de-gooijer/"
              label="Mijn LinkedIn account"
              title="LinkedIn"
              className="mb-5 md:mb-0"
            />
          </div>
          <div className="mb-5 md:mb-0">
            <FooterLink
              href="https://github.com/Marianne-de-Gooijer"
              label="Mijn GitHub account"
              title="Github"
              className="mb-5 md:mb-0"
            />
          </div>
          <div>
            <FooterLink
              href="mailto: mariannedegooijer@gmail.com"
              label="Mijn e-mailadres"
              title="mariannedegooijer@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
