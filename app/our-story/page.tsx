"use client";
import { useState } from "react";

export default function OurStory() {
  const [activeTab, setActiveTab] = useState("daughter"); // Default to daughter's perspective

  // Data for each perspective
  const perspectives = [
    {
      id: "daughter",
      name: "A Learner's Journey",
      title: "A Daughter's Voice, A Learner's Journey",
      content: (
        <>
          <p className="mb-4">
            I didn&apos;t know I was part of something big. I just knew I was
            struggling.
          </p>
          <p className="mb-4">
            I was preparing for my final exams—tired, stressed, overwhelmed. Mom
            was tirelessly on my case daily, &quot;You need to read more,&quot;
            but reading more wasn&apos;t helping. I would go through past
            questions, get some wrong, and then stare at the answers, confused
            and stuck. I needed help, but I didn&apos;t always know who to ask
            or what to ask.
          </p>
          <p className="mb-4">
            One night, I remember crying quietly after studying. I felt like I
            was drowning in subjects I used to enjoy. That was when my dad
            walked in.
          </p>
          <p className="mb-4">
            He sat beside me and said, &quot;Can I be your study mate?
            We&apos;ll read together, then I&apos;ll ask you questions about
            what you&apos;ve read and help with explanations.&quot;
          </p>
          <p className="mb-4">That moment changed everything.</p>
          <p className="mb-4">
            What I didn&apos;t know was that my dad had already been thinking of
            ways to help me. He spoke to my brother—my techie big brother—and
            asked, &quot;Can we make something that explains every question she
            gets wrong?&quot; And they did.
          </p>
          <p className="mb-4">
            At first, I didn&apos;t think much of it. It looked like a simple
            quiz game. But then something amazing happened: when I got a
            question wrong, the app explained why. It gave me options to dig
            deeper. It remembered what I missed and helped me focus on those
            areas. I started to understand things faster. I stopped dreading
            study time.
          </p>
          <p className="mb-4">
            Over time, I saw my confidence grow. My grades went from Cs to all
            As in my finals and I ranked in the top 4th percentile nationwide in
            my UTME. But more than that, I started enjoying learning again. It
            felt like someone finally got me—finally saw how I learned, how I
            processed things, and gave me space to get better.
          </p>
          <p className="mb-4">That app? It became LearningPost.</p>
          <p className="mb-4">And I became its first learner.</p>
          <p className="mb-4">
            Since then, I&apos;ve watched it evolve into something incredible.
            I&apos;ve seen it help my younger brother crush his UTME. I&apos;ve
            seen classmates benefit from features we dreamed of. I&apos;ve
            watched my dad and brother turn that spark of hope into a platform
            built for students like me—students who want to succeed but just
            need a different kind of help.
          </p>
          <p className="mb-4">
            LearningPost didn&apos;t just teach me Math or English. It taught me
            that learning can be personal, joyful, and powerful.
          </p>
          <p className="mb-4">
            If you&apos;ve ever felt stuck, unheard, or unsure, I want you to
            know: LearningPost was built with you in mind.
          </p>
          <p className="mb-4">It started with my confusion.</p>
          <p className="mb-4">Now it&apos;s a movement.</p>
          <p className="mb-4">And you&apos;re invited.</p>
          <p className="mb-4">Ready to join the Quest?</p>
        </>
      ),
      author: "Temiloluwa Ayinde",
    },
    {
      id: "son",
      name: "A Solution",
      title: "A Son, A Sister, A Solution",
      content: (
        <>
          <p className="mb-4">
            I remember the night my dad called me into the room. My sister had
            just finished another exhausting study session—frustrated, confused,
            and nearly in tears. She had been working through past questions,
            but every time she got one wrong, there was no explanation. No hint.
            No one to walk her through why.
          </p>
          <p className="mb-4">
            My dad looked at me and asked, &quot;Can we build something for her?
            Something that explains every question she misses?&quot; He went on
            to explain what he meant, using words like deep learning, adaptive
            learning—terms I usually heard in research journals, not family
            conversations. But he was serious. He had a vision, and he believed
            we could make it real.
          </p>
          <p className="mb-4">That question changed everything.</p>
          <p className="mb-4">
            As a developer, I&apos;d built things before—but nothing like this.
            This was different. This was personal. I wasn&apos;t just building
            an app. I was building a lifeline for my sister.
          </p>
          <p className="mb-4">
            So I got to work. I started scripting what would become the
            foundation of LearningPost: a system that could deliver instant,
            intelligent feedback; guide learners step-by-step through their
            mistakes; and adapt to how they think. The goal? To make sure no
            learner is ever stuck without help again.
          </p>
          <p className="mb-4">
            We started with just the Quest personalized learning journeys, added
            SmartLinks months later (AI-powered explainers that show up exactly
            when you need them). Then came Akada, our AI tutor, BOOKEE and
            Arena. One feature after another, all built around the needs of a
            single student who just wanted to understand.
          </p>
          <p className="mb-4">
            But as we watched it work; first for her, then for her younger
            brother who comfortably completed his UTME a year later, ranking in
            the top 1 percentile nationwide, we realized we had stumbled on
            something much bigger.
          </p>
          <p className="mb-4">
            This wasn&apos;t just about helping one girl. This was about
            changing the way learning works—for everyone.
          </p>
          <p className="mb-4">
            Realizing she wasn&apos;t alone—with over a million students failing
            UTME yearly for the same reason: no feedback, no second chances—we
            wanted to change that.
          </p>
          <p className="mb-4">
            And so, together with my dad, we turned that prototype into a
            platform. It&apos;s been 30 months. We spent late nights testing,
            coding, refining. We debated every feature. We dreamed of every
            child who could benefit from it. We assembled a small team to scale
            and bring the vision to life, each person driven by purpose and
            belief in what we were building.
          </p>
          <p className="mb-4">
            I&apos;m proud of what we&apos;ve built. But more than that,
            I&apos;m proud of why we built it.
          </p>
          <p className="mb-4">
            LearningPost was born out of family. Out of frustration. Out of
            love. It was born because a sister deserved answers, and a father
            believed in possibility.
          </p>
          <p className="mb-4">
            Today, it belongs to every learner who&apos;s ever felt left behind.
            Every student who&apos;s tried, failed, and wanted to understand
            why.
          </p>
          <p className="mb-4">We built LearningPost for her.</p>
          <p className="mb-4">We built it for you.</p>
          <p className="mb-4">And we&apos;re just getting started.</p>
        </>
      ),
      author: "Demilade Ayinde, Co-Founder",
    },
    {
      id: "father",
      name: "A Mission",
      title: "A Father, A Daughter, & A Family's Mission",
      content: (
        <>
          <p className="mb-4">
            It didn&apos;t begin in a lab or a boardroom. It began at my dining
            table, one quiet evening, with my daughter struggling and me—her
            father—refusing to watch her slip away from belief in herself.
          </p>
          <p className="mb-4">
            She had the books. She had the teachers. But something was missing.
            The spark. The connection. The joy.
          </p>
          <p className="mb-4">
            She was preparing for her final exams, yet growing more overwhelmed
            by the day. Her shoulders slumped lower. Her eyes dimmed. Her
            confidence was crumbling under the weight of pressure she
            didn&apos;t know how to name.
          </p>
          <p className="mb-4">
            And I—watching her night after night—knew the problem wasn&apos;t
            her intelligence.
          </p>
          <p className="mb-4">It was the system.</p>
          <p className="mb-4">
            The one-size-fits-all lessons. The repetition without real
            understanding. Notes without context. The silence that followed
            confusion. It wasn&apos;t that she couldn&apos;t learn—it was that
            no one had shown her how to learn for herself.
          </p>
          <p className="mb-4">So one night, I turned to my son and said,</p>
          <p className="mb-4">
            &quot;Can&apos;t we build something for her? Something that explains
            every question she misses?&quot;
          </p>
          <p className="mb-4">He didn&apos;t hesitate.</p>
          <p className="mb-4">He said yes.</p>
          <p className="mb-4">And so we built her something.</p>
          <p className="mb-4">
            Not a shiny app. Not a polished product. Just a simple, structured
            tool—a quiet revolution made of code and care. Something that would
            guide her through questions, help her learn from mistakes, and offer
            explanations when no one else could.
          </p>
          <p className="mb-4">
            It wasn&apos;t technology. It was love, disguised as software.
          </p>
          <p className="mb-4">
            And slowly, what began as a father&apos;s ache and a brother&apos;s
            response became a lifeline for my daughter.
          </p>
          <p className="mb-4">
            In just six months, she went from Cs to As in her finals—and ranked
            in the top 4th percentile nationwide in her UTME.
          </p>
          <p className="mb-4">
            But the most beautiful thing wasn&apos;t the scores.
          </p>
          <p className="mb-4">
            It was the way she smiled again when she studied. The light that
            returned to her eyes. The confidence that crept back into her voice.
          </p>
          <p className="mb-4">That&apos;s when I knew:</p>
          <p className="mb-4">This couldn&apos;t end with her.</p>
          <p className="mb-4">
            Because if it could work for one child—why not for others?
          </p>
          <p className="mb-4">
            So her siblings joined in. Coding. Testing. Giving feedback.
            Redesigning. They poured their hearts into it. Together, we shaped
            it—line by line, screen by screen—into something every child could
            use. Anywhere. Anytime.
          </p>
          <p className="mb-4">And that&apos;s how LearningPost was born.</p>
          <p className="mb-4">
            We didn&apos;t set out to build an edtech company.
          </p>
          <p className="mb-4">We set out to help one child.</p>
          <p className="mb-4">
            But that act of love grew into a platform. A mission. A movement.
          </p>
          <p className="mb-4">
            Today, LearningPost is our family&apos;s response to an educational
            crisis. A tool crafted with purpose, not profit. It&apos;s hope,
            coded and compiled. It&apos;s every learner&apos;s second chance.
          </p>
          <p className="mb-4">We started with one child.</p>
          <p className="mb-4">Now we build for millions.</p>
          <p className="mb-4">
            This isn&apos;t just another Edtech solution. It&apos;s our answer
            to a broken system.
          </p>
          <p className="mb-4">
            A system that says &quot;you failed&quot; and offers no explanation.
          </p>
          <p className="mb-4">We built LearningPost to change that forever.</p>
          <p className="mb-4">One child at a time. </p>
          <p className="mb-4">One quest at a time. </p>
          <p className="mb-4">One future at a time.</p>
        </>
      ),
      author: "Gbenga Ayinde, Co-Founder",
    },
  ];

  return (
    <section
      className="min-h-screen"
      style={{
        background: "linear-gradient(white, #FFFFFF80 25% 75%, white)",
        backdropFilter: "blur(50px)",
      }}
    >
      <div className="max-w-6xl mx-auto pt-[20vh] pb-12">
        {/* Section Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-black mb-12 leading-tight">
          The LearningPost Story
        </h1>

        <div className="max-w-3xl mx-auto bg-white/30 rounded-xl overflow-hidden shadow-lg border-t-4 border-blue-300">
          {/* Tab Navigation */}
          <div className="w-full overflow-auto bg-white/30 py-4 px-6 sm:px-8">
            <div className="flex justify-start gap-4">
              {perspectives.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`
              px-4 py-2 mb-2 transition-all duration-300 cursor-pointer
              ${
                activeTab === p.id
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-700 border-b-2 border-b-gray-400"
              }
            `}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full pb-6 pt-2 px-6 sm:px-8">
            {/* Tab Content */}
            {perspectives.map((p) => (
              <div
                key={p.id}
                className={`${activeTab === p.id ? "block" : "hidden"}`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 leading-snug">
                  {p.title}
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  {p.content}
                  <p className="italic font-bold">~ {p.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
