import React from "react";
import CIcon from "@coreui/icons-react";
import { cilBarChart, cilIndustry } from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavTitle,
    name: "Infos",
  },
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },

  {
    component: CNavItem,
    name: "Grants",
    to: "/grants",
    icon: <CIcon icon={cilIndustry} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Management",
  },
];

export default _nav;
