"use client";

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProfiles, saveProfile } from "./util";

export default function Home() {
  const { user, loading, signOut } = useAuth();
  const [message, setMessage] = useState("");
  const [profiles, setProfiles] = useState<{ memo: string }>();
  useEffect(() => {
    getProfiles().then((profiles) => {
      setProfiles(profiles[0]);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-white/20 border-t-white mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="mt-6 text-white/80 text-lg font-medium">
            Loading your experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">MyApp</span>
          </div>
          {user && (
            <button onClick={() => signOut()} className="btn-secondary text-sm">
              Sign Out
            </button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={36}
                  height={12}
                  priority
                  className="filter brightness-0 invert"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {user ? `Welcome back!` : `Welcome to MyApp`}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {user
                  ? `Hello ${
                      user.email?.split("@")[0]
                    }! You're successfully signed in and ready to explore.`
                  : `A beautiful, modern authentication system built with Next.js and Supabase. Sign in or create an account to get started.`}
              </p>
            </div>

            {/* Auth Status Card */}
            <div className="glass-card max-w-md mx-auto p-8 mb-12">
              {user ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Authenticated
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      You&apos;re successfully signed in
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg font-mono">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Sign Out
                  </button>

                  <div className="flex items-center gap-4 pt-4">
                    <input
                      id="message"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="input-field"
                      placeholder="message"
                    />
                    <button
                      onClick={async () => {
                        await saveProfile(message);

                        getProfiles().then((profiles) => {
                          setProfiles(profiles[0]);
                        });
                      }}
                      className="w-24 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      Send
                    </button>
                  </div>
                  <div className="flex text-[white]">
                    <div>memo: {profiles?.memo}</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Get Started
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Sign in or create an account to continue
                    </p>
                  </div>
                  <Link
                    href="/auth"
                    className="btn-primary w-full py-3 text-base font-semibold inline-block"
                  >
                    Sign In / Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
