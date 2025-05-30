export default function LearningPostProFunctions() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              With <span className="text-blue-800">LearningPost Pro</span>
              <br />
              you can:
            </h2>
          </div>
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
              {[
                "Convert policy documents and manuals into Quest-based learning modules",
                "Customize your organization's login page, branding, and user interface",
                "Monitor learner progress and performance via real-time dashboards",
                "Deploy CBT tests for certification, compliance, grading, or promotions",
                "Enable offline learning for field teams and multilingual access for diverse audiences",
                "Auto-generate targeted study materials based on performance gaps",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
