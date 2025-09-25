import React from "react";

function MainCard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Mohamed Jassim</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-dvh">
          
          



          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition flex justify-between ">
                <p>Time</p>
                <p>Srilanka</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                2
                <hr />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-12 hover:shadow-md transition">
              <p>Projects</p>
              <hr />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                <p>Newsletter</p>
                <hr />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                4
              </div>
            </div>
          </div>




          <div className="grid gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <p>About</p>
              <hr />
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              Get in touch
              <hr />
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <p>Latest Products</p>
              <hr />
            </div>
          </div>




          <div className="grid gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <p>Experience & Education</p>
              <hr />
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <p>Side Projects</p>
              <hr />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                <p>Days until next launch</p>
                <hr />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                <p>CV</p>
                <hr />
              </div>
            </div>
          </div>


          
        </div>
      </main>

      <footer className="bg-white border-t py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MainCard;
