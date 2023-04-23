import React, { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Sammy",
      location: "DigitalOcean",
      designation: "Shark",
    },
  ],
  navBarLinks: [
    {
      id: 0,
      title: "Albages",
      open: true,
      sectors: [{ name: "El roc de la duna", link: "/abg/1" }],
    },
    {
      id: 1,
      title: "Castelldans",
      open: false,
      sectors: [
        { name: "La valleta", link: "/cst/1" },
        { name: "Les  penes", link: "/cst/2" },
      ],
    },
    {
      id: 2,
      title: "El Cogul",
      open: false,
      sectors: [
        { name: "Beer Action", link: "/cgl/1" },
        { name: "Els camps", link: "/cgl/2" },
        { name: "El turonet", link: "/cgl/3" },
        { name: "Lo pallars", link: "/cgl/4" },
        { name: "Mestre muten", link: "/cgl/5" },
        { name: "La Universitat", link: "/cgl/6" },
      ],
    },
    {
      id: 3,
      title: "Cubells",
      open: false,
      sectors: [{ name: "Principal", link: "/cub/1" }],
    },
    {
      id: 4,
      title: "Torrebesses",
      open: false,
      sectors: [
        { name: "Les trinxeres", link: "/trrb/1" },
        { name: "Sectoret", link: "/trrb/2" },
      ],
    },
    {
      id: 5,
      title: "Belianes",
      open: false,
      sectors: [
        { name: "Costat 1", link: "/bln/1" },
        { name: "Costat 2", link: "/bln/2" },
      ],
    },
    {
      id: 6,
      title: "Maldà",
      open: false,
      sectors: [
        { name: "Costat 1", link: "/mld/1" },
        { name: "Costat 2", link: "/mld/2" },
      ],
    },
    {
      id: 7,
      title: "Preixens",
      open: false,
      sectors: [{ name: "Sector", link: "/prx/1" }],
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee,
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        navBarLinks: state.navBarLinks,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
