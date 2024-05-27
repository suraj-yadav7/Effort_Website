import React from "react"
import './home.scss'
import buildworkflow from '../assets/Build-Complex-Workflows.png'
import googlePlaystore from '../assets/google_play.png'
import applePlaystore from '../assets/apple_store.png'
import Expert from "../assets/Expert.png"
import Workflow from "../assets/Workflow.png"
import Process from "../assets/Process.png"
import Customizable from "../assets/Customizable.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import logo1 from "../assets/BDO.png"
import logo2 from "../assets/Bio-me.png"
import logo3 from "../assets/Wellness.png"
import logo4 from "../assets/Midmark.png"
import logo5 from "../assets/AMW.png"
import logo6 from "../assets/The-Waterbase.png"
import logo7 from "../assets/True-money.png"
import logo8 from "../assets/Bluestone.png"
import logo9 from "../assets/Exome.png"
import logo10 from "../assets/Ezone.png"
import logo11 from "../assets/LG-Limra.png"
import logo12 from "../assets/Modenik.png"
import logo13 from "../assets/SeedWorks.png"
import logo14 from "../assets/Sree-seeds.png"
import effortIntegration from "../assets/EffortIntegrations.png"
const Home =()=>{
    return (
        <>  
        <div className="homeContainer">
        <div className="mt-14 md:mt-8 sm:mt-2">
            <section className="firstSection h-96 px-32 sm:px-6 ">
                <div className="flex  justify-between items-center ">
                    <div className="f1LeftContainer w-1/2 ">
                        <div className="flex flex-col gap-3  w-100 text-left md:gap-1">
                            <h3 className="text-2xl font-bold py-1 sm:text-lg">Build Complex Workflows Easily with EFFORT, A No-Code Platform</h3>
                            <h5 className="font-normal py-1 text-lg sm:text-base">EFFORT helps manage mobile frontline workforce, workflows, and business processes (BPM) for growing businesses and organizations with location-sensitive and time-critical activities</h5>
                            <div className="button py-4 sm:py-1 md:py-2">
                                <button className="mr-4 p-3 px-5 bg-[#3385fd] text-white hover:bg-white hover:text-[#3385fd] sm:mr-1 sm:p-1 sm:px-2 sm:my-2 md:my-2">Try It Free</button>
                                <button className="mx-2 p-3 px-7 bg-[#3385fd] text-white hover:bg-white hover:text-[#3385fd] sm:mr-1 sm:p-1 sm:px-2">Request Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="f1RightContainer pr-10 sm:p-2">
                        <img className="h-60 w-full sm:h-40 md:h-52" src={buildworkflow} />
                    </div>
      
                </div>
                <div className="f1BottomContainer flex justify-center items-center mt-6 py-2 gap-3 sm:mt-0 sm:gap-1 md:mt-1 md:pb-10">
                    <h3 className="text-lg font-bold pl-4 sm:text-base">Download the App on</h3>
                    <img className="hover:cursor-pointer" src={googlePlaystore} />
                    <img className="hover:cursor-pointer" src={applePlaystore} />
                </div>
            </section>
            <section className="secondSection py-8 px-32 sm:px-6 ">
                <div className=" s2SubContainer text-white ">
                    <h3 className="text-2xl font-bold text-center py-4 sm:text-xl">Why Effort?</h3>
                    <p className="text-base py-2 text-center">EFFORT, by <span className="text-orange-500 underline">Spoors</span> helps growing business manage Customer Acquisition, Servicing, and Operations challenges with its flexible and easy to use configurable no-code and DIY(Do It Yourself) platform. It is being used by 150+ customers across 10 countries with over 50000 users. Each day over 2 million plus activities are performed on the platform. It has ensured at least a 30% improvement in workforce productivity and operational efficiencies.</p>
                    <div className="industry-list flex justify-evenly items-center py-2">
                        <div className="industry">
                            <img src={Workflow}/>
                            <h4>Industry-Specific Workflow </h4>
                        </div  >
                        <div className="industry">
                            <img src={Customizable}/>
                            <h4>Highly Customizable</h4>
                        </div>
                        <div className="industry">
                            <img src={Expert}/>
                            <h4>Expert Built</h4>
                        </div>
                        <div className="industry">
                            <img src={Process} />
                            <h4>Process-Centric</h4>
                        </div>
                    </div>
                    <div className="detailBtn py-6 pt-10">
                        <button className="mr-4 p-3 px-5 bg-[#3385fd] text-white hover:bg-white hover:text-[#3385fd] sm:mr-1 sm:p-1 sm:px-2"> View Detailed Features List</button>
                    </div>
                </div>
            </section>
            <section className="thirdSection">
                <div>
                    
                    <div className="carouselContainer px-32 pt-4 pb-4 sm:px-6">
                    <div className="text-center p">
                        <h3 className="font-semibold text-3xl py-6 sm:text-xl">Our Clients</h3>
                    </div>
                    <Carousel 
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}>
                        <div className="logo-grid p-10">
                            <img  src={logo1} alt="Company 1" />
                            <img src={logo2} alt="Company 2" />
                            <img src={logo3} alt="Company 3" />
                            <img src={logo4} alt="Company 4" />
                            <img src={logo5} alt="Company 5" />
                            <img src={logo6} alt="Company 6" />
                            <img src={logo7} alt="Company 7" />
                            <img src={logo8} alt="Company 8" />
                            <img src={logo9} alt="Company 9" />
                            <img src={logo10} alt="Company 10" />
                            <img src={logo11} alt="Company 11" />
                            <img src={logo12} alt="Company 12" />
                            <img src={logo13} alt="Company 13" />
                            <img src={logo14} alt="Company 14" />
                            <img src={logo6} alt="Company 15" />
                            <img src={logo4} alt="Company 16" />
                            <img src={logo1} alt="Company 17" />
                            <img src={logo3} alt="Company 18" />
                        </div>
                        <div className="logo-grid p-10">
                            <img src={logo11} alt="Company 19" />
                            <img src={logo9} alt="Company 20" />
                            <img src={logo5} alt="Company 21" />
                            <img src={logo6} alt="Company 22" />
                            <img src={logo1} alt="Company 23" />
                            <img src={logo13} alt="Company 24" />
                            <img src={logo7} alt="Company 25" />
                            <img src={logo3} alt="Company 26" />
                            <img src={logo12} alt="Company 27" />
                            <img src={logo2} alt="Company 28" />
                            <img src={logo4} alt="Company 29" />
                            <img src={logo14} alt="Company 30" />
                            <img src={logo9} alt="Company 31" />
                            <img src={logo4} alt="Company 32" />
                            <img src={logo7} alt="Company 33" />
                            <img src={logo8} alt="Company 34" />
                            <img src={logo10} alt="Company 35" />
                            <img src={logo9} alt="Company 36" />
                        </div>
                    </Carousel>
                    </div>
                </div>
            </section>
            <section className="forthSection mt-10 py-8 px-32 sm:px-6">
                    <div className="s4SubContainer flex justify-center items-center">
                        <div className="w-1/2">
                        <div className="flex flex-col gap-3  w-100 text-left sm:gap-1">
                            <h3 className="text-4xl font-bold py-4 sm:text-xl">EFFORT Integrations</h3>
                            <p className="text-lg font-medium py-2 text-base">
                            Effort is integrated with over 14+ popular software, stremlining your workflow for enhanced productivity and convenience.
                            </p>
                            <div className="py-2">
                                <button className="mr-6 p-3 px-6 bg-[#3385fd] text-white hover:bg-white hover:text-[#3385fd] sm:mr-1 sm:p-1 sm:px-2 sm:my-2">Request Demo</button>
                                <button className="mr-4 p-3 px-5 bg-[#3385fd] text-white hover:bg-white hover:text-[#3385fd] sm:mr-1 sm:p-1 sm:px-2">Know More</button>
                            </div>
                        </div>
                        </div>
                        <div>
                        <img className="h-[32rem] w-full sm:h-[16rem]" src={effortIntegration} />
                        </div>
                    </div>
            </section>
            <section className="fifthSection py-8 px-32 bg-[#001f44] sm:px-6 sm:py-2">
                <div className="flex justify-center items-center flex-col text-white">
                    <div className="pb-2"><h3 className="text-3xl font-bold py-4 sm:text-xl">Jump Into Action</h3></div>
                    <div className="flex flex-col border  border-dotted ">
                        <div className="flex  gap-6  border-b border-dotted sm:gap-2">
                            <div className="text-center p-10 sm:p-4">
                                <p className="text-lg text-gray-500 sm:text-base">Configure</p>
                                <h4 className="text-3xl font-semibold sm:text-xl">60+</h4>    
                                <p className="text-lg text-gray-500 sm:text-base">Workflows</p>
                            </div>
                            <div className="text-center p-10 sm:p-4">
                                <p className="text-lg text-gray-500 sm:text-base" >Daily</p>
                                <h4 className="text-3xl font-semibold sm:text-xl">2 Mn+</h4>    
                                <p className="text-lg text-gray-500 sm:text-base">Activites</p>
                            </div>
                            <div className="text-center p-10 sm:p-4">
                                <p className="text-lg text-gray-500 sm:text-base">Completed</p>
                                <h4 className="text-3xl font-semibold sm:text-xl">1 Mn+</h4>    
                                <p className="text-lg text-gray-500 sm:text-base">Completed</p>
                                <p className="text-lg text-gray-500 ">Works</p>
                            </div>
                        </div>
                        <div className="flex gap-9 sm:gap-2">
                            <div className="text-center p-10 sm:p-4">
                                <p className="text-lg text-gray-500 sm:text-base">Acitve</p>
                                <h4 className="text-3xl font-semibold sm:text-xl">50 K+</h4>    
                                <p className="text-lg text-gray-500 sm:text-base">Workforce</p>
                            </div>
                            <div className="text-center p-12 sm:p-4">
                                <p className="text-lg text-gray-500 sm:text-base">Used  </p>
                                <h4 className="text-3xl font-semibold sm:text-xl">10 + </h4>    
                                <p className="text-lg text-gray-500 sm:text-base">Vertical</p>
                            </div>
                            <div className="text-center p-10 sm:p-4 ">
                                <p className="text-lg text-gray-500 sm:text-base">Around</p>
                                <h4 className="text-3xl font-semibold sm:text-xl">10 +</h4>    
                                <p className="text-lg text-gray-500 sm:text-base">Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        </>
    )
};

export default Home;