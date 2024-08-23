import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type ContactData = {
  email: string;
  phone: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, phone, message }: ContactData = req.body;

    // Create the directory path if it doesn't exist
    const directoryPath = path.join(process.cwd(), "data");
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath);
    }

    // Create or append to the JSON file
    const filePath = path.join(directoryPath, "contacts.json");
    const newContact = { email, phone, message };

    try {
      let data: ContactData[] = [];

      // Check if the file exists and read the existing data
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        data = JSON.parse(fileContent);
      }

      // Append the new contact data
      data.push(newContact);

      // Write the updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      // Send a success response
      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error("Error writing file", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
