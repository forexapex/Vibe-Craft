import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

export default function Privacy() {
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
            PRIVACY POLICY
          </h1>
          
          <div className="space-y-8 text-gray-300 font-rajdhani leading-relaxed">
            <Section title="1. Information We Collect">
              <p>
                We collect information you provide directly to us when you create an account, register for tournaments, or contact us. This may include your name, email address, gaming username, and payment information.
              </p>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>
                We use the information we collect to operate and improve our services, process tournament registrations, communicate with you about tournaments and updates, and ensure fair play.
              </p>
            </Section>

            <Section title="3. Information Sharing">
              <p>
                We do not sell your personal information. We may share your information with service providers who assist in operating our platform, or when required by law.
              </p>
            </Section>

            <Section title="4. Data Security">
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
              </p>
            </Section>

            <Section title="5. Your Rights">
              <p>
                You have the right to access, update, or delete your personal information. Contact us at ipeorgofficial@zohomail.in to exercise these rights.
              </p>
            </Section>

            <Section title="6. Changes to This Policy">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
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
