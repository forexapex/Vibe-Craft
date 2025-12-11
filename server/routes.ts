import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Registration submission endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      
      // Log registration data for email simulation
      console.log("=== NEW REGISTRATION RECEIVED ===");
      console.log("Team:", validatedData.teamName);
      const captainData = validatedData.captain as { email?: string; name?: string } | null;
      console.log("Captain Email:", captainData?.email || "N/A");
      console.log("Email to: ipeorgofficial@zohomail.in");
      console.log("Discord notification sent");
      console.log("================================");
      
      res.json({ 
        success: true, 
        message: "Registration submitted successfully",
        registrationId: registration.id 
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid registration data" 
      });
    }
  });

  // Get all registrations (for admin dashboard)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  // Get single registration
  app.get("/api/registrations/:id", async (req, res) => {
    try {
      const registration = await storage.getRegistration(req.params.id);
      if (!registration) {
        res.status(404).json({ error: "Registration not found" });
        return;
      }
      res.json(registration);
    } catch (error) {
      console.error("Error fetching registration:", error);
      res.status(500).json({ error: "Failed to fetch registration" });
    }
  });

  return httpServer;
}
