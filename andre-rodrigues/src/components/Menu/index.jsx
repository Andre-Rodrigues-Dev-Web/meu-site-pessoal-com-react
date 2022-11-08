import * as React from "react";
//Link
import { Link, Outlet } from "react-router-dom";
//Styled Components
import { ContainerMenu } from "./style";

export const Menu = () => {
  return (
    <>
      <ContainerMenu>
        <div className="container">
          <div className="logo">
            <img
              src="https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/311869874_1231793387550094_7993381859158514975_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=eczbDVyyjEAAX-TuC8k&tn=dUEarFvQaL0t3P-B&_nc_ht=scontent-gru2-1.xx&oh=00_AfDvMW2tOZkpX97S-VslP6A9MgCQPHc9k6_cUOtAfKMClg&oe=636F4123"
              alt="Andre-Rodrigues"
            />
            <Link to="/home">
              <h1>André laurentino</h1>
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
            <Outlet />
          </ul>
        </div>
      </ContainerMenu>
    </>
  );
};
