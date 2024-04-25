import { Client } from 'pg';

const dbConfig = {
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

interface FormSubmission {
  id: number;
  name: string;
  organization: string;
  ideas: string;
  budget: string;
  filter_reason: string;
  other_reason: string;
  contact_info: string;
}

const SubmissionsPage: React.FC<{ submissions: FormSubmission[] }> = ({ submissions }) => {
  return (
    <div>
      <h1>Form Submissions</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Organization</th>
            <th>Ideas</th>
            <th>Budget</th>
            <th>Filter Reason</th>
            <th>Other Reason</th>
            <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{submission.name}</td>
              <td>{submission.organization}</td>
              <td>{submission.ideas}</td>
              <td>{submission.budget}</td>
              <td>{submission.filter_reason}</td>
              <td>{submission.other_reason}</td>
              <td>{submission.contact_info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsPage;

export const getServerSideProps = async () => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query('SELECT * FROM form_submissions');
    const submissions = result.rows;

    return {
      props: {
        submissions,
      },
    };
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return {
      props: {
        submissions: [],
      },
    };
  } finally {
    await client.end();
  }
};