"use client";

import {
  githubProfile,
  iconImg,
  instagramProfile,
  linkedinProfile,
} from "@/consts";
import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const resetFormState = () => {
    setSubmitted(false);
    setHasError(false);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      message: message,
    };

    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
        Accept: "application/json;",
      },
      body: JSON.stringify(data),
    });
    const { success, err } = await res.json();

    if (err) {
      setHasError(true);
      setLoading(false);
    }
    if (success) {
      setLoading(false);
      setSubmitted(true);
      setHasError(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const errorStyle =
    "bg-red-600 shadow-red-600 hover:bg-red-400 hover:shadow-red-400";
  const successStyle =
    "bg-green-600 shadow-green-600 hover:bg-green-400 hover:shadow-green-400";
  const normalStyle =
    "bg-cyan-600 shadow-cyan-600 hover:bg-cyan-400 hover:shadow-cyan-400";

  return (
    <div className="common__container_class h-[100em]" ref={ref}>
      <Transition.Root
        show={inView}
        enter="transition-all ease-in-out duration-200"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-6"
        className="w-full flex flex-col py-44 lg:space-y-24 space-y-12 lg:px-32 justify-start items-center"
      >
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="lg:text-[5em] text-[3em] text-center font-semibold">
            Contact Me!
          </h1>
          <span className="font-semibold text-center ">
            Get in touch with me via social media or email.
          </span>
          <div
            className="rounded-full w-[20em] h-[20em]"
            style={{
              backgroundImage: `url(${iconImg})`,
              backgroundSize: "20em",
            }}
          />
        </div>
        <div className="w-full flex flex-col lg:items-start items-center space-y-4">
          <div className="text-4xl font-semibold">Send me an Email</div>
          <form className="relative w-full flex flex-col lg:items-start items-center gap-4">
            <div className="w-full flex lg:flex-row flex-col lg:items-start items-center gap-4">
              <div className="lg:w-[40em] w-full flex flex-col space-y-4">
                <div className="flex flex-col w-full space-y-2">
                  <label htmlFor="name" className="text-2xl">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    disabled={loading}
                    onChange={(e) => {
                      resetFormState();
                      setName(e.target.value);
                    }}
                    className="w-full h-[2.5em] rounded-md text-black p-2"
                  />
                </div>
                <div className="flex flex-col w-full space-y-2">
                  <label htmlFor="email" className="text-2xl">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    disabled={loading}
                    onChange={(e) => {
                      resetFormState();
                      setEmail(e.target.value);
                    }}
                    className="w-full h-[2.5em] rounded-md text-black p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="message" className="text-2xl">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={message}
                  disabled={loading}
                  onChange={(e) => {
                    resetFormState();
                    setMessage(e.target.value);
                  }}
                  className="rounded-md w-full h-full text-black p-2"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={
                "flex justify-center items-center px-4 py-2 text-center text-xl font-semibold rounded-xl transition duration-100 shadow-md " +
                (!submitted && !loading && !hasError
                  ? normalStyle
                  : !submitted && loading && !hasError
                  ? normalStyle
                  : submitted && !loading
                  ? successStyle
                  : errorStyle)
              }
              onClick={(e) => handleSubmit(e)}
            >
              {!submitted && !loading && !hasError
                ? " Send Email"
                : !submitted && loading && !hasError
                ? "Loading..."
                : submitted && !loading
                ? "Sent!"
                : "Error! Please insert your name and email address!"}
            </button>
          </form>
          <div className="relative flex flex-col space-y-12 justify-center items-center place-self-center py-12">
            <div className="text-4xl font-semibold">Social Media</div>
            <div className="flex flex-row space-x-8 justify-center items-center">
              <Link
                className="font-semibold text-center lg:text-2xl text-xl hover:text-cyan-300 hover:shadow-lg shadow-cyan-300"
                href={instagramProfile}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-transparent bg-clip-text bg-gradient-to-bl"
                />
                <span className="ml-2">Instagram</span>
              </Link>
              <Link
                className="font-semibold text-center lg:text-2xl text-xl hover:text-cyan-300 hover:shadow-lg shadow-cyan-300"
                href={linkedinProfile}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="ml-2">LinkedIn</span>
              </Link>
              <Link
                className="font-semibold text-center lg:text-2xl text-xl hover:text-cyan-300 hover:shadow-lg shadow-cyan-300"
                href={githubProfile}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="ml-2">GitHub</span>
              </Link>
            </div>
            <div className="font-semibold">© 2023 Louis Lei</div>
          </div>
        </div>
      </Transition.Root>
    </div>
  );
}
