import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "All fields are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid email address" 
        });
      }

      // Send email
      const emailSent = await sendContactEmail({ name, email, message });
      
      if (emailSent) {
        res.json({ 
          success: true, 
          message: "Message sent successfully!" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Server error. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
