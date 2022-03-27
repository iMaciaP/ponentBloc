import React from "react";
import { useLocation } from "react-router-dom";
import "./SectorPage.css";
import Typography from "@mui/material/Typography";
import Bloc from "../Bloc/Bloc.jsx";
import { SectorsVies } from "../../data/data";

const usePathname = () => {
  const location = useLocation();
  return location.pathname.split("/");
};

const SectorPage = (props) => {
  const path = usePathname();
  // WIP segur hi ha una menera millor de fer aixo, custom hook? filter?
  const sName = path[1] ? path[1] : "err";
  const sId = path[2] ? path[2] : "1";
  const sData = SectorsVies[sName][sId-1];
  console.log(Object.values(sData));

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
      {Object.values(sData).map((element, index) => (
        <Bloc key={index} {...element} />
      ))}
    </div>
  );
};
export default SectorPage;
