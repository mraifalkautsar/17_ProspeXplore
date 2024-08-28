// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb2"; // Adjust the path based on your project structure

type ContactData = {
  email: string;
  phone: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, phone, message }: ContactData = req.body;

    try {
      // Get a MongoDB client and connect to the database
      const client = await clientPromise;
      const db = client.db("form_response"); // Replace with your database name
      const collection = db.collection("contacts"); // Replace with your collection name

      // Insert the new contact data
      const newContact = { email, phone, message };
      await collection.insertOne(newContact);

      // Send a success response
      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error("Error saving data to MongoDB", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
