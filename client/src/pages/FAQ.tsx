import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I register for a tournament?",
      answer: "Click on the 'Register' button in the navigation menu, create an account, and then browse available tournaments. Select the tournament you want to join and complete the registration process."
    },
    {
      question: "What games are available on IPEORG?",
      answer: "We currently offer tournaments for Mobile Legends, BGMI, Valorant, and Call of Duty. More game titles are being added regularly."
    },
    {
      question: "Are there any registration fees?",
      answer: "Most tournaments have a small registration fee, which contributes to the prize pool. Some tournaments are free to enter. Check individual tournament details for specific information."
    },
    {
      question: "How are prizes distributed?",
      answer: "Prizes are distributed within 30 days after tournament completion. Winners will be contacted via email with instructions for claiming their prizes. Verification may be required."
    },
    {
      question: "Can I participate as a solo player or do I need a team?",
      answer: "This depends on the game and tournament format. Some tournaments are for solo players, while others require teams. Check the tournament details for specific requirements."
    },
    {
      question: "What happens if I miss my match?",
      answer: "If you don't show up within 10 minutes of your scheduled match time, you will automatically forfeit. Make sure to be online and ready 15 minutes before your match."
    },
    {
      question: "How do I report a player for cheating?",
      answer: "If you suspect cheating, contact our support team immediately at ipeorgofficial@zohomail.in with evidence such as screenshots or recordings."
    },
    {
      question: "Can I change my team roster after registration?",
      answer: "Team rosters are locked once the tournament begins. Any substitutions must be made before the tournament start time."
    },
    {
      question: "What if I have technical issues during a match?",
      answer: "Contact tournament support immediately if you experience technical issues. Decisions will be made on a case-by-case basis depending on the circumstances."
    },
    {
      question: "How can I become a partner or sponsor?",
      answer: "For partnership and sponsorship opportunities, please contact us at ipeorgofficial@zohomail.in with your proposal."
    }
  ];

  return (
    <div className="min-h-screen text-white font-sans">
      <ThreeBackground />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            FAQ
          </h1>
          <p className="text-2xl text-gray-300 font-rajdhani mb-12">
            Frequently Asked Questions
          </p>
          <p className="text-xl text-gray-400 font-rajdhani mb-12">
            If you have questions, we've got answers. Here are the most common questions players ask about IPEORG.
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 hover:bg-white/10 transition-colors"
              >
                <AccordionTrigger className="text-left font-orbitron font-bold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-rajdhani text-lg pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 rounded-xl">
            <h2 className="text-2xl font-bold font-orbitron mb-4">Still have questions?</h2>
            <p className="text-gray-300 font-rajdhani text-lg mb-4">
              Contact our support team and we'll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:ipeorgofficial@zohomail.in"
              className="inline-block bg-primary hover:bg-primary/80 text-black font-bold px-8 py-3 rounded-full transition-all"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
