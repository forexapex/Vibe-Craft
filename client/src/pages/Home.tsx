import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Trophy, Users, Calendar, Gamepad2, Target, Sword, Crosshair, Zap, MousePointer2 } from "lucide-react";
import ThreeBackground from "@/components/ThreeBackground";
import neonCrystal from "@assets/generated_images/3d_floating_neon_crystal.png";
import neonCube from "@assets/generated_images/3d_floating_neon_cube.png";
import neonRing from "@assets/generated_images/3d_neon_ring.png";
import fluidSphere from "@assets/generated_images/3d_fluid_sphere_background.png";

// Social Icons as simple components for now
const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all border border-white/20 hover:scale-110">
    {children}
  </a>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-primary/30 overflow-x-hidden">
      <ThreeBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Decorative Floating Elements */}
      <motion.img 
        src={neonCrystal} 
        alt="Crystal" 
        className="fixed top-20 right-[10%] w-32 md:w-64 opacity-60 z-0 pointer-events-none mix-blend-screen animate-pulse-slow"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src={neonCube} 
        alt="Cube" 
        className="fixed bottom-20 left-[5%] w-24 md:w-48 opacity-40 z-0 pointer-events-none mix-blend-screen"
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center relative">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative"
           >
              <h1 className="text-8xl md:text-[12rem] font-black font-orbitron mb-0 tracking-tighter leading-none relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                LEVEL UP
              </h1>
              <p className="text-2xl md:text-4xl font-light font-rajdhani text-primary tracking-[0.5em] uppercase mb-12">
                Official Tournament Platform
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                <Link href="/register">
                  <a className="group relative px-12 py-6 bg-white text-black font-orbitron font-bold text-xl uppercase tracking-widest hover:bg-primary transition-all duration-300 clip-path-slant shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <span className="relative z-10">Start Competing</span>
                    <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0" />
                  </a>
                </Link>
              </div>
           </motion.div>
           
           <motion.div 
             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
           >
             <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
             <MousePointer2 className="w-5 h-5" />
           </motion.div>
        </div>
      </section>

      {/* Choose Your Battlefield */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6">CHOOSE YOUR <span className="text-primary text-glow">BATTLEFIELD</span></h2>
            <p className="text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">
              Six Arenas. One Champion. The stage is set for the ultimate showdown.
            </p>
            <img src={neonRing} alt="Ring" className="w-full max-w-4xl mx-auto -mt-20 opacity-30 mix-blend-screen pointer-events-none" />
          </motion.div>

          <div className="space-y-32">
             <GameSection 
                title="Mobile Legends" 
                desc="The Land of Dawn awaits. Official Season 2 Registration is LIVE."
                status="LIVE"
                align="left"
                color="text-yellow-400"
                icon={Sword}
                img="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
             />
             <GameSection 
                title="BGMI" 
                desc="Tactical warfare. Survive until the end."
                status="COMING SOON"
                align="right"
                color="text-green-400"
                icon={Crosshair}
                img="https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2670&auto=format&fit=crop"
             />
             <GameSection 
                title="Valorant" 
                desc="Precision gunplay. Use your abilities to outplay."
                status="COMING SOON"
                align="left"
                color="text-red-400"
                icon={Zap}
                img="https://images.unsplash.com/photo-1624138784181-681efc832d58?q=80&w=2670&auto=format&fit=crop"
             />
             <GameSection 
                title="Call of Duty" 
                desc="Fast-paced action. Dominate the frontline."
                status="COMING SOON"
                align="right"
                color="text-orange-400"
                icon={Target}
                img="https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2687&auto=format&fit=crop"
             />
          </div>
        </div>
      </section>

      {/* Global Domination / Stats */}
      <section className="py-32 relative overflow-hidden bg-black/50 border-y border-white/5">
        <div className="absolute inset-0 opacity-20">
          <img src={fluidSphere} alt="Background" className="w-full h-full object-cover blur-xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-8 leading-tight">
                GLOBAL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">DOMINATION</span>
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani mb-12 max-w-md leading-relaxed">
                Join a network of over 50,000 competitive players. Compete for massive prize pools and earn your spot in the hall of fame.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                 <StatBox number="50K+" label="Active Players" />
                 <StatBox number="$100K" label="Prize Pool" />
                 <StatBox number="24/7" label="Support" />
                 <StatBox number="100+" label="Tournaments" />
              </div>
            </div>
            
            <div className="space-y-6">
               <StepCard number="01" title="Register" desc="Create your profile and team." />
               <StepCard number="02" title="Join" desc="Enter tournament brackets." />
               <StepCard number="03" title="Compete" desc="Win and claim rewards." />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-8">IPEORG</h2>
          <div className="flex justify-center gap-6 mb-8">
             <SocialIcon href="#">D</SocialIcon>
             <SocialIcon href="#">T</SocialIcon>
             <SocialIcon href="#">Y</SocialIcon>
          </div>
          <p className="text-gray-500 font-rajdhani">© 2025 IPEORG. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function GameSection({ title, desc, status, align, color, icon: Icon, img }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group`}
    >
      <div className="w-full md:w-1/2 relative aspect-video overflow-hidden rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all shadow-2xl">
         <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
         <img src={img} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
         
         {/* 3D Character overlay simulation */}
         <div className={`absolute bottom-0 ${align === 'right' ? 'left-0' : 'right-0'} w-2/3 h-full bg-gradient-to-t from-black/80 to-transparent z-20`} />
      </div>
      
      <div className={`w-full md:w-1/2 ${align === 'right' ? 'text-right' : 'text-left'}`}>
         <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest mb-6 ${status === 'LIVE' ? 'text-red-500 border-red-500/50 animate-pulse' : 'text-gray-400'}`}>
            <div className={`w-2 h-2 rounded-full ${status === 'LIVE' ? 'bg-red-500' : 'bg-gray-400'}`} />
            {status}
         </div>
         
         <h3 className={`text-4xl md:text-6xl font-black font-orbitron mb-4 ${color}`}>{title}</h3>
         <p className="text-xl text-gray-400 font-rajdhani mb-8">{desc}</p>
         
         <Link href="/register">
           <a className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider hover:text-primary transition-colors group/link">
             {status === 'LIVE' ? 'Register Now' : 'Notify Me'} 
             <Target className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
           </a>
         </Link>
      </div>
    </motion.div>
  );
}

function StatBox({ number, label }: any) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
      <h4 className="text-3xl font-black font-orbitron text-white mb-1">{number}</h4>
      <p className="text-sm text-gray-400 font-rajdhani uppercase tracking-widest">{label}</p>
    </div>
  );
}

function StepCard({ number, title, desc }: any) {
  return (
    <div className="flex items-center gap-6 p-6 bg-black/40 border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
       <div className="text-4xl font-black font-orbitron text-white/20">{number}</div>
       <div>
         <h4 className="text-xl font-bold font-orbitron text-white mb-1">{title}</h4>
         <p className="text-gray-400 font-rajdhani">{desc}</p>
       </div>
    </div>
  );
}