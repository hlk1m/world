// Header - switch the theme

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { themeAtom } from "../data/atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const MyHeader = styled.header`
  width: 100%;
  height: 8vh;
  background-color: ${(props) => props.theme.elementsColor};
  -webkit-box-shadow: ${(props) => props.theme.shadowColor};
  box-shadow: ${(props) => props.theme.shadowColor};
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div<{ mobile: boolean }>`
  width: 90%;
  height: 8vh;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 800;
  }
  button {
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    color: ${(props) => props.theme.textColor};

    /* icon */
    svg {
      font-size: 20px;
      margin-right: 7px;
      transform: translateY(2px);
    }
  }

  /* mobile */
  @media screen and (max-width: 428px) {
    h1 {
      font-size: 18px;
    }
  }
`;

function Header() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [isMobile, setIsMobile] = useState(false);
  const onClickTheme = () => setTheme((curr) => !curr);

  useEffect(() => {
    if (window.innerWidth <= 428) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <MyHeader>
      <Wrapper mobile={isMobile}>
        <h1>Where in the _world?</h1>
        {theme ? (
          <button onClick={onClickTheme}>
            <FontAwesomeIcon icon={faSun} />
            {!isMobile && "Light Mode"}
          </button>
        ) : (
          <button onClick={onClickTheme}>
            <FontAwesomeIcon icon={faMoon} />
            {!isMobile && "Dark Mode"}
          </button>
        )}
      </Wrapper>
    </MyHeader>
  );
}

export default React.memo(Header);
