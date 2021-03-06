import React from "react";

//importing interfaces
import { IToolsandTechnologies } from "../../../interfaces/home";

const ToolsandTechChart: React.FC<IToolsandTechnologies> = (props) => (
  <div className="w-full my-2 flex flex-col md:flex-row justify-between border-2 border-gray-500 rounded-lg">
    <div className="w-full md:w-2/12 flex flex-col justify-center flex-nowrap border-r-2 border-gray-500 md:py-4 ">
      <p className="font-bold md:pl-4">{props.title}</p>
    </div>
    <div className="w-full md:w-10/12 flex flex-row flex-wrap pl-1 md:pl-8 md:py-4">
      {props.tools.map((tool, index) => (
        <p
          key={index}
          className="px-2 py-1 my-auto mr-1 md:mr-4 border-2 border-gray-500"
        >
          {tool}
        </p>
      ))}
    </div>
  </div>
);

export default ToolsandTechChart;
