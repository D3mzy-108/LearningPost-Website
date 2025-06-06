"use client";
import LoadingComponent from "@/components/LoadingComponent";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function DeleteAccount({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function submitDeleteAccountRequest(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    try {
      setIsLoading(true);

      // LOAD FORM DATA
      const formData = new FormData(e.target as HTMLFormElement);
      const req_body = {
        email: formData.get("email")?.toString().trim(),
        user_display_name: formData.get("user_display_name")?.toString().trim(),
        reason: formData.get("reason")?.toString().trim(),
      };

      // SEND POST REQUEST TO API
      const response = await fetch(
        "https://api.learningpost.ng/api/delete-account/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req_body),
        }
      );

      // GET RESPONSE FROM API
      const data = await response.json();
      setIsLoading(false);

      if (data.success) {
        router.push("/");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMessage("Connection Error");
    }
  }

  return (
    <>
      <div className="fixed bottom-4 left-0 w-full z-100">
        {errorMessage == "" ? null : (
          <div className="w-full max-w-lg bg-red-200 shadow rounded-xl mx-auto p-4 text-center">
            <span className="text-red-700">{errorMessage}</span>
          </div>
        )}
      </div>
      {isLoading ? (
        <div className="w-screen h-screen bg-white/40 fixed z-110 grid place-items-center">
          <LoadingComponent />
        </div>
      ) : null}
      <div
        className="w-full min-h-screen grid place-items-center p-6 py-[20vh]"
        style={{
          background: "linear-gradient(white, #FFFFFF60 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full max-w-xl rounded-xl bg-white/30 p-6">
          <form
            onSubmit={(e) => {
              submitDeleteAccountRequest(e);
            }}
            method="post"
            className="flex flex-col gap-6"
          >
            {/* CONFIRM ACCOUNT INFO SECTION */}
            <section className="w-full">
              <legend className="text-xl font-bold text-black/80">
                Confirm Your Account Details
              </legend>
              <div className="mt-6">
                <label htmlFor="email" className="text-black/80 text-md">
                  Registered Email Address:
                  <br />
                  <span className="text-sm text-black/60">
                    {`To verify your account, please enter the email address you used to register.`}
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border rounded-md mt-3"
                  required
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="user_display_name"
                  className="text-black/80 text-md"
                >
                  Username:
                  <br />
                  <span className="text-sm text-black/60">
                    {`Please provide your username exactly as it appears within the app (e.g., "JohnDoe123").`}
                  </span>
                </label>
                <input
                  type="text"
                  name="user_display_name"
                  id="user_display_name"
                  className="w-full p-2 border rounded-md mt-3"
                  required
                />
              </div>
            </section>

            <div className="w-full bg-gray-300 h-px my-4"></div>

            {/* REASON FOR LEAVING SECTION */}
            <section className="w-full">
              <div className="">
                <label htmlFor="reason" className="text-black/80 text-md">
                  {`Tell Us Why You're Leaving`}
                  <br />
                  <span className="text-sm text-black/60">
                    {`We're sorry to see you go! Please tell us why you've decided to delete your account. Your feedback helps us improve.`}
                  </span>
                </label>
                <input
                  type="text"
                  name="reason"
                  id="reason"
                  className="w-full p-2 border rounded-md mt-3"
                  required
                />
              </div>
            </section>

            <div className="w-full text-center mt-6">
              <button
                type="submit"
                className="w-fit py-3 px-8 rounded-lg bg-red-600/20 text-red-600 font-medium hover:shadow-md duration-200"
              >
                Delete my account now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
