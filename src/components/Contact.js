import Link from "next/link";

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-light">
      <div className="container mx-auto px-5">
        <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
          Contact
        </p>
        <div className="flex flex-col md:flex-row md:justify-between max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
          <Link
            href="https://www.linkedin.com/in/marianne-de-gooijer/"
            target="_blank"
            aria-label="Mijn LinkedIn account"
            className="mb-5 md:mb-0"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Marianne-de-Gooijer"
            target="_blank"
            aria-label="Mijn GitHub account"
            className="mb-5 md:mb-0"
          >
            Github
          </Link>
          <Link
            href="mailto: mariannedegooijer@gmail.com"
            target="_blank"
            aria-label="Mijn e-mailadres"
          >
            mariannedegooijer@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
