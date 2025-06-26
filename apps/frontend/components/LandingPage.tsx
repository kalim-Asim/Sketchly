import React from 'react';
import { ArrowRight, Infinity, Users, Zap, Github, Twitter, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import pic from "@/public/preveiw.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">
                Sketchly
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="signin" >
              <button className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-800">
                Sign In
              </button>
              </Link>
              <Link href="/signup">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors">
                Sign Up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Collaborate in
              <span className="text-blue-400"> Real-Time</span>
              <br />
              on an Infinite Canvas
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience seamless collaboration with your team on our infinite
              digital whiteboard. Draw, plan, and create together in
              real-time.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 text-lg rounded-md transition-colors flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-8 py-3 text-lg rounded-md transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Preview Image */}
            <div className="mt-16 rounded-lg overflow-hidden shadow-2xl border">
              <Image
                src={pic}
                alt="PlayGrounds Interface"
                className="w-full object-cover"
                width={1000}
                height={800}
              />
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Modern Teams
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to collaborate effectively, all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-400">
                Work together with your team in real-time. See changes
                instantly as they happen.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Infinity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Infinite Canvas
              </h3>
              <p className="text-gray-400">
                Never run out of space. Our infinite canvas grows with your
                ideas.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Lightning Fast
              </h3>
              <p className="text-gray-400">
                Experience smooth performance with our optimized real-time
                sync engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of teams already collaborating on PlayGrounds.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 text-lg rounded-md transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500">
              © 2025 Sketchly. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="Terms" className="text-gray-500 hover:text-blue-400 transition-colors">
                Terms
              </a>
              <a href="Privacy" className="text-gray-500 hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="Contact" className="text-gray-500 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/kalim-Asim/Sketchly" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/asim-kalim-b4114b167" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:asim1306iiit@gmail.com" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;