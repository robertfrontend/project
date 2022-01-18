import axios from "axios";
import * as React from "react";
import styled from "styled-components";

import { GetDepartments_API, GetEmployess_API, GetStudies_API } from "../API";
import Table from "../components/Table";

export default function Maintenance() {

  const [departments, setDepartments] = React.useState(null);
  const [emplyess, setEmplyess] = React.useState(null);
  const [studies, setStudies] = React.useState(null);

    React.useEffect(() => {
      
    getDepartametns();

  }, []);

  const getDepartametns = async () => {
    try {
      const response = await GetDepartments_API();
        setDepartments(response.data);
        
        getEmplyess()
    } catch (error) {
      console.log("Ha ocurrido un error");
    }
    };
    
  const getEmplyess = async () => {
    try {
      const response = await GetEmployess_API();
      setEmplyess(response.data);

        getStudies();
    } catch (error) {
      console.log("Ha ocurrido un error");
    }
    };
    

  const getStudies = async () => {
    try {
      const response = await GetStudies_API();
        setStudies(response.data);

      getStudies();
    } catch (error) {
      console.log("Ha ocurrido un error");
    }
  };

  return (
    <Content>
      <div className="container">
        <h1>Mantenimientos</h1>
        <main className="px-2 mt-4">
          <section>
            <h4>Departamentos</h4>
            {departments && (
              <Table
                theadTable={["id", "DeptoName", "created_at"]}
                data={departments}
              />
            )}
          </section>

          <section>
            <h4>Estudios</h4>
            {studies && (
              <Table
                theadTable={["id", "employeeid", "studiename"]}
                data={studies}
              />
            )}
          </section>

          <section>
            <h4>Empleados</h4>
            {emplyess && (
              <Table
                theadTable={[
                  "id",
                  "nombres",
                  "apellidos",
                  "deptoid",
                  "cedula",
                  "sexo",
                ]}
                data={emplyess}
              />
            )}
          </section>
        </main>
      </div>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  section {
      margin: 5em 0;
  }
`;
