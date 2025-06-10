import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div
        className="w-full"
        style={{
          background: "linear-gradient(white, #FFFFFF80 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <section className="max-w-3xl mx-auto pt-[20vh] pb-12 break-words">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-black mb-16 leading-tight">
            Privacy Policy
          </h1>

          <div className="w-full h-[70vh] overflow-auto bg-white/30 rounded-xl p-6 flex flex-col gap-6">
            {/* <!-- ========================================================================== -->
    <!-- INTRODUCTION -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Introduction</div>
              <div className="pl-3 text-sm">
                This Privacy Policy explains how LearningPost Education
                (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) handles your
                personal information when you use our website
                www.learningpost.ng (the &quot;Website&quot;) and our
                LearningPost Mobile Application (the &quot;App&quot;). We are
                committed to protecting your privacy and handling your
                information responsibly. Please read this policy carefully to
                understand our privacy practices.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- WHAT INFORMATION WE COLLECT -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - What Information We Collect
              </div>
              <div className="pl-3 text-sm">
                Here are more comprehensive details for each category of
                information we collect:
                <div className="font-medium">Contact details:</div>
                Name - your full name as provided during account registration.
                Email address - your personal or work email account used for
                login credentials and communications. Mailing address - your
                residential or office address provided for billing and
                shipments. Phone number - your personal mobile number provided
                for account verification and contact.
                <div className="font-medium">Demographic information:</div>
                Age - your date of birth if provided voluntarily during
                registration. Gender - your gender as voluntarily specified in
                your user profile. Interests - your subjects of interest
                gathered from your content usage patterns.
                <div className="font-medium">Financial information:</div>
                Credit/debit card details - card number, expiration date, CVV
                shared for purchases. Billing address - address associated with
                your payment method for billing.
                <div className="font-medium">Device information:</div>
                IP address - unique identifier for your internet connection.
                Browser type - software you use to access the website (Chrome,
                Safari etc). Operating system - OS your device runs on (iOS,
                Android, Windows etc).
                <div className="font-medium">Usage information:</div>
                Pages visited - record of pages accessed across the website.
                Content viewed - record of content pieces read or watched on the
                platform. Time spent - duration spent browsing pages or
                accessing content.
                <div className="font-medium">Education details:</div>
                School - name of your educational institution if provided.
                Grade/className - your current grade or className in school.
                Subjects - curriculum subjects you are studying.
                <div className="font-medium">Assessment data:</div>
                Test scores - results for any practice tests taken. Quiz results
                - scores for any quizzes completed. Learning progress -
                statistics on curriculum mastery levels.
                <div className="font-medium">Marketing data:</div>
                Newsletter - record of newsletter subscription, open and click
                rates. Events - record of event registrations and attendance.
                <div className="font-medium">Communications:</div>
                Emails - copies of email exchanges with our support team.
                Messages - records of any online messages with support team.
                Call recordings - recordings of customer support calls.
                <div className="font-medium">Third party information:</div>
                Public records - including educational credentials. Social media
                activities - information shared publicly.
                <div className="font-medium">Aggregated data:</div>
                Browsing patterns - generalized data about usage habits. Traffic
                data - data about overall visitor traffic to our platforms.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- HOW WE USE YOUR INFORMATION -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - How We Use Your Information
              </div>
              <div className="pl-3 text-sm">
                We use your personal information for the following purposes:{" "}
                <br />
                • Provide our services and fulfill your requests - We use your
                personal information to create your account, authenticate you as
                a user, provide access to our educational platforms and content,
                enable purchases and billing, ship products, and fulfill any
                other requests you make. This includes using details like your
                name, contact info, education details, financial info, device
                info, and usage data.
                <br />
                • Personalize content and improve our offerings - We use your
                personal information to tailor our platforms, content
                recommendations, notifications, and communications to your needs
                and interests. This includes using your usage data, education
                details, interests, and device data.
                <br />
                • Communicate with you via email, calls, messages - We use your
                contact details and preferences to respond to your inquiries,
                provide customer and technical support, send important account
                notifications, reminders, updates to our offerings.
                Communications may be via email, text messages, phone calls, and
                in-app notifications.
                <br />
                • Respond to your customer service inquiries - We use your
                account info, order details, usage info, and communications with
                us to investigate and resolve any issues or complaints you may
                have with our service.
                <br />
                • Send you important notices and updates - We may send you
                updates about changes to our terms, policies, events, and other
                important information related to your use of our platforms and
                offerings.
                <br />
                • Administer contests, surveys, events - We use your personal
                information to administer any competitions, sweepstakes,
                surveys, polls, events registration and tracking your
                participation.
                <br />
                • Detect and prevent fraud, abuse, security risks - We may use
                your personal information to detect and prevent any
                unauthorized, illegal, or abusive activity on our platforms. We
                also use it to ensure compliance with our terms and policies and
                to identify and resolve any security risks.
                <br />
                • Comply with legal obligations - We use your personal
                information when required to comply with any applicable law,
                regulation, subpoenas, court orders, or other legal process
                requirements.
                <br />
                • Conduct research and analysis - We may use your personal
                information in aggregated, anonymized data analytics to assess
                market trends, usage patterns, demographics, and to better
                understand and serve our users.
                <br />• Create anonymous, aggregated data - We may anonymize and
                aggregate your personal information to generate generic data
                sets and business intelligence used in analytics, advertising,
                and operations.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- DISCLOSURE TO THIRD PARTIES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Disclosure to Third Parties
              </div>
              <div className="pl-3 text-sm">
                We may share your personal information with third parties. Here
                are more details on when we share your personal information with
                third parties:
                <br />
                • Service providers under contract who help operate our business
                (billing, marketing, analytics) - We may share your personal
                information including contact info, financial info, usage data
                with third party service partners who assist us with operating
                our business. These include payment processors, email delivery
                services, marketing partners, website analytics providers,
                customer support, and other similar operational functions. We
                only share information required for them to perform those
                services.
                <br />
                • Law enforcement agencies if required by applicable laws - We
                may share your personal information with law enforcement
                agencies, public authorities or other organizations if legally
                required to do so, if compelled by subpoena, court order, or
                other valid legal process requirement. Information shared could
                include contact details, usage data, communications, and any
                other information requested or required.
                <br />
                • Courts, tribunals, regulators, government authorities as
                required by law - We may disclose your personal information to
                courts, legal tribunals, regulatory agencies, or other
                government officials and entities as required by applicable
                laws, regulations, rules or orders. Information shared could
                include contact details, financial transactions, usage data,
                profile information.
                <br />
                • Potential buyers in the event we sell or transfer all or part
                of our business - If we sell, acquire, merge, divest,
                restructure or transfer all or part of our business, we may
                share your personal information with the actual or prospective
                purchasers or counterparties and their advisors. Data shared
                could include various categories collected such as contact
                details, order data, profile info, usage data.
                <br />• Any other third party with your consent or direction to
                do so - We may share your personal information with any other
                third party outside of our organization when we have your
                explicit consent and permission to do so. We require third
                parties to respect the security of your data and treat it in
                accordance with the law. We do not allow third parties to use
                your personal information for their own purposes.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- INTERNATIONAL DATA TRANSFERS -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - International Data Transfers
              </div>
              <div className="pl-3 text-sm">
                We may transfer your personal information to other countries for
                storage and processing. Countries outside the European Economic
                Area (EEA) do not always offer the same levels of protection to
                your personal data, so we take steps to ensure adequate
                safeguards are in place such as EU Model Clauses.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- DATA SECURITY AND RETENTION -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Data Security and Retention
              </div>
              <div className="pl-3 text-sm">
                We implement technical and organizational security measures such
                as encryption, access controls, and data security policies to
                protect your personal information from unauthorized access or
                disclosure. We retain your personal information as long as
                required to fulfill our business purposes or comply with
                applicable laws. When no longer needed, your data will be
                anonymized, deleted, or destroyed as permitted by law.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- YOUR DATA RIGHTS AND CHOICES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Your Data Rights and Choices
              </div>
              <div className="pl-3 text-sm">
                You have the following rights and control over your personal
                information:
                <br />
                • Access your personal data - You have the right to request
                details of your personal information we hold about you,
                including the specific pieces of data we have collected, our
                uses of your data, who we share it with, and other supplemental
                information.
                <br />
                • Correct inaccuracies in your data - If you believe we have
                inaccurate or incomplete personal data about you, you can
                request that we modify, update, or correct this information to
                maintain its integrity and accuracy.
                <br />
                • Delete your account and personal data - You may request us to
                delete your user account and all associated personal
                information. However, we may retain some data if required by law
                or for our legitimate business purposes.
                <br />
                • Restrict or object to certain data processing - You may ask us
                to restrict or limit how we process your personal data, such as
                opting out of certain uses like direct marketing. You may also
                object on grounds relating to your particular situation.
                <br />
                • Receive an electronic copy of your data for transferring (data
                portability) - You can ask to obtain your personal information
                that you have provided to us in a commonly used,
                machine-readable format. You can then transfer this data to a
                third party.
                <br />
                • Lodge a complaint with the data protection authority - If you
                feel we are not in compliance with applicable data protection
                laws, or if you are unsatisfied with how we handle your
                information, you have the right to lodge a complaint with your
                local data protection supervisory authority.
                <br />
                • In most cases, you can submit these requests by signing into
                your account with us, updating your account settings and
                preferences, or contacting us. We will fulfill valid requests in
                accordance with applicable laws.
                <br />
                • You can manage your privacy preferences and unsubscribe from
                marketing messages in your account settings and by contacting
                us.
                <br />
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- COOKIES AND TRACKING TECHNOLOGIES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Cookies and Tracking Technologies
              </div>
              <div className="pl-3 text-sm">
                We use cookies and similar technologies on our Website and App.
                These help provide and improve our services, analyze usage,
                enable ads, and enhance your browsing experience. You can
                disable cookies in your browser settings but some parts of our
                Website and App may then not function properly.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- PRIVACY POLICY UPDATES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Privacy Policy Updates
              </div>
              <div className="pl-3 text-sm">
                We may modify this Privacy Policy from time to time and will
                post updates here. We encourage you to check back periodically.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- CONTACT DETAILS -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Contact Details
              </div>
              <div className="pl-3 text-sm">
                If you have any questions about our privacy practices or this
                policy, please contact us at{" "}
                <Link
                  href={"mailto:info@learningpost.ng"}
                  className="text-blue-600 hover:underline"
                >
                  info@learningpost.ng
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
