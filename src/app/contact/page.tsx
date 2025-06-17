import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | MotoBlog',
  description: 'Have questions, feedback, or story ideas? Get in touch with the MotoBlog team. We\'d love to hear from you!',
  openGraph: {
    title: 'Contact Us | MotoBlog',
    description: 'Have questions, feedback, or story ideas? Get in touch with the MotoBlog team. We\'d love to hear from you!',
    type: 'website',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            Have questions, feedback, or ideas for stories? We'd love to hear from you.
            Use the form below or reach out through one of our other channels.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="mb-6 font-display text-2xl font-semibold">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-primary px-5 py-2.5 text-center font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Email Us</h3>
              <p className="mb-3 text-muted-foreground">For general inquiries:</p>
              <a href="mailto:info@motoblog.com" className="text-primary hover:underline">
                info@motoblog.com
              </a>
              <p className="mb-3 mt-3 text-muted-foreground">For press & media:</p>
              <a href="mailto:press@motoblog.com" className="text-primary hover:underline">
                press@motoblog.com
              </a>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Social Media</h3>
              <p className="mb-3 text-muted-foreground">Connect with us on social media:</p>
              <div className="flex space-x-3">
                <a href="https://twitter.com/motoblog" className="text-primary hover:text-primary-600" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/motoblog" className="text-primary hover:text-primary-600" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com/motoblog" className="text-primary hover:text-primary-600" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://youtube.com/motoblog" className="text-primary hover:text-primary-600" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Write for Us</h3>
              <p className="mb-3 text-muted-foreground">
                Interested in contributing to MotoBlog? We're always looking for passionate writers.
              </p>
              <a href="/write-for-us" className="inline-flex items-center text-primary hover:underline">
                <span>Submission Guidelines</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 font-display text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <h3 className="mb-3 font-display text-lg font-medium">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const faqs = [
  {
    question: "How can I submit a story idea?",
    answer: "We welcome story ideas from our readers! Please use the contact form above and select 'Story Idea' as the subject. Include as many details as possible about your idea, including why you think it would interest our readers."
  },
  {
    question: "Do you accept guest posts?",
    answer: "Yes, we accept guest contributions from motorcycle enthusiasts, experts, and industry professionals. Check our 'Write for Us' page for submission guidelines and topic suggestions."
  },
  {
    question: "How can I report an error in an article?",
    answer: "We strive for accuracy in all our content. If you spot an error, please let us know using the contact form with the subject 'Content Correction'. Include the article URL and describe the error you found."
  },
  {
    question: "Do you review motorcycle products?",
    answer: "Yes, we regularly review motorcycles, gear, accessories, and tools. If you're a manufacturer or distributor interested in having your product reviewed, please contact our editorial team via email at reviews@motoblog.com."
  },
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer: "We typically respond to inquiries within 2-3 business days. For urgent matters, please mention this in your subject line."
  }
];
