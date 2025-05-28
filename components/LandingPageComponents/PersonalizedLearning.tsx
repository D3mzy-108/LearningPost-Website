export default function PersonalizedLearning() {
  return (
    <>
      <section
        id="personalized-learning-pathways"
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(white, #FFFFFF80 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Explore{" "}
              <span className="text-blue-800">Personalized Learning</span>{" "}
              pathways
            </h2>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <p className="text-md text-black/80">
              {
                "At LearningPost, we believe that every student deserves access to quality education tailored to their individual needs. Our platform is designed to empower learners of all ages and backgrounds to unlock their full potential and achieve academic success. Whether you're a student, teacher, or parent, LearningPost provides the tools, resources, and support you need to thrive in today's rapidly changing educational landscape."
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
