import { Client } from 'pg';

const dbConfig = {
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

export default async function handler(req, res) {
  const client = new Client(dbConfig);

  try {
    await client.connect();

    if (req.method === 'POST') {
      const formData = req.body;

      await client.query(
        'INSERT INTO form_submissions (name, organization, ideas, budget, filter_reason, other_reason, contact_info) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [formData.name, formData.organization, formData.ideas, formData.budget, formData.filterReason, formData.otherReason, formData.contactInfo]
      );

      res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.end(); // Disconnect the client
  }
}
