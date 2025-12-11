import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Save, Settings, Users, Trophy, Image, LogOut, Plus, Trash2, Activity, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import ThreeBackground from "@/components/ThreeBackground";

// Mock data structure for dashboard
interface GameConfig {
  id: string;
  title: string;
  status: "LIVE" | "COMING SOON";
  description: string;
  registrationLink: string;
  image: string;
}

interface LogEntry {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  details: string;
}

const initialGames: GameConfig[] = [
  {
    id: "mlbb",
    title: "Mobile Legends",
    status: "LIVE",
    description: "The Land of Dawn awaits. Official Season 2 Registration is LIVE.",
    registrationLink: "/register",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "bgmi",
    title: "BGMI",
    status: "COMING SOON",
    description: "Tactical warfare. Survive until the end.",
    registrationLink: "#",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2670&auto=format&fit=crop"
  }
];

const mockLogs: LogEntry[] = [
  { id: "1", timestamp: "2025-05-12 14:32:01", action: "LOGIN", user: "admin", details: "Admin accessed dashboard" },
  { id: "2", timestamp: "2025-05-12 14:15:22", action: "REGISTRATION", user: "system", details: "New team 'Team Solid' registered for MLBB" },
  { id: "3", timestamp: "2025-05-12 13:45:10", action: "UPDATE", user: "admin", details: "Changed BGMI status to COMING SOON" },
  { id: "4", timestamp: "2025-05-12 12:30:05", action: "VISIT", user: "guest", details: "High traffic detected on Home Page" },
  { id: "5", timestamp: "2025-05-12 11:20:00", action: "ERROR", user: "system", details: "Failed to load image asset (retrying...)" },
];

