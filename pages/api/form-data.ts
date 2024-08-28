import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb2';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('form_response'); // Nama database
    const collection = db.collection('contacts'); // Nama collection di dalam database

    const formData = await collection.find({}).toArray();

    res.status(200).json(formData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
