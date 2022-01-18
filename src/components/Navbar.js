import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                {/* drop departamantos */}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mantenimientos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Departamentos
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Estudios
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Empleados
                    </a>
                  </li>
                </ul>
                {/* drop departamantos */}
              </li>
              <li class="nav-item dropdown">
                {/* drop operaciones */}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Operaciones
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Movimientos de empleados
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Salida de empleados
                    </a>
                  </li>
                </ul>
                {/* drop operaciones */}
              </li>
              <li class="nav-item dropdown">
                {/* drop reportes */}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reportes
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Listado de empleados por fecha entrada
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Listado nomina
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Listado de recibos empleados
                    </a>
                  </li>
                </ul>
                {/* drop operaciones */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
