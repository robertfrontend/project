import React from "react";
import { Link }from 'react-router-dom'
import styled from "styled-components";

export default function Home() {
  return (
      <Content>
        <div className="container">
          <div className="d-flex flex-row flex-wrap">
            <div className="col col-md-4 ">
              <Link to="/mantenimientos">
                  <CardCustom>
                    <h4>Mantenimientos</h4>
                  </CardCustom>
              </Link>
            </div>
            <div className="col col-md-4 ">
              <Link to={"/"}>
                  <CardCustom>
                    <h4>Operaciones</h4>
                  </CardCustom>
              </Link>
            </div>
            <div className="col col-md-4 ">
              <Link to="/">
                  <CardCustom>
                    <h4>Reportes</h4>
                  </CardCustom>
              </Link>
            </div>
          </div>
        </div>
      </Content>
  );
}

const Content = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    text-decoration: none !important;
  }
`;

const CardCustom = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  font-weight: bold;
  text-align: center;
`;
