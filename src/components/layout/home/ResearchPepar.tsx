'use client';

const researchPapers = [
  {
    title: "AI-based Diagnosis of Lung Cancer",
    student: "Rahim Uddin",
    college: "Oxford College",
    link: "https://scholar.google.com/some-paper-link",
  },
  {
    title: "Blockchain in Educational Record Verification",
    student: "Sadia Ahmed",
    college: "Dhaka University",
    link: "https://example.com/blockchain-research",
  },
  {
    title: "Sustainable Energy Solutions for Rural Bangladesh",
    student: "Team GreenSpark",
    college: "Cambridge Institute",
    link: "https://example.com/green-energy-paper",
  },
  {
    title: "Emotion Detection Using Deep Learning",
    student: "Arif Hossain",
    college: "Kustia University",
    link: "https://example.com/emotion-ai-paper",
  },
];

const ResearchPapers = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
       Research Papers by Recommended College Students
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {researchPapers.map((paper, idx) => (
          <div key={idx} className="hover:scale-[1.02] border rounded-xl p-6 py-4 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Student:</strong> {paper.student}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>College:</strong> {paper.college}
            </p>
            <a
              href={paper.link}
              target="_blank"
              className="inline-block text-blue-600 font-medium hover:underline"
              rel="noopener noreferrer"
            >
             View Research
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
