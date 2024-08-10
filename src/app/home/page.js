import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Disaster Management Dashboard</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/emergency-services" className="hover:underline">
              Emergency Services
            </Link>
            <Link href="/news" className="hover:underline">
              News
            </Link>
            <Link href="/volunteers" className="hover:underline">
              Volunteers
            </Link>
            <Link href="/guide" className="hover:underline">
              Guide
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-semibold text-gray-500">
            Welcome to the Disaster Management Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            "Preparedness is the only way we can combat a natural disaster."
          </p>
        </section>

        {/* Navigation Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/news"
            className="bg-blue-500 p-6 rounded-lg shadow-md text-center hover:bg-gray-100"
          >
            <h2 className="text-xl font-medium">Latest News</h2>
            <p className="mt-2 text-gray-600">
              Stay updated with the latest disaster news.
            </p>
          </Link>

          <Link
            href="/emergency-services"
            className="bg-green-500 p-6 rounded-lg shadow-md text-center hover:bg-gray-100"
          >
            <h2 className="text-xl font-medium">Emergency Services</h2>
            <p className="mt-2 text-gray-600">
              Find and access emergency services quickly.
            </p>
          </Link>

          <Link
            href="/volunteers"
            className="bg-yellow-500 p-6 rounded-lg shadow-md text-center hover:bg-gray-100"
          >
            <h2 className="text-xl font-medium">Volunteers</h2>
            <p className="mt-2 text-gray-600">
              Join or find volunteer efforts.
            </p>
          </Link>

          <Link
            href="/guide"
            className="bg-red-500 p-6 rounded-lg shadow-md text-center hover:bg-gray-100"
          >
            <h2 className="text-xl font-medium">Guide</h2>
            <p className="mt-2 text-gray-600">
              Access guides and resources for disaster management.
            </p>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Disaster Management Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
