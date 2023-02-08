import React from "react";

function Hero() {
  return (
    <div className="hero-section ">
      <div className="hero my-10 xl:my-0 xl:h-120 ">
        <div className="hero-content text-center lg:text-left flex-col   lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/jrLss7X/Code-typing-bro-1.png"
            className="max-w-sm w-full rounded-lg "
          />
          <div className="hero-text">
            <h1 className=" text-3xl xl:mr-32  lg:text-5xl  font-bold">
              Start your practice in 0.001 Milisecond
            </h1>
            <p className="py-6">
              No software download, no run button, just write accordingly  <br />
              No save button, it will show your result automatically

            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1F1F47"
          fill-opacity="1"
          d="M0,256L40,218.7C80,181,160,107,240,90.7C320,75,400,117,480,160C560,203,640,245,720,234.7C800,224,880,160,960,112C1040,64,1120,32,1200,53.3C1280,75,1360,149,1400,186.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3D3D99"
          fill-opacity="1"
          d="M0,128L30,160C60,192,120,256,180,234.7C240,213,300,107,360,101.3C420,96,480,192,540,234.7C600,277,660,267,720,240C780,213,840,171,900,176C960,181,1020,235,1080,229.3C1140,224,1200,160,1260,133.3C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      {/* <img src="https://svgur.com/i/q6Z.svg" className="w-screen" alt="" /> */}
    </div>
  );
}

export default Hero;
