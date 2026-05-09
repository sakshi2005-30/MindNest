import React from 'react'
import {BrainCircuit} from "lucide-react"
import { Link,useNavigate } from 'react-router-dom';
import { Folder, Search, Link as LinkIcon } from "lucide-react";
import { useState } from 'react';
import AuthModal from './AuthModal';

const LandingPage = () => {
  const navigate=useNavigate();
  const [authType,setAuthType]=useState(null);
  return (
    <div>
      {/* navbar */}
      <div className="w-full fixed top-0 left-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 ">
          <div className="flex gap-1 text-2xl text-gray-800 font-medium ">
            <p>MindNest</p>
            <BrainCircuit className="size-8" />
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setAuthType("login")}
              className="text-gray-600 hover:text-black transition cursor-pointer"
            >
              Login
            </button>

            <button
              onClick={() => setAuthType("signup")}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      {/* Hero section */}
      <div className="">
        <div className="min-h-screen flex items-center justify-center  pt-20">
          <div className="text-center max-w-2xl px-6">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build Your Second Brain
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-600">
              Capture ideas, save content, and organize everything in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setAuthType("signup")}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Get Started
              </button>

              <button
                onClick={() => setAuthType("login")}
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* tagline */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
            Expand your mind without losing thoughts
          </h2>
        </div>
      </div>
      {/* features */}
      <div>
        <div className="w-full py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            {/* Top Row (icons + titles) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <Folder className="size-10 text-black mb-3" />
                <h3 className="text-xl font-semibold">Organize</h3>
                <p className="text-gray-600 mt-2">
                  Save content and keep everything structured in one place.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <Search className="size-10 text-black mb-3" />
                <h3 className="text-xl font-semibold">Discover</h3>
                <p className="text-gray-600 mt-2">
                  Quickly search and find ideas when you need them.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <LinkIcon className="size-10 text-black mb-3" />
                <h3 className="text-xl font-semibold">Connect</h3>
                <p className="text-gray-600 mt-2">
                  Link ideas together and build your knowledge network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <footer className="w-full border-t border-gray-200 bg-white py-6">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} MindNest | All rights reserved
          </div>
        </footer>
      </div>
      {authType && (
        <AuthModal
          type={authType}
          onClose={() => setAuthType(null)}
          setAuthType={setAuthType}
        />
      )}
    </div>
  );
}

export default LandingPage