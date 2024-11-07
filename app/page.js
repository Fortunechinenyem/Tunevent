"use client";

import { Hero } from "@/public/images";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Hero.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Discover and Manage Events Effortlessly
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in delay-200">
            Join us in bringing communities together with seamless event
            management, RSVP, and ticketing services.
          </p>
          <Link
            href="/calendar"
            className="inline-block bg-white text-[#60752f] font-semibold px-6 py-3 rounded-lg transition transform duration-300 hover:bg-yellow-400 hover:scale-105"
          >
            Explore Events
          </Link>
        </div>

        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 1.5s ease forwards;
          }
          .animate-fade-in.delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Features
          </motion.h2>
          <motion.div
            className="grid gap-10 md:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {[
              "Easy Event Creation",
              "RSVP & Ticketing",
              "Calendar Integration",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {feature}
                </h3>
                <p className="text-gray-700">
                  {feature === "Easy Event Creation"
                    ? "Create and manage events with ease, using our powerful admin tools."
                    : feature === "RSVP & Ticketing"
                    ? "Enable attendees to RSVP and purchase tickets directly through the platform."
                    : "See all events on an integrated calendar, making scheduling easier for everyone."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Upcoming Events
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                Tech Meetup 2024
              </h3>
              <p className="text-gray-600 mb-4">
                December 15, 2024 | Online Event
              </p>
              <p className="text-gray-700 mb-6">
                Join us for a virtual gathering of tech enthusiasts from around
                the world.
              </p>
              <Link
                href="/event/1"
                className="inline-block bg-[#60752f] text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-400"
              >
                View Details
              </Link>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                Tech Meetup 2024
              </h3>
              <p className="text-gray-600 mb-4">
                December 15, 2024 | Online Event
              </p>
              <p className="text-gray-700 mb-6">
                Join us for a virtual gathering of tech enthusiasts from around
                the world.
              </p>
              <Link
                href="/event/1"
                className="inline-block bg-[#60752f] text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-400"
              >
                View Details
              </Link>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                Tech Meetup 2024
              </h3>
              <p className="text-gray-600 mb-4">
                December 15, 2024 | Online Event
              </p>
              <p className="text-gray-700 mb-6">
                Join us for a virtual gathering of tech enthusiasts from around
                the world.
              </p>
              <Link
                href="/event/1"
                className="inline-block bg-[#60752f] text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-400"
              >
                View Details
              </Link>
            </motion.div>
          </div>
          <div className="mt-10">
            <Link href="/calendar" legacyBehavior>
              <motion.a
                className="inline-block bg-[#60752f] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Events
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ready to Host or Join an Event?
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Sign up today to create your own events or RSVP to existing ones.
          </motion.p>
          <div className="space-x-4">
            <Link href="/signup" legacyBehavior>
              <motion.a
                className="inline-block bg-[#60752f] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </Link>
            <Link href="/login" legacyBehavior>
              <motion.a
                className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log In
              </motion.a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
