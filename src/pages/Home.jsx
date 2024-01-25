import React from "react";

const Home = () => {
  return (
    <>
      <div className="Home container pt-12">
        <div className="Home__wrapper flex flex-col gap-5 items-center">
          <img
            src="https://imgs.search.brave.com/LoS897kg-h8IH5bKNd1QJDsQxDAtIkQ8538gOHZUQEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly84V2Z3WWhOQVdr/bW9XRFhld2hHbnBC/Qnd0Rzg9LzM5NHgx/NDoxMjA5eDgyOS9m/aXQtaW4vNTAweDUw/MC85OWRlc2lnbnMt/Y29udGVzdHMtYXR0/YWNobWVudHMvMTEw/LzExMDU4My9hdHRh/Y2htZW50XzExMDU4/MzI3Ng"
            alt=""
            className="w-64 rounded-full"
          />
          <div className="para">
            <p className="name text-center text-4xl font-bold text-rose-600">
              Sonam Tamang
            </p>
            <p className="title text-center text-2xl font-bold text-indigo-600">
              Web Developer
            </p>
            <p className="dis">
              I am a skilled web developer with expertise in designing and
              creating dynamic, user-friendly websites. Proficient in HTML, CSS,
              JavaScript, and various web development frameworks, I specialize
              in crafting responsive and visually appealing interfaces. My
              experience includes implementing efficient coding practices and
              staying abreast of industry trends to deliver high-quality, modern
              websites that meet client specifications. Passionate about
              creating seamless online experiences, I am committed to staying at
              the forefront of web development advancements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
