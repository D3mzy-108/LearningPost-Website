import Link from "next/link";

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>

          <div className="w-full h-[70vh] overflow-auto bg-white/30 rounded-xl p-6 flex flex-col gap-6">
            {/* <!-- ========================================================================== -->
    <!-- INTRUDUCTION -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Introduction</div>
              <div className="pl-3 text-sm">
                www.learningpost.ng (&quot;LearningPost&quot;, &quot;We&quot;)
                is a website and app that provides educational content to
                students on smartphones, tablets, and computers. Our goal is to
                make learning accessible regardless of internet availability or
                costs. These Terms explain the rules for using
                LearningPost&apos;s website and app (the &quot;Services&quot;).
                By signing up or using our Services, you agree to follow these
                Terms. If you don&apos;t agree, don&apos;t use LearningPost. The
                Terms apply to anyone who visits, browses, accesses, or uses the
                Services (&quot;You&quot; or &quot;User&quot;). If you are under
                18, you need permission from your parents or guardian before
                using LearningPost. Read these Terms and our Privacy Policy
                carefully before using LearningPost. The Terms take priority
                over any other policies about the Services. Section headings are
                just for organization and have no legal meaning.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- MINIMUM AGE -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Minimum Age</div>
              <div className="pl-3 text-sm">
                You must be at least 18 years old to use LearningPost. If you
                are under 18, you must get permission from your parents or
                guardian before signing up. By signing up, you state that you
                have gotten this permission.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- ACCEPTING THE TERMS -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Accepting the Terms
              </div>
              <div className="pl-3 text-sm">
                By signing up for LearningPost, you agree to follow these Terms
                and the Privacy Policy. If you don&apos;t accept them, you must
                not sign up. If you&apos;re signing up on behalf of someone
                under 18, they must follow the Terms too. Please read the Terms
                carefully. Just by using, accessing or browsing LearningPost,
                you accept the Terms and agree to be legally bound by them. When
                using LearningPost&apos;s third-party services like email, you
                also agree to those companies&apos; posted terms. Signing up for
                any LearningPost Service means accepting those additional terms
                too. You can get a copy of these Terms by emailing
                help@learningpost.ng with the subject &quot;Request for Terms of
                Use Agreement&quot;. LearningPost may also post guidelines and
                rules for specific services. Those are incorporated into these
                Terms when posted.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- SERVICES OVERVIEW -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Services Overview
              </div>
              <div className="pl-3 text-sm">
                LearningPost lets users access educational materials. Users
                register on the website or app and get free access to some
                materials. They can upgrade to paid premium access at any time.
                Premium plans are available for 3 months
                (non-Nigerians/Ghanaians), 6 months, or 12 months. 12 months can
                be paid upfront in one payment.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- FEES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Fees</div>
              <div className="pl-3 text-sm">
                For payment methods requiring manual activation like bank
                transfer or check, your subscription starts when you provide
                LearningPost account details or after 30 days, whichever comes
                first. Subscriptions automatically expire after the subscription
                period. To renew, email help@learningpost.ng or call +234 000
                000 0001. If you pay by credit/debit card, you authorize us to
                charge that card on an ongoing basis to pay subscription fees
                when due. We try to ensure accurate pricing on our website and
                materials. But prices can change. If the price changes before we
                process your order, we will notify you. You agree to pay any
                applicable taxes for using LearningPost&apos;s services and
                products.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- NO REFUNDS -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- No Refunds</div>
              <div className="pl-3 text-sm">
                All subscriptions and purchases are final and non-refundable. We
                appreciate your understanding. Before completing a purchase,
                review your selection carefully. Contact our customer support if
                you need any assistance.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- USER CONDUCT -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- User Conduct</div>
              <div className="pl-3 text-sm">
                Use LearningPost only for lawful purposes. Don&apos;t post,
                send, or share anything unlawful, harassing, abusive,
                defamatory, vulgar, obscene, indecent, threatening, invasive of
                privacy or rights, or encouraging of illegal conduct. Don&apos;t
                restrict or inhibit other users from using and enjoying
                LearningPost. For example, don&apos;t use it to solicit users to
                join other competing services. LearningPost can deny you access
                to the Services without notice for: <br />
                - Unauthorized access or use <br />
                - Attempting to assign or transfer LearningPost rights granted
                to you <br />
                - Violating these Terms or other policies <br />
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- USING LEARNINGPOST'S SERVICES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Using LearningPost&apos;s Services
              </div>
              <div className="pl-3 text-sm">
                Use LearningPost only for your own personal, non-commercial
                purposes. Don&apos;t use the website, app, services or products
                for any commercial purposes. Here are some specific
                restrictions: <br />
                - Don&apos;t use, copy or share any materials or content in a
                way that violates copyright, trademarks, patents or other
                intellectual property rights of the owner. <br />
                - Don&apos;t upload files containing viruses, malware or other
                harmful programs. <br />
                - Don&apos;t falsify or delete copyright information like author
                names on materials uploaded to our website/app.
                <br />
                - Don&apos;t use bots, scrapers or other automated tools to
                monitor, copy or collect data from our website/app.
                <br />
                - Don&apos;t restrict or stop other users from using and
                enjoying LearningPost&apos;s services or products. <br />
                - Follow any posted rules or codes of conduct for specific
                services or products. <br />
                - Follow all applicable laws and regulations. <br />- Don&apos;t
                share user account information or usage data with others. <br />
                We can review and remove any prohibited content posted by users,
                and suspend accounts if needed.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- INTELLECTUAL PROPERTY -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Intellectual Property
              </div>
              <div className="pl-3 text-sm">
                LearningPost owns all current and future trade secrets, patents,
                copyrights, trademarks, service marks, logos, designs, code,
                text, graphics, and other proprietary rights related to our
                services, website and apps. The website content including code,
                text, graphics, logos, and images is protected by copyright and
                other laws. All software and individual articles or elements
                remain LearningPost&apos;s property, excluding some third party
                materials. Don&apos;t use any trademarks or logos without the
                owner&apos;s written consent. Mention of third party products or
                services does not imply endorsement by LearningPost. You must
                follow all copyright laws and any additional copyright
                restrictions on our website. You acknowledge the content is
                developed and compiled by LearningPost and constitutes our
                intellectual property. You agree to protect LearningPost&apos;s
                proprietary rights during and after using our services. Notify
                us promptly of any unauthorized access or use of our website
                that you become aware of. All rights and title to our website
                and services are reserved by LearningPost for our exclusive use.
                Don&apos;t copy or use our website or content without our
                written approval. Don&apos;t upload or share any
                copyright-protected content on our website without the
                owner&apos;s express permission. You are solely liable for any
                infringement or harm from such submissions. By sharing any
                materials with us, you grant us a royalty-free license to use,
                reproduce, modify, publish, and distribute it worldwide in all
                forms of media now known or later developed. This is for the
                full term of any copyright.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- CHANGED TERMS -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Changed Terms
              </div>
              <div className="pl-3 text-sm">
                LearningPost can modify these Terms at any time. Changes become
                part of this Agreement once posted on our website. For major
                changes, we will notify you by email or pop-up when you log in.
                But you should still review the Terms periodically as the most
                current version is on our website. By continuing to use
                LearningPost, you accept any new or modified Terms.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- TERMINATING YOUR SUBSCRIPTION -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Terminating Your Subscription
              </div>
              <div className="pl-3 text-sm">
                You can cancel your subscription anytime through your account.
                We will then deactivate your account and delete materials you
                uploaded while using our services. Once confirmed, you
                won&apos;t be charged again, except for any prior unpaid billing
                periods. We can terminate your subscription at the end of a
                billing cycle with 14 days notice. We may also terminate
                immediately if: <br />
                - You breach these Terms <br />
                - You don&apos;t pay immediately after due date <br />
                - We&apos;re investigating suspected misconduct by you <br />
                - Your use causes legal liability or disrupts others <br />
                - You use our services for prohibited purposes <br />
                If we limit or terminate services, we&apos;ll try to notify you
                and let you export your content. But for Terms violations or
                illegal acts, we may immediately suspend your account without
                notice. We&apos;ll try to narrowly limit suspensions to resolve
                issues promptly. We may keep your content after termination, but
                have no obligation to do so.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- YOUR ACCOUNT, PASSWORD, AND SECURITY -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Your Account, Password and Security
              </div>
              <div className="pl-3 text-sm">
                When you sign up, give us current, complete and accurate
                information. We endeavor to protect your information, but cannot
                guarantee total security as no system is completely secure. You
                are responsible for any activity under your account. Notify us
                immediately of any unauthorized use. LearningPost is not liable
                for losses from third party access.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- DISCLAIMERS AND NOTICES -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Disclaimers and Notices
              </div>
              <div className="pl-3 text-sm">
                You use LearningPost at your own risk - we make no warranties
                that it will be uninterrupted, timely, secure or error free. We
                also don&apos;t warrant any results obtained from using
                LearningPost. The website and services are provided &quot;as
                is&quot; without warranties of any kind except those required by
                law. The above disclaimers apply to any damages caused by
                performance failures, errors, interruptions, defects, delays,
                viruses or unauthorized access. We try to provide accurate
                information but don&apos;t guarantee it. We are not liable for
                any errors or inaccuracies. Neither we nor third parties make
                any warranties about suitability, reliability, accuracy or
                completeness of information on LearningPost. We may edit or
                remove content at any time. Opinions expressed are not
                necessarily LearningPost&apos;s. We&apos;re not responsible for
                such opinions. We may contact you by SMS, email or calls to
                provide updates, notifications and product information. By
                registering, you agree to receive these periodic messages. We
                may contact you via provided numbers or emails to offer our
                services. You expressly permit us to contact you and any student
                users this way. Our products and services only work with certain
                compatible devices, tablets or hardware. We&apos;re not
                obligated to provide services for incompatible devices, and
                won&apos;t be responsible for defects with devices used to
                access our services. Minors must use LearningPost through their
                legal guardian or parent, who agrees to these Terms. We&apos;re
                not responsible for consequences of minors using LearningPost
                without parental consent. We may terminate a subscription if we
                discover a user is under 18.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- OTHER TERMS -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Other Terms</div>
              <div className="pl-3 text-sm">
                We&apos;re not liable for any failure or delay due to events
                beyond our control like natural disasters, service outages, or
                supplier failures. Notify us within 7 days if you&apos;re
                affected. Third-party links may take you outside our website.
                We&apos;re not responsible for those third-party sites. These
                Terms are governed by Nigerian law. You agree to defend and
                indemnify LearningPost against claims and expenses from your use
                of our services. References to companies and events are
                fictional. No association is intended or should be inferred.
                These Terms and our Privacy Policy are the entire agreement
                between you and LearningPost.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- USING AKADA -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Using Akada</div>
              <div className="pl-3 text-sm">
                Akada is LearningPost&apos;s AI-powered chatbot tutor. It uses
                artificial intelligence to try to provide helpful educational
                information. While we aim for accuracy, Akada&apos;s responses
                are generated by machines and may sometimes be incomplete or
                outdated. You need to verify any information and use your own
                judgment. <br />
                {/* <!-- YOUR RESPONSIBILITIES --> */}
                <span className="font-medium">- Your Responsibilities</span>
                <div className="pl-2">
                  You are fully responsible for how you use Akada. Don&apos;t
                  engage in any activity that could harm or disrupt the chatbot.
                  This includes spreading malware, hacking, or breaking laws.
                </div>
                {/* <!-- NO GUARANTEE OF RESULTS --> */}
                <span className="font-medium">- No Guarantee of Results</span>
                <div className="pl-2">
                  Akada aims to be informative but cannot guarantee any
                  particular outcomes from using it. Its suggestions are based
                  on general knowledge, not your specific circumstances. For
                  personal academic needs, seek professional assistance.
                </div>
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- CONTENT OWNERSHIP -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Content Ownership
              </div>
              <div className="pl-3 text-sm">
                All LearningPost content including text, images, videos and
                other materials belongs to LearningPost or its licensors.
                Don&apos;t copy, modify or distribute any content without
                written permission.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- PRIVACY AND DATA -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Privacy and Data
              </div>
              <div className="pl-3 text-sm">
                We respect your privacy and handle data as per privacy laws and
                regulations. Using LearningPost means you consent to us
                collecting, processing and storing your personal information as
                outlined in our Privacy Notice.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- INDEMNITY -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Indemnity</div>
              <div className="pl-3 text-sm">
                You agree to defend, indemnify and hold LearningPost harmless
                from any claims or losses arising from your use of LearningPost,
                including violations of these Terms.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- LIMITATIONS OF LIABILITY -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">
                - Limitation of Liability
              </div>
              <div className="pl-3 text-sm">
                LearningPost is not liable for any damages arising from your
                inability to use LearningPost. Our liability is limited to the
                maximum extent under law.
              </div>
            </div>

            {/* <!-- ========================================================================== -->
    <!-- CONTACT US -->
    <!-- ========================================================================== --> */}
            <div className="w-full pl-3">
              <div className="text-md font-bold text-black">- Contact Us</div>
              <div className="pl-3 text-sm">
                Email{" "}
                <Link
                  href={"mailto:info@learningpost.ng"}
                  className="text-blue-600 hover:underline"
                >
                  info@learningpost.ng
                </Link>{" "}
                if you have any questions about LearningPost or our privacy
                practices.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
