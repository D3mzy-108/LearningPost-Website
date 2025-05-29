export default function AboutLearningPostPro() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              What is <span className="text-blue-800">LearningPost Pro</span>
            </h2>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <p className="text-md text-black/80">
              {
                "LearningPost Pro is the enterprise edition of LearningPost, purpose-built for professional development across public, private, and nonprofit sectors. It converts your policies, SOPs, and internal guides into smart, interactive learning experiences—powered by AI, backed by data, and built for performance. Whether you’re training civil servants, church workers, field staff, or corporate teams, LearningPost Pro makes mandatory learning effective, engaging, and measurable"
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
