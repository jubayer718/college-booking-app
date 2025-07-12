/* eslint-disable @next/next/no-img-element */
import ReviewForm from "@/components/layout/ReviewForm";
import ReviewList from "@/components/layout/ReviewList";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";



interface College {
  _id: string;
  name: string;
  image: string;
  admissionDates: string;
  events: string[];
  research: string[];
  sports: string[];
  rating: number;
}

const getCollegeById = async (_id: string): Promise<College | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/college/${_id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.log("error from details page", err)
    return null;
  }
};

const CollegeDetailsPage = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }
  const college = await getCollegeById(params.id);
  if (!college) return notFound();

  return (
    <div className="my-14 p-6 space-y-6 max-w-4xl mx-auto">
      <img src={college.image} alt={college.name} className="w-full h-80 object-fill rounded-xl shadow" />
      <h1 className="text-3xl font-bold">{college.name}</h1>
      <p><strong>Admission Dates:</strong> {college.admissionDates}</p>

      <div>
        <h2 className="text-xl font-semibold mt-4">Events</h2>
        <ul className="list-disc ml-6">
          {college.events.map((event, i) => <li key={i}>{event}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Research</h2>
        <ul className="list-disc ml-6">
          {college.research.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Sports</h2>
        <ul className="list-disc ml-6">
          {college.sports.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <Link href={`/admission/${params.id}`}>
        <Button>Go to Admission</Button>
      </Link>

      <ReviewForm collegeId={params.id} />
      <ReviewList collegeId={params.id} />
    </div>
  );
};

export default CollegeDetailsPage;
