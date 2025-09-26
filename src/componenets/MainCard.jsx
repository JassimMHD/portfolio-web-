import React from "react";
import { FaArrowUp } from "react-icons/fa";
import AnalogClock from "./AnalogClock";
import Clock from "./TestClock";

function MainCard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-10">
      <header className="sticky top-0 bg-white  z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-full border-none"
              src="./assets/images/jassim.png"
            />
            <h1 className="text-xl font-bold text-gray-600">Mohamed Jassim</h1>
          </div>
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
        <hr />
      </header>

      <main className="flex-1 p-6 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-dvh">
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                <div className="flex justify-between ">
                  <p>Time</p>
                  <p className="text-fuchsia-400">Srilanka</p>
                </div>
                <hr />
                {/* <AnalogClock />  */}
                {/* <Clock /> */}
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition grid">
                <div>
                  <div className="flex justify-between">
                    <p>Mode</p>
                    <img
                      className="w-5 h-5 "
                      src="https://img.icons8.com/?size=100&id=99790&format=png&color=FAB005"
                      alt=""
                    />
                  </div>

                  <hr />
                </div>

                <div>
                  <p>Out of office. Chasing waves and soaking up sunrays 🌊</p>
                </div>
                <div>
                  <button className="flex w-full justify-between border rounded-full p-2 cursor-pointer">
                    <p>Contact Me</p>
                    <p>
                      <FaArrowUp />
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-12 hover:shadow-md transition grid gap-2">
              <div>
                <p>Projects</p>
                <hr />
              </div>

              <div className="w-full bg-emerald-500 rounded-xl">01</div>
              <div className="w-full bg-emerald-500 rounded-xl">02</div>
              <div className="w-full bg-emerald-500 rounded-xl">03</div>
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
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition grid">
              <div>
                <div className="flex justify-between">
                  <p>About</p>
                  <p className="text-fuchsia-400">Jassim</p>
                </div>

                <hr />
              </div>

              <p>
                Hello. I'm Isabella Clarke, a visionary Brand Founder hailing
                from the dynamic city of London. With a deep understanding of
                the power of branding, I am dedicated to creating compelling
                brand experiences that resonate with audiences and drive
                meaningful connections. Let's embark on a transformative journey
                together.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <div>
                <p>Get in touch</p>
                <hr />
                <br />
                <div className="flex  cursor-pointer gap-3 w-full ">
                  <img
                    src="./assets/images/twitter.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <img
                    src="./assets/images/facebook.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <img
                    src="./assets/images/linkedin.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <img
                    src="./assets/images/google.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition cursor-pointer grid gap-2">
              <div className="flex justify-between">
                <p>Latest Products</p>
                <p>Explore</p>
              </div>
              <hr />
              <img
                src="./assets/images/perfume.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="grid gap-6 aspect-6/12]">
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition overflow-y-scroll">
              <div>
                <p>Experience & Education</p>
                <hr />
              </div>
              <div className="flex flex-wrap justify-between p-5">
                <div className="aspect-[1/3]">
                  <div className="flex gap-2 flex-wrap">
                    <div>2022</div>
                    <div>----</div>
                    <div>Now</div>
                  </div>
                </div>
                <div className="aspect-[2/3]">
                  <div>
                    <div>
                      <b>Creative Studio Owner</b>
                    </div>
                    <div>fyhjncuovsxssxneneje nevk</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition ">
              <p>Side Projects</p>
              <hr />
            </div>
            <div className="grid grid-cols-2 gap-4 ">
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
    </div>
  );
}

export default MainCard;
