import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

export default function Cookies() {
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
            COOKIE POLICY
          </h1>
          
          <div className="space-y-8 text-gray-300 font-rajdhani leading-relaxed">
            <Section title="What Are Cookies">
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </Section>

            <Section title="How We Use Cookies">
              <p>
                We use cookies to maintain your session, remember your login information, analyze site traffic, and personalize your experience on IPEORG.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Performance cookies: Help us understand how visitors interact with our site</li>
                <li>Functionality cookies: Remember your preferences and settings</li>
              </ul>
            </Section>

            <Section title="Managing Cookies">
              <p>
                You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
            </Section>

            <Section title="Third-Party Cookies">
              <p>
                We may use third-party services that set cookies on our behalf for analytics and advertising purposes. These third parties have their own privacy policies.
              </p>
            </Section>

            <Section title="Updates to This Policy">
              <p>
                We may update this Cookie Policy from time to time. Please check this page periodically for changes.
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
