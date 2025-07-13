import { notFound } from "next/navigation";

// Next.js অ্যাপ রাউটারের জন্য সঠিক টাইপ
interface PageProps {
  params: {
    id: string;
  };
}

const DetailsPage = async ({ params }: PageProps) => {
  // params.id ব্যবহার করা হচ্ছে
  const { id } = params;

  // উদাহরণস্বরূপ: ID বৈধ কিনা চেক করা
  const validIds = ["1", "2", "3"]; // আপনার বৈধ ID লিস্ট
  if (!validIds.includes(id)) {
    notFound(); // অবৈধ ID হলে 404 পেজ দেখাবে
  }

  return (
    <div className="my-16">
      <h1>Details Page for ID: {id}</h1>
    </div>
  );
};

export default DetailsPage;