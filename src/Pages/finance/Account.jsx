import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar2 from "../../Layouts/Sidebar2";
import TableCash from "./TableCash";
import Contents from "./Contents";

function Account() {
  return (
    <>
      <div className="dashboard">
        <Sidebar2 userRole={localStorage.getItem("role")} />
        <div className="dashboard-content ">
          <div className="dash-menu  ">
            <Contents />
            <div className="flex justify-center">
              <TableCash />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
