export default function KeyFeatures() {
  const features = [
    {
      title: "Quests & CBT Mode",
      description: "Gamified assessments built from your internal documents",
    },
    {
      title: "Bookee Library",
      description:
        "Central access to all training manuals and policy resources",
    },
    {
      title: "Study Materials Engine",
      description: "Personalized revision tools based on user performance",
    },
    {
      title: "Admin Dashboard",
      description:
        "Instant visibility into who’s learning, how fast, and how well",
    },
    {
      title: "Akada AI Assistant",
      description:
        "24/7 smart help for difficult concepts and on-demand guidance",
    },
    {
      title: "Custom Branding",
      description: "Your identity, your mission, your platform",
    },
  ];
  return (
    <>
      <div
        className="w-full min-h-[100vh] lg:min-h-[100vh] flex items-center"
        style={{
          background: "linear-gradient(white, #FFFFFF60 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full">
          {/* KEY FEATURES */}
          <div className="container mx-auto px-6 py-16 md:py-24 text-center">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Key Features
              </h2>
            </div>
            <div className="w-full mx-auto">
              <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-px">
                {features.map((feature, index) => {
                  return (
                    <li key={index} className={"w-full px-4 text-start"}>
                      <div className="w-full flex gap-4">
                        <div className="w-[20px] flex flex-col items-center">
                          <div className="w-full aspect-square rounded-full bg-black/90"></div>
                          <div className="w-[2px] bg-black/90 h-full"></div>
                        </div>
                        <div className="flex-1 w-full pb-6">
                          <span className="font-medium text-black text-lg">
                            {feature.title}
                          </span>
                          <p className="text-black/80 py-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* BUILT FOR */}
          <div className="container mx-auto px-6 py-16 md:py-24 text-center mt-12">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                LearningPost Pro is built for
              </h2>
            </div>
            <div className="w-full mx-auto">
              <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-px">
                {[
                  "Ministries, Departments & Agencies (MDAs)",
                  "Corporate organizations and multinationals",
                  "NGOs and donor-funded program implementers",
                  "Faith-based organizations and religious training institutes",
                  "Schools, hospitals, and professional networks",
                  "Community-based organizations with decentralized teams",
                ].map((feature, index) => {
                  return (
                    <li key={index} className={"w-full px-4 text-start"}>
                      <div className="w-full flex gap-4">
                        <div className="w-[20px] flex flex-col items-center">
                          <div className="w-full aspect-square rounded-full bg-black/90"></div>
                          <div className="w-[2px] bg-black/90 h-full"></div>
                        </div>
                        <div className="flex-1 w-full pb-6">
                          <p className="text-black/80 py-1">{feature}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
