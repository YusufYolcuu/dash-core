import React from "react";
import { CContainer, CHeader, CHeaderToggler } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { cilMenu } from "@coreui/icons";
import { useSelector, useDispatch } from "react-redux";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <h1>Header</h1>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
