import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

export default function Rules() {
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
            RULES & REGULATIONS
          </h1>
          
          <div className="space-y-8 text-gray-300 font-rajdhani leading-relaxed">
            <Section title="General Rules">
              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>All participants must register with accurate information</li>
                <li>Players must be respectful to opponents, staff, and other participants</li>
                <li>Any form of cheating or hacking will result in immediate disqualification</li>
                <li>Tournament organizers' decisions are final</li>
              </ul>
            </Section>

            <Section title="Match Conduct">
              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>Players must be online and ready 15 minutes before their scheduled match</li>
                <li>No-shows will result in automatic forfeit after 10 minutes</li>
                <li>Screenshots/recordings may be required for dispute resolution</li>
                <li>Use of unauthorized third-party software is strictly prohibited</li>
              </ul>
            </Section>

            <Section title="Team Requirements">
              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>Teams must maintain their roster throughout the tournament</li>
                <li>Substitutions are only allowed before the tournament begins</li>
                <li>All team members must be registered on the platform</li>
                <li>Team names must be appropriate and professional</li>
              </ul>
            </Section>

            <Section title="Prize Claiming">
              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>Winners must verify their identity to claim prizes</li>
                <li>Prize distribution may take up to 30 days after tournament completion</li>
                <li>Tax obligations are the responsibility of the prize recipients</li>
                <li>Prizes are non-transferable</li>
              </ul>
            </Section>

            <Section title="Code of Conduct">
              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>Harassment, hate speech, or discrimination will not be tolerated</li>
                <li>Players must use appropriate language in all communications</li>
                <li>Unsportsmanlike conduct may result in penalties or bans</li>
                <li>Players represent IPEORG community and should act accordingly</li>
              </ul>
            </Section>

            <Section title="Penalties">
              <p className="text-lg mb-4">Violations may result in:</p>
              <ul className="list-disc list-inside space-y-3 ml-4 text-lg">
                <li>Warning</li>
                <li>Match forfeit</li>
                <li>Tournament disqualification</li>
                <li>Temporary or permanent platform ban</li>
                <li>Prize forfeiture</li>
              </ul>
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
      <div>{children}</div>
    </div>
  );
}
