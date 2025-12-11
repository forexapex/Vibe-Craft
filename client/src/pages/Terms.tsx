import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

export default function Terms() {
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
          <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            TERMS & CONDITIONS
          </h1>
          
          <div className="space-y-8 text-gray-300 font-rajdhani leading-relaxed">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing and using IPEORG, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </Section>

            <Section title="2. Eligibility">
              <p>
                You must be at least 13 years old to use this service. By using IPEORG, you represent that you meet this age requirement and have the legal capacity to enter into these terms.
              </p>
            </Section>

            <Section title="3. Account Registration">
              <p>
                You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
            </Section>

            <Section title="4. Tournament Rules">
              <p>
                All participants must adhere to specific tournament rules and regulations. Cheating, match-fixing, or any form of unsportsmanlike conduct will result in immediate disqualification and potential ban from the platform.
              </p>
            </Section>

            <Section title="5. Prize Distribution">
              <p>
                Prize distribution is subject to verification of eligibility and compliance with all tournament rules. IPEORG reserves the right to withhold prizes if violations are discovered.
              </p>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on IPEORG, including logos, graphics, and text, is the property of IPEORG and protected by intellectual property laws.
              </p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                IPEORG is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
              </p>
            </Section>

            <Section title="8. Modifications">
              <p>
                We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
              </p>
            </Section>

            <p className="text-sm text-gray-500 mt-12">
              Last updated: December 11, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h2 className="text-2xl font-bold font-orbitron text-white mb-4">{title}</h2>
      <div className="text-lg">{children}</div>
    </div>
  );
}
