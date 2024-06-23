import React from "react";
import { Link } from "react-router-dom";
import SingleMenu from "./SingleMenu";
import SubMenu from "./SubMenu";

const MenuItem = ({ url, children, submenu, submenuDetails }) =>
  submenu ? (
    <SubMenu
      url={url}
      menuChildren={children}
      submenuDetails={submenuDetails}
    ></SubMenu>
  ) : (
    <SingleMenu url={url} menuChildren={children}></SingleMenu>
  );

export default MenuItem;
