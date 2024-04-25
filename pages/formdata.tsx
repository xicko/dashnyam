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
<section className="flex justify-center mt-[120px]">
  <div className='bg-white text-black rounded-3xl px-12 py-12 mx-4 overflow-x-auto'>
    <h1 className='md:text-4xl text-xl mb-4 font-semibold'>Form Submissions</h1>

    <table className='md:text-2xl text-md'>
      <thead>
        <tr>
          <th className='md:pr-8 pr-4'>ID</th>
          <th className='md:pr-8 pr-4'>Name</th>
          <th className='md:pr-8 pr-4'>Organization</th>
          <th className='md:pr-8 pr-4'>Ideas</th>
          <th className='md:pr-8 pr-4'>Budget</th>
          <th className='md:pr-8 pr-4'>Filter Reason</th>
          <th className='md:pr-8 pr-4'>Other Reason</th>
          <th className='md:pr-8 pr-4'>Contact Info</th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((submission) => (
          <tr key={submission.id}>
            <td className='md:pr-8 pr-4'>{submission.id}</td>
            <td className='md:pr-8 pr-4'>{submission.name}</td>
            <td className='md:pr-8 pr-4'>{submission.organization}</td>
            <td className='md:pr-8 pr-4'>{submission.ideas}</td>
            <td className='md:pr-8 pr-4'>{submission.budget}</td>
            <td className='md:pr-8 pr-4'>{submission.filter_reason}</td>
            <td className='md:pr-8 pr-4'>{submission.other_reason}</td>
            <td className='md:pr-8 pr-4'>{submission.contact_info}</td>
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