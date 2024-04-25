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
<section className='flex justify-center'>
    <div className='mt-20 pt-20 mx-8'>
      <h1>Form Submissions</h1>

      <table>
        <thead>
          <tr>
            <th className='pr-2'>ID</th>
            <th className='px-2'>Name</th>
            <th className='px-2'>Organization</th>
            <th className='px-2'>Ideas</th>
            <th className='px-2'>Budget</th>
            <th className='px-2'>Filter Reason</th>
            <th className='px-2'>Other Reason</th>
            <th className='pl-2'>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td className='pr-2'>{submission.id}</td>
              <td className='px-2'>{submission.name}</td>
              <td className='px-2'>{submission.organization}</td>
              <td className='px-2'>{submission.ideas}</td>
              <td className='px-2'>{submission.budget}</td>
              <td className='px-2'>{submission.filter_reason}</td>
              <td className='px-2'>{submission.other_reason}</td>
              <td className='pl-2'>{submission.contact_info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</section>
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