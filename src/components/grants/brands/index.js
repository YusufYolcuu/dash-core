import { CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
import Brand from "./brand";
import {
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilCalendar,
} from "@coreui/icons";

const brands = [
  {
    id: 1,
    icon: cibFacebook,
    data: [65, 59, 84, 84, 51, 55, 40],
    style: {
      "--cui-card-cap-bg": "#3b5998",
    },
    values: [
      { title: "friends", value: "89K" },
      { title: "feeds", value: "459" },
    ],
  },
  {
    id: 2,
    icon: cibLinkedin,
    data: [1, 13, 9, 17, 34, 41, 38],
    style: {
      "--cui-card-cap-bg": "#00aced",
    },
    values: [
      { title: "followers", value: "973k" },
      { title: "tweets", value: "1.792" },
    ],
  },
  {
    id: 3,
    icon: cibTwitter,
    data: [78, 81, 80, 45, 34, 12, 40],
    style: {
      "--cui-card-cap-bg": "#0077b5",
    },
    values: [
      { title: "contacts", value: "500" },
      { title: "feeds", value: "1.292" },
    ],
  },
  {
    id: 4,
    icon: cilCalendar,
    data: [78, 81, 80, 45, 34, 12, 40],
    style: {
      "--cui-card-cap-bg": "#FFA500",
    },
    values: [
      { title: "events", value: "12+" },
      { title: "meetings", value: "4" },
    ],
  },
];
const Brands = () => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  return (
    <>
      <CContainer>
        <CRow>
          {brands.map((brand) => (
            <Brand
              key={brand.id}
              chartOptions={chartOptions}
              icon={brand.icon}
              style={brand.style}
              values={brand.values}
            />
          ))}
        </CRow>
      </CContainer>
    </>
  );
};

export default Brands;
