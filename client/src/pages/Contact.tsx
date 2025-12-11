import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen text-white font-sans">
      <ThreeBackground />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            CONTACT US
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 font-rajdhani">
                Have questions? We're here to help. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <ContactMethod 
                  icon={Mail}
                  title="Email"
                  value="ipeorgofficial@zohomail.in"
                  href="mailto:ipeorgofficial@zohomail.in"
                />
                <ContactMethod 
                  icon={Phone}
                  title="Phone"
                  value="123-456-7890"
                  href="tel:123-456-7890"
                />
                <ContactMethod 
                  icon={MessageSquare}
                  title="Discord"
                  value="Join our community server"
                  href="#"
                />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold font-orbitron mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/80 text-black font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ContactMethod({ icon: Icon, title, value, href }: any) {
  return (
    <a 
      href={href}
      className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all group"
    >
      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold font-orbitron text-white mb-1">{title}</h3>
        <p className="text-gray-400 font-rajdhani">{value}</p>
      </div>
    </a>
  );
}
