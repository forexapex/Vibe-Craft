import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useLocation } from "wouter";
import heroBg from "@assets/generated_images/3d_metallic_ipeorg_logo_in_futuristic_environment.png";

// Admin credentials schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function Login() {
  const [_, setLocation] = useLocation();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    if (values.username === "admin" && values.password === "admin") {
      toast.success("Admin Access Granted", {
        description: "Welcome to the Command Center.",
      });
      // Store admin session in localStorage for this prototype
      localStorage.setItem("isAdmin", "true");
      setTimeout(() => setLocation("/admin"), 1000);
    } else {
      toast.error("Access Denied", {
        description: "Invalid credentials. This incident will be reported.",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-[-1]">
         <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 glass-panel rounded-2xl border border-primary/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-2 text-glow">ADMIN LOGIN</h1>
          <p className="text-muted-foreground font-rajdhani">Restricted Access. Authorized Personnel Only.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-orbitron tracking-wider">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} className="glass-input h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-orbitron tracking-wider">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} className="glass-input h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-cyan-400 text-black font-orbitron font-bold text-lg uppercase tracking-widest mt-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
            >
              Access Dashboard
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}