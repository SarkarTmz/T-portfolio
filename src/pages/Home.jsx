import React from "react";

const Home = () => {
  return (
    <>
      <div className="Home container pt-12">
        <div className="Home__wrapper flex flex-col items-center">
          <img src="https://imgs.search.brave.com/LoS897kg-h8IH5bKNd1QJDsQxDAtIkQ8538gOHZUQEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly84V2Z3WWhOQVdr/bW9XRFhld2hHbnBC/Qnd0Rzg9LzM5NHgx/NDoxMjA5eDgyOS9m/aXQtaW4vNTAweDUw/MC85OWRlc2lnbnMt/Y29udGVzdHMtYXR0/YWNobWVudHMvMTEw/LzExMDU4My9hdHRh/Y2htZW50XzExMDU4/MzI3Ng" alt="" className="w-64 rounded-full"/>
          <div className="para">
            <p className="name text-center text-4xl font-bold text-rose-600">Sonam Tamang</p>
            <p className="title text-center text-2xl font-bold text-indigo-600">Web Developer</p>
            <p className="dis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nemo consequuntur. Nostrum quibusdam ratione neque ea fuga aperiam dolore, iure magnam iusto optio, dolorum eligendi eum dolorem m expedita quaerat id pedit natus laudantium.
            Itaque omnis incidunt id cumque aliquid illo perspiciatis veritatis quidem repudiandae. Sit, aliquam architecto </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
