import React from "react";
import CIcon from "@coreui/icons-react";
import { cilBarChart } from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
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
    component: CNavTitle,
    name: "Theme",
  },
];

export default _nav;
