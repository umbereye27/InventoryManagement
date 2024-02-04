import React from "react";
import Contents from "../../components/finance/Contents";
import Cards from "../../components/admin/Cards";
import History from "../../components/admin/History";
import "../../styles/dashbaord.css";

function AdminContent() {
  return (
    <div className="content">
      <Contents />
      <Cards />
      <History />
    </div>
  );
}

export default AdminContent;
