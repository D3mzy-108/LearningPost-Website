import Link from "next/link";

export default function BookDemo() {
  return (
    <>
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full max-w-3xl mx-auto text-center">
          <p className="text-black/80">
            {
              "Organizations can quickly and affordably launch their own training platform without the need for significant upfront investment. Our Zero CapEx Model means there's no hardware to buy or servers to install. You simply provide your content, and we'll host, maintain, and support the platform, allowing you to focus on achieving results. With our Fast, Flexible Rollout, your branded training platform can be live in just 5-15 days; simply send over your documents, and we'll transform them into engaging Quests, quizzes, and certification tests."
            }
          </p>
        </div>
      </section>
      <section
        id="book-demo"
        className="w-full py-16"
        style={{
          background: "linear-gradient(white, #FFFFFF60 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="p-6 md:p-12">
          <div className="w-full bg-white/40 rounded-2xl px-6 py-12 flex flex-col gap-10 items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready for a <span className="text-blue-600">Live Demo</span>?
            </h2>
            <p className="text-lg text-black/80">
              {
                "Let us show you what learning looks like when it's built for real impact."
              }
            </p>
            <Link href={"mailto:info@learningpost.ng"}>
              <div className="py-4 px-8 bg-blue-700 rounded-full text-white">
                Email us at info@learningpost.ng
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
