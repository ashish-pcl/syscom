import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How soon can I launch?",
      answer: "In most cases, your first campaign and automation go live in 10–14 days. We prioritize quick wins while building your comprehensive growth infrastructure."
    },
    {
      question: "Do you support niche tools?",
      answer: "Yes! We integrate with most CRMs, schedulers, and EHRs (via API, Zapier, or direct). Our team has experience with healthcare-specific platforms and can work with your existing tech stack."
    },
    {
      question: "Can you write content in our tone of voice?",
      answer: "Absolutely. We build comprehensive tone guides using your samples and prompts. All content is human-reviewed by our expert team to ensure it matches your brand voice perfectly."
    },
    {
      question: "Is this secure and compliant?",
      answer: "Yes. We work with legal and healthcare teams to ensure all workflows follow GDPR, HIPAA, and your jurisdiction's rules. Security and compliance are built into every system we create."
    },
    {
      question: "What if I already have marketing tools?",
      answer: "Perfect! We audit your existing tools and build around what's working. Often, we can dramatically improve results by connecting and optimizing your current systems rather than replacing them."
    },
    {
      question: "How do you measure success?",
      answer: "We track real business metrics: qualified leads, conversion rates, patient/client lifetime value, and ROI. You get transparent dashboards showing exactly how your investment is performing."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🧠 <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with SysComm.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-elegant border-0 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;