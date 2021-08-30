import React from "react";
import "./index.css";
import { useState } from "react";
import GoogleLogo from "./Google-logo.svg";
function Home() {
  const [search, setSearch] = useState("");

  return (
    <div class="container-fluid">
      <ul class="nav justify-content-end">
        <li class="nav-item" className="end">
          <a class="nav-link " aria-current="page" href="#">
            Gmail
          </a>
        </li>
        <li class="nav-item" className="end">
          <a class="nav-link " aria-current="page" href="#">
            Images
          </a>
        </li>
        <li class="nav-item" className="end">
          <a class="nav-link" href="">
            <i class="fas fa-th"></i>
          </a>
        </li>
      </ul>
      <div className="main">
        <img src={GoogleLogo} alt="" />
      </div>

      <div class="input-group flex-nowrap container-sm">
        <span class="input-group-text span" id="addon-wrapping">
          <i class="fas fa-search search"></i>
        </span>
        <input
          type=""
          class="form-control form"
          placeholder=""
          onChange={(e) => setSearch(e.target.value)}
          aria-describedby="addon-wrapping"
        />
      </div>
      <div class="buttons">
        <button class="btn " className="button">
          <a
            href={`https://google.com/search?q=${search}`}
            class="btn   "
            role="button"
            aria-disabled="true"
          >
            Google Search
          </a>
        </button>

        <button class="btn " className="button buttons">
          <a
            href="https://perfects.engineering"
            class="btn  "
            role="button"
            aria-disabled="true"
          >
            I'm feeling lucky
          </a>
        </button>
      </div>

      <footer>
        <div className="top-footer">
          <p>Nigeria</p>
        </div>
        <div className="down-footer">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.google.com/preferences?hl=en"
              >
                Settings
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://policies.google.com/privacy?hl=en-NG&fg=1"
              >
                Privacy
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://policies.google.com/terms?hl=en-NG&fg=1"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Home;
