import { Client } from "pg";
import Head from "next/head";

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

const SubmissionsPage: React.FC<{ submissions: FormSubmission[] }> = ({
  submissions,
}) => {
  return (
    <section className="flex justify-center mt-[120px]">
      <Head>
        <title> </title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bg-white text-black rounded-3xl px-12 py-12 mx-4 overflow-x-auto">
        <h1 className="md:text-4xl text-2xl mb-8 font-bold">
          Form Submissions
        </h1>

        <table className="md:text-2xl text-xl">
          <thead>
            <tr className='align-top text-left'>
              <th className="pr-8 border-r border-gray-500 border-opacity-40">ID</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Name</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Organization</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Ideas</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Budget</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Filter Reason</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Other Reason</th>
              <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Contact Info</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td className="pr-8 border-r border-gray-500 border-opacity-40">{submission.id}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.name}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.organization}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.ideas}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.budget}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.filter_reason}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.other_reason}</td>
                <td className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">{submission.contact_info}</td>
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
    const result = await client.query("SELECT * FROM form_submissions");
    const submissions = result.rows;

    return {
      props: {
        submissions,
      },
    };
  } catch (error) {
    console.error("Error fetching form submissions:", error);
    return {
      props: {
        submissions: [],
      },
    };
  } finally {
    await client.end();
  }
};
