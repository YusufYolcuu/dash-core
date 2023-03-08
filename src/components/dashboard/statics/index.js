import { CCol, CRow } from "@coreui/react";
import React from "react";
import { cilArrowBottom, cilArrowTop } from "@coreui/icons";
import Stat from "./stat";
const stats = [
  {
    color: "primary",
    title: "Users",
    value: "26K",
    icon: cilArrowBottom,
    typeOfStat: "--cui-primary",
  },
  {
    color: "success",
    title: "Organizations",
    value: "123",
    icon: cilArrowTop,
    typeOfStat: "--cui-info",
  },
  {
    color: "info",
    title: "Events",
    value: "123",
    icon: cilArrowBottom,
  },
  {
    color: "warning",
    title: "Projects",
    value: "123",
    icon: cilArrowTop,
  },
];

const AppStatics = () => {
  return (
    <CRow>
      {stats.map((stat, index) => (
        <CCol sm="6" lg="3" key={index}>
          <Stat
            icon={stat.icon}
            color={stat.color}
            title={stat.title}
            value={stat.value}
          />
        </CCol>
      ))}
    </CRow>
  );
};

export default AppStatics;
