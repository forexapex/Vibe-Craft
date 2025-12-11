import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import { Trophy, Users, Target, Zap } from "lucide-react";

export default function About() {
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
            ABOUT IPEORG
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300 font-rajdhani leading-relaxed">
            <p className="text-2xl text-white mb-8">
              The Premier Esports Tournament Platform
            </p>
            
            <p>
              IPEORG is a cutting-edge esports tournament platform dedicated to bringing competitive gaming to the next level. We provide a professional ecosystem where players can compete, connect, and showcase their skills across multiple game titles.
            </p>
            
            <p>
              Our mission is to create fair, competitive, and exciting tournaments that bring together the best players from around the globe. Whether you're a seasoned pro or just starting your competitive journey, IPEORG offers the perfect platform to test your skills and rise through the ranks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <FeatureCard 
                icon={Trophy}
                title="Professional Tournaments"
                desc="Organized, fair, and competitive events with real prizes"
              />
              <FeatureCard 
                icon={Users}
                title="Global Community"
                desc="Connect with players from around the world"
              />
              <FeatureCard 
                icon={Target}
                title="Multiple Game Titles"
                desc="Compete in Mobile Legends, BGMI, Valorant, and more"
              />
              <FeatureCard 
                icon={Zap}
                title="Real-Time Updates"
                desc="Stay informed with live brackets and results"
              />
            </div>

            <p>
              Join thousands of competitive gamers who trust IPEORG for their tournament needs. Register today and start your journey to becoming a champion.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:border-primary/50">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-bold font-orbitron text-white mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
