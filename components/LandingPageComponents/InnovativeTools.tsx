import { JSX } from "react";

export default function InnovativeTools() {
  const tools = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-gamepad"
        >
          <path d="M6 12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path>
          <path d="M12 6v4"></path>
          <path d="M12 14v4"></path>
          <path d="M14 16h-4"></path>
          <path d="M15 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
          <path d="M9 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
        </svg>
      ),
      title: "LearningPost Quests",
      description:
        "Transform education into a captivating adventure. Dive headfirst into interactive challenges, quizzes, and activities precisely crafted to stimulate young minds.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book-open"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      title: "Bookee: Universe of Knowledge",
      description:
        "Explore our vast world of knowledge and immerse yourself in our galaxy of carefully curated textbooks and ebooks, spanning every subject and genre imaginable.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-award"
        >
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89L17.18 21l-5.15-3.62L6.82 21l1.703-8.11"></path>
        </svg>
      ),
      title: "Gamified Learning & Challenges",
      description:
        'The gaming fun doesn\'t stop at points and badges. Learners can take the spotlight in live "Challenge" quizzes, going head-to-head with peers in a celebration of capabilities.',
    },
  ];

  return (
    <>
      <section id="innovative-tools" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Elevate Your Learning Quest with{" "}
              <span className="text-blue-800">Innovative Tools</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center place-content-center">
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const ToolCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
      <div className="text-blue-600 text-5xl mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        {description}
      </p>
    </div>
  );
};
