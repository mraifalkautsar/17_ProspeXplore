import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb2';
import { ObjectId } from 'mongodb'; // Import ObjectId from mongodb

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { ids }: { ids: string[] } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'Invalid request: ids must be a non-empty array' });
    }

    const client = await clientPromise;
    const database = client.db('form_response');
    const collection = database.collection('contacts');

    const result = await collection.deleteMany({ _id: { $in: ids.map(id => new ObjectId(id)) } });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No data found to delete' });
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export default handler;
