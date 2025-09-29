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
            <div className="grid grid-cols-2 gap-4 max-h-[250px]">
              <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                <div className="flex justify-between ">
                  <p>Time</p>
                  <p className="text-gray-400">Srilanka</p>
                </div>
                <hr />
                {/* <AnalogClock />  */}
                {/* <Clock /> */}
              </div>
              <div className="bg-white rounded-2xl shadow-sm pt-6 pr-6 pl-6 pb-0 hover:shadow-md transition grid">
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
            <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition grid gap-2">
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
                  <p className="text-gray-400">Jassim</p>
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
            <div className="bg-white rounded-2xl shadow-sm  hover:shadow-md transition cursor-pointer relative overflow-hidden ">
              <div className="absolute top-0 left-0 w-full flex justify-between p-4 z-10 text-white font-semibold">
                <p>Latest Products</p>
                <p className="cursor-pointer">Explore</p>
              </div>
              <img
                src="./assets/images/perfume.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="grid gap-2 ">
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition overflow-y-auto max-h-[380px]">
              <div>
                <p>Experience & Education</p>
              </div>

              {/* one start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2022</div>
                    <div>-</div>
                    <div>Now</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Creative Studio Owner</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Commodi, unde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* two start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2020</div>
                    <div>-</div>
                    <div>2022</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Nike</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Designer & Creative Director kksjdks
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* three start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2018</div>
                    <div>-</div>
                    <div>2020</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Spotify</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Designer & Art Director makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* four start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2016</div>
                    <div>-</div>
                    <div>2018</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Apple</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Product designer knwkw makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* five start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2016</div>
                    <div>-</div>
                    <div>2018</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Apple</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Product designer knwkw makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* six start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2016</div>
                    <div>-</div>
                    <div>2018</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Apple</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Product designer knwkw makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* side Project */}
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition overflow-auto max-h-[250px]">
              <div>
                <p>Side Projects</p>
              </div>

              {/* one start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2018</div>
                    <div>-</div>
                    <div>2020</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Spotify</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Designer & Art Director makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/* two start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2018</div>
                    <div>-</div>
                    <div>2020</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Spotify</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Designer & Art Director makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>


               {/* three start */}
              <hr className="text-gray-400" />
              <div className="flex flex-1 justify-between p-4">
                <div>
                  <div className="flex gap-2 flex-row pr-2 text-gray-400">
                    <div>2018</div>
                    <div>-</div>
                    <div>2020</div>
                  </div>
                </div>
                <div>
                  <div className="pl-2">
                    <div>
                      <b>Spotify</b>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Designer & Art Director makdk
                      </p>
                    </div>
                  </div>
                </div>
              </div>






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
