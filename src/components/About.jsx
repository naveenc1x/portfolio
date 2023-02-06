import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-900 via-black to-neutral-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
       
          <p className="text-4xl text-center py-8 font-bold ">
            About
          </p>
       

        <p className="text-xl">
        I am a highly motivated and dedicated software developer with a passion for delivering high-quality,
         scalable and user-friendly applications. With over one year of experience in the industry,
          I have developed a strong set of skills in several programming languages, including Flutter,Firebase, Nest JS, Git and GitHub.
        </p>

        <br />
        <p className="text-4xl font-bold text-center  py-4">
          Flutter </p>
        <p className="text-xl">

I have extensive experience in Flutter, a popular open-source framework for building beautiful and fast mobile apps for both Android and iOS. 
I have worked on several projects that have been published on the app stores and have received positive feedback from users. 
My experience with Flutter includes building complex UI components, integrating with third-party APIs, and implementing data storage solutions using Firebase.
        </p>
        {/* <p className="text-4xl font-bold text-center py-4">
          Conclusion </p>
          <p className="text-xl"> 
          In conclusion, I am confident in my ability to deliver high-quality software solutions using Flutter, Nest JS, Git, GitHub, and firebase. 
          I have a passion for software development and I am always seeking new challenges and opportunities to improve my skills. 
          If you are looking for a highly motivated and skilled software developer, please do not hesitate to contact me.
          </p> */}
      </div>
    </div>
  );
};

export default About;