export default function AdminDashboard() {
  const [_, setLocation] = useLocation();
  const [games, setGames] = useState<GameConfig[]>(initialGames);
  const [activeTab, setActiveTab] = useState("games");
  
  // Content Config
  const [heroTitle, setHeroTitle] = useState("LEVEL UP");
  const [heroSubtitle, setHeroSubtitle] = useState("Official Tournament Platform");
  const [prizePool, setPrizePool] = useState("$100K");
  const [playerCount, setPlayerCount] = useState("50K+");

  // Check auth
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      toast.error("Unauthorized", { description: "Please login first." });
      setLocation("/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setLocation("/login");
  };

  const updateGame = (id: string, field: keyof GameConfig, value: string) => {
    setGames(games.map(game => 
      game.id === id ? { ...game, [field]: value } : game
    ));
  };

  const toggleStatus = (id: string) => {
    setGames(games.map(game => 
      game.id === id ? { ...game, status: game.status === "LIVE" ? "COMING SOON" : "LIVE" } : game
    ));
  };

  const addGame = () => {
    const newGame: GameConfig = {
      id: `game-${Date.now()}`,
      title: "New Game",
      status: "COMING SOON",
      description: "Game description here",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
    };
    setGames([...games, newGame]);
    toast.success("New game slot added");
  };

  const removeGame = (id: string) => {
    setGames(games.filter(g => g.id !== id));
    toast.success("Game removed");
  };

  const saveChanges = () => {
    localStorage.setItem("games_config", JSON.stringify(games));
    localStorage.setItem("site_config", JSON.stringify({ heroTitle, heroSubtitle, prizePool, playerCount }));
    toast.success("Changes Saved", {
      description: "Website configuration has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen text-white bg-black font-sans selection:bg-primary/30 pt-20 pb-20">
      <ThreeBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-orbitron font-bold text-primary mb-2 text-glow">COMMAND CENTER</h1>
            <p className="text-gray-400 font-rajdhani">System Configuration & Management</p>
          </div>
          <div className="flex gap-4">
             <Button onClick={saveChanges} className="bg-green-500 hover:bg-green-600 text-black font-bold font-orbitron shadow-[0_0_15px_rgba(34,197,94,0.4)]">
               <Save className="w-4 h-4 mr-2" /> Save Changes
             </Button>
             <Button onClick={handleLogout} variant="destructive" className="font-orbitron shadow-[0_0_15px_rgba(239,68,68,0.4)]">
               <LogOut className="w-4 h-4 mr-2" /> Logout
             </Button>
          </div>
        </div>

        <Tabs defaultValue="games" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <TabsTrigger value="games" className="data-[state=active]:bg-primary data-[state=active]:text-black font-orbitron">
              <Trophy className="w-4 h-4 mr-2" /> Tournaments
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-primary data-[state=active]:text-black font-orbitron">
              <Globe className="w-4 h-4 mr-2" /> Site Content
            </TabsTrigger>
            <TabsTrigger value="logs" className="data-[state=active]:bg-primary data-[state=active]:text-black font-orbitron">
              <Activity className="w-4 h-4 mr-2" /> System Logs
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-black font-orbitron">
              <Settings className="w-4 h-4 mr-2" /> Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-orbitron font-bold">Active Tournaments</h2>
               <Button onClick={addGame} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-orbitron">
                 <Plus className="w-4 h-4 mr-2" /> Add New Game
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {games.map((game) => (
                <motion.div 
                  layout
                  key={game.id} 
                  className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Image Preview */}
                    <div className="md:col-span-3 aspect-video rounded-lg overflow-hidden border border-white/20 relative group">
                      <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <span className="text-xs uppercase font-bold">Change Image</span>
                      </div>
                    </div>

                    {/* Edit Fields */}
                    <div className="md:col-span-8 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-gray-400">Game Title</Label>
                          <Input 
                            value={game.title} 
                            onChange={(e) => updateGame(game.id, "title", e.target.value)}
                            className="glass-input border-white/20" 
                          />
                        </div>
                        <div className="space-y-2">
                           <Label className="text-gray-400">Status</Label>
                           <div className="flex items-center space-x-4 h-10 px-3 border border-white/10 rounded-md bg-white/5">
                             <Switch 
                               checked={game.status === "LIVE"} 
                               onCheckedChange={() => toggleStatus(game.id)}
                               className="data-[state=checked]:bg-green-500"
                             />
                             <span className={`font-bold font-orbitron tracking-wider ${game.status === "LIVE" ? "text-green-500" : "text-gray-500"}`}>
                               {game.status}
                             </span>
                           </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-400">Description</Label>
                        <Input 
                          value={game.description} 
                          onChange={(e) => updateGame(game.id, "description", e.target.value)}
                          className="glass-input border-white/20" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-400">Registration Link</Label>
                        <Input 
                          value={game.registrationLink} 
                          onChange={(e) => updateGame(game.id, "registrationLink", e.target.value)}
                          className="glass-input border-white/20" 
                          placeholder="/register or https://..."
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-1 flex justify-end">
                      <Button onClick={() => removeGame(game.id)} size="icon" variant="destructive" className="h-10 w-10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="glass-panel p-8 rounded-xl border border-white/10">
                 <h3 className="text-xl font-orbitron font-bold mb-6 text-primary">Hero Section</h3>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <Label>Main Headline</Label>
                       <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} className="glass-input" />
                    </div>
                    <div className="space-y-2">
                       <Label>Subtitle</Label>
                       <Input value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} className="glass-input" />
                    </div>
                 </div>
               </div>

               <div className="glass-panel p-8 rounded-xl border border-white/10">
                 <h3 className="text-xl font-orbitron font-bold mb-6 text-primary">Global Stats</h3>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <Label>Prize Pool Display</Label>
                       <Input value={prizePool} onChange={(e) => setPrizePool(e.target.value)} className="glass-input" />
                    </div>
                    <div className="space-y-2">
                       <Label>Player Count Display</Label>
                       <Input value={playerCount} onChange={(e) => setPlayerCount(e.target.value)} className="glass-input" />
                    </div>
                 </div>
               </div>
             </div>
          </TabsContent>

          <TabsContent value="logs">
            <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
               <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-center">
                 <h3 className="text-xl font-orbitron font-bold">System Activity Log</h3>
                 <Button size="sm" variant="outline" className="border-white/20">Export Logs</Button>
               </div>
               <div className="divide-y divide-white/10">
                  {mockLogs.map((log) => (
                    <div key={log.id} className="p-4 hover:bg-white/5 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                       <div className="md:col-span-2 text-xs text-gray-500 font-mono">{log.timestamp}</div>
                       <div className="md:col-span-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded bg-white/10 
                            ${log.action === 'ERROR' ? 'text-red-400 bg-red-900/20' : 
                              log.action === 'LOGIN' ? 'text-green-400 bg-green-900/20' : 'text-blue-400 bg-blue-900/20'}`}>
                            {log.action}
                          </span>
                       </div>
                       <div className="md:col-span-2 text-sm text-primary">{log.user}</div>
                       <div className="md:col-span-6 text-sm text-gray-300">{log.details}</div>
                    </div>
                  ))}
               </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
             <div className="glass-panel p-12 text-center rounded-xl border border-white/10">
              <Settings className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <h3 className="text-xl font-bold mb-2">Global Settings</h3>
              <p className="text-gray-400">SEO, Analytics, and API Keys configuration.</p>
              <div className="mt-8 max-w-md mx-auto space-y-4 text-left">
                 <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="space-y-0.5">
                      <Label className="text-base">Maintenance Mode</Label>
                      <p className="text-xs text-gray-500">Disable public access to the site</p>
                    </div>
                    <Switch />
                 </div>
                 <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="space-y-0.5">
                      <Label className="text-base">Registration Open</Label>
                      <p className="text-xs text-gray-500">Allow new team signups</p>
                    </div>
                    <Switch defaultChecked />
                 </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}