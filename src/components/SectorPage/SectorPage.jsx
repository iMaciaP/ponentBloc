import React from "react";
import "./SectorPage.css";
import Typography from "@mui/material/Typography";
import Bloc from "../Bloc/Bloc.jsx";
import { SectorsVies } from "../../data/data";

const SectorPage = (props) => {
  const { Albages } = SectorsVies;
  const { ElRocDeLaDuna } = Albages;
  console.log(Albages.ElRocDeLaDuna);

  // var res = obj.locations.filter((item) => {
  //   return item.id == val;
  // });
  return (
    <div className="pageContainer">
      <Typography
        className="title"
        gutterBottom
        variant="title1"
        component="div"
      >
        ZONA - SECTOR
      </Typography>
      {/* WIP SELECT ID AND ADD ID TO DATA xD */}
      {/* {ElRocDeLaDuna.map((element, index) => (
        <Bloc {...element} />
      ))} */}
      <Bloc />
    </div>
  );
};
export default SectorPage;
