import React from "react";

const EducationItem = () => {
  return (
    <>
      <div className="bg-grey rounded-lg shadow-lg py-6 px-12 leading-none ml-8 md:ml-0">
        <h4 className="text-lg uppercase font-bold mb-2 text-red-800">
          Courses
        </h4>
        <div className-="flex flex-row">
          <div>
            <p className="text-lg md:text-2xl uppercase">
              FullStack Master
              <br />
              <span className="text-lg normal-case font-bold">
                Dev-Pleno - Tulio Faria
              </span>
            </p>
          </div>

          <div>
            <p className="text-lg md:text-2xl uppercase">
              FullStack Master
              <br />
              <span className="text-lg normal-case font-bold">
                Dev-Pleno - Tulio Faria
              </span>
            </p>
          </div>
        </div>

        <h4 className="text-lg uppercase font-bold mb-2 text-red-800">
          College
        </h4>
        <p className="text-lg md:text-2xl uppercase">
          Análise e Desenvolvimento de Sistemas
          <br />
          <span className="text-lg normal-case font-bold">Senac - SC</span>
        </p>
      </div>
    </>
  );
};

export default EducationItem;
