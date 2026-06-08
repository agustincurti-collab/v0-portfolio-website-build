export const faqs = [
  {
    number: "01",
    question: "What is a domain name and why do I need one?",
    answer:
      "A domain name is your unique address on the internet (for example, yourbusiness.com). It's how customers find your website and how you can create professional email addresses associated with your brand.",
  },
  {
    number: "02",
    question: "What is hosting and why does it affect pricing?",
    answer:
      "Hosting is the service that stores your website and makes it available online. Quality hosting ensures your site loads quickly, remains secure, and stays accessible to visitors at all times.",
  },
  {
    number: "03",
    question: "Will my website work well on mobile devices?",
    answer:
      "Absolutely. Every website is built using responsive design principles, ensuring a seamless experience across smartphones, tablets, laptops, and desktop computers.",
  },
  {
    number: "04",
    question: "What is an SSL certificate?",
    answer:
      "An SSL certificate encrypts data exchanged between your website and its visitors. It protects sensitive information, improves trust, and is essential for modern websites.",
  },
  {
    number: "05",
    question: "Who owns the website once it's completed?",
    answer:
      "You do. The domain, hosting account, and website files belong to you. My goal is to provide a transparent service where you maintain full ownership of your digital assets.",
  },
  {
    number: "06",
    question: "How long does a website project take?",
    answer:
      "Timelines vary depending on the project's scope and complexity. A landing page may take only a few days, while a business website or e-commerce project typically requires between 2 and 6 weeks.",
  },
  {
    number: "07",
    question: "Which technologies do you use?",
    answer:
      "I work with modern technologies such as Next.js, React, WordPress, WooCommerce, and Tienda Nube. Each project is built using the most suitable tools based on business goals, performance requirements, and scalability needs.",
  },
  {
    number: "08",
    question: "Why is ongoing maintenance important?",
    answer:
      "Websites require regular updates, security improvements, backups, and occasional content changes. Ongoing maintenance helps keep your site secure, fast, and performing at its best.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clear answers to common questions about websites, e-commerce and digital projects.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.number}
              className="group rounded-2xl border border-border bg-card/50 px-6 py-5 transition-all"
            >
              <summary className="flex cursor-pointer items-center gap-4 list-none">
                <span className="text-sm font-semibold text-accent min-w-[40px]">
                  {faq.number}
                </span>

                <span className="flex-1 font-medium text-foreground">
                  {faq.question}
                </span>

                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="mt-4 pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
