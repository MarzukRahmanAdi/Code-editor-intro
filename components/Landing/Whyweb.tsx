import React from "react";

function Whyweb() {
  return (
    <section id="why">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/x873pJC/Code-typing-pana.png"
            className=" w-6/12 rounded-lg floating "
          />
          <div className="xl:ml-12">
            <h1 className="text-5xl font-bold text-white">Why web development?
            </h1>
            <p className="py-6 text-white">
              Web development is a lucrative and in-demand field that offers many opportunities for learning and earning. With the increasing popularity of the internet and the need for businesses to have a strong online presence, web development skills are highly sought after. By learning web development, you will gain a valuable skill set that can lead to a rewarding career with a high earning potential.  
            </p>
             <a href='https://code.ionicbyte.com/' target={"_blank"} ><button className="btn btn-primary">Get Started</button></a> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyweb;
