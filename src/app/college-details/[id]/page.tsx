// import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const DetailsPage = ({ params }: PageProps) => {
  // const { id } = params;
  return (
    <div className='my-16'>
      <h1>Details Page for ID: {params.id}</h1>
    </div>
  );
};

export default DetailsPage;
