import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import React from "react";
import SimpleBar from "simplebar-react";
import navigation from "../_nav";
import AppSidebarNav from "./AppSidebarNav";

const AppSidebar = () => {
  return (
    <CSidebar position="fixed">
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {" "}
        DashCore
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />{" "}
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default AppSidebar;
