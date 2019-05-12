import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Breadcrumbs = props => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          DashBoard
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Email
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
