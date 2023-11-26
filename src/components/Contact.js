import Link from "next/link";

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-sand">
      <div className="container mx-auto text-white px-5">
        <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
          Contact
        </p>
        <div className="flex flex-col md:flex-row md:justify-between max-w-3xl mx-auto">
          <Link
            href="https://www.linkedin.com/in/marianne-de-gooijer/"
            target="_blank"
            aria-label="Mijn LinkedIn account"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Marianne-de-Gooijer"
            target="_blank"
            aria-label="Mijn GitHub account"
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
