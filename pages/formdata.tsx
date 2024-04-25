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

  <div className="bg-white text-black rounded-3xl px-12 py-12 mx-4 overflow-x-auto relative">
    <h1 className="md:text-4xl text-2xl mb-8 font-bold">
      Form Submissions
    </h1>

    <div className="table-container">
      <table className="md:text-2xl text-[16px] md:leading-[50px] leading-7">
        <thead>
          <tr className='align-top text-left'>
            <th className="pr-8 border-r border-gray-500 border-opacity-40">ID</th>
            <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Name</th>
            <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Organization</th>
            <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Ideas</th>
            <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Budget</th>
            <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Filter Reason</th>
            <th className="pr-8 pl-2 border-r border-gray-500 border-opacity-40">Other Reason</th>
            <th className="pr-8 pl-2">Contact Info</th>
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
              <td className="pr-8 pl-2">{submission.contact_info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <style jsx>{`
  .table-container {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin; /* for Firefox */
  }

  .table-container::-webkit-scrollbar {
    width: 12px;
  }

  .table-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .table-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  .table-container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`}</style>
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
