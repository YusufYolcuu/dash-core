import { CWidgetStatsD, CCol } from "@coreui/react";
import PropTypes from "prop-types";
import React from "react";
import {
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilCalendar,
} from "@coreui/icons";
import { CChart } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";

const Brand = ({ chartOptions, icon, style, values, withCharts }) => {
  return (
    <>
      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      backgroundColor: "rgba(255,255,255,.1)",
                      borderColor: "rgba(255,255,255,.55)",
                      pointHoverBackgroundColor: "#fff",
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={icon} height={52} className="my-4 text-white" />}
          values={values}
          style={style}
        />
      </CCol>
    </>
  );
};

export default Brand;

Brand.propTypes = {
  withCharts: PropTypes.bool,
};
