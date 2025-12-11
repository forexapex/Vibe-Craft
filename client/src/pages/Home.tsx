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

      {/* Partners & Sponsors */}
      <section className="py-32 relative bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6">
              OUR <span className="text-primary text-glow">PARTNERS</span> & SPONSORS
            </h2>
            <p className="text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">
              Proudly supported by industry leaders who share our vision for competitive gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all group"
              >
                <span className="text-4xl font-black font-orbitron text-white/20 group-hover:text-primary/50 transition-colors">
                  LOGO
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6">
              OUR <span className="text-primary text-glow">TEAM</span> MEMBERS
            </h2>
            <p className="text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">
              Meet the passionate individuals behind IPEORG
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Team Member 1", role: "Founder & CEO" },
              { name: "Team Member 2", role: "Tournament Director" },
              { name: "Team Member 3", role: "Community Manager" },
              { name: "Team Member 4", role: "Technical Lead" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary/50" />
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 font-rajdhani">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Info */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">IPEORG</h2>
              <p className="text-gray-400 font-rajdhani mb-4">
                The premier esports tournament platform for competitive gamers worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold font-orbitron mb-4">Quick Links</h3>
              <ul className="space-y-2 font-rajdhani">
                <li><Link href="/"><a className="text-gray-400 hover:text-primary transition-colors">Home</a></Link></li>
                <li><Link href="/about"><a className="text-gray-400 hover:text-primary transition-colors">About</a></Link></li>
                <li><Link href="/contact"><a className="text-gray-400 hover:text-primary transition-colors">Contact</a></Link></li>
                <li><Link href="/faq"><a className="text-gray-400 hover:text-primary transition-colors">FAQ</a></Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold font-orbitron mb-4">Legal</h3>
              <ul className="space-y-2 font-rajdhani">
                <li><Link href="/terms"><a className="text-gray-400 hover:text-primary transition-colors">Terms & Conditions</a></Link></li>
                <li><Link href="/privacy"><a className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></Link></li>
                <li><Link href="/cookies"><a className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></Link></li>
                <li><Link href="/rules"><a className="text-gray-400 hover:text-primary transition-colors">Rules & Regulations</a></Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold font-orbitron mb-4">Contact Us</h3>
              <ul className="space-y-2 font-rajdhani text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:123-456-7890" className="hover:text-primary transition-colors">123-456-7890</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:ipeorgofficial@zohomail.in" className="hover:text-primary transition-colors">ipeorgofficial@zohomail.in</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 font-rajdhani">© 2025 IPEORG. All rights reserved.</p>
              <div className="flex gap-4">
                <SocialIcon href="https://discord.gg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://twitter.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://youtube.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://instagram.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://facebook.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
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