import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICountry } from "../data/api";
import { convertNumUnits } from "../number";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: auto;

  /* Back button */
  button {
    cursor: pointer;
    margin-top: 60px;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.elementsColor};
    border-radius: 5%;
    border: none;
    -webkit-box-shadow: ${(props) => props.theme.buttonShadow};
    box-shadow: ${(props) => props.theme.buttonShadow};
    padding: 7px 15px;
  }

  /* Mobile */
  @media screen and (max-width: 540px) {
    width: 85%;
    button {
      margin: 30px 0;
    }
  }
`;

const ContentBox = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7%;
  transform: translateY(40%);
  width: 100%;

  /* Tablet */
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    transform: none;
    margin-top: 30px;
    align-items: center;
  }

  /* Mobile */
  @media screen and (max-width: 540px) {
    padding-bottom: 60px;
  }
`;

const Flags = styled.div`
  width: 100%;
  margin: auto;

  img {
    width: 100%;
    min-width: 400px;
  }

  /* Tablet */
  @media screen and (max-width: 1080px) {
    img {
      width: 70%;
      height: auto;
      min-width: 0;
    }
  }
  /* Mobile */
  @media screen and (max-width: 540px) {
    img {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  h1 {
    font-size: 34px;
    font-weight: 700;
    margin: 30px 0;
  }
  /* Tablet */
  @media screen and (max-width: 1080px) {
    width: 100%;
    margin-top: 30px;
  }
`;
const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 200px;
  margin-bottom: 50px;

  li {
    margin: 10px 0;
    b {
      font-weight: 700;
      margin-right: 7px;
    }
  }

  /* Mobile */
  @media screen and (max-width: 1080px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  /* Mobile */
  @media screen and (max-width: 540px) {
    display: flex;
    flex-wrap: nowrap;
    max-height: none;
  }
`;
const BorderList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h4 {
    font-weight: 700;
    margin-right: 15px;
  }
  /* Border list */
  ul {
    display: flex;
    li {
      padding: 8px 15px;
      margin-right: 10px;
      box-shadow: ${(props) => props.theme.buttonShadow};
      font-size: 14px;
    }
  }
  /* Mobile */
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;

    h4 {
      margin-bottom: 20px;
    }
    ul {
      flex-wrap: wrap;
      li {
        margin-bottom: 10px;
      }
    }
  }
`;

function Detail() {
  const navigate = useNavigate();

  //Location - Navegate로 보낸 id와 date 받기
  const location = useLocation();
  const state = location.state as { id: string; data: ICountry };
  const countyId = state.id;
  const data = state.data;

  const [currencies, setCurrencies] = useState("");
  const [nativeName, setNativeName] = useState("");
  const [languages, setLanguages] = useState("");

  // Print Country information
  useEffect(() => {
    // Currencies
    const currenciesKey = Object.keys(data.currencies).join();
    const currenciesValue = data.currencies[currenciesKey].name;
    setCurrencies(currenciesValue);

    const nameKey = Object.keys(data.name.nativeName);

    // NativeName and Languages
    if (nameKey.length > 1) {
      const nativeValue = Object.values(data.name.nativeName);
      const nativeN = nativeValue[0].common;
      const langValue = Object.values(data.languages).join();

      setNativeName(nativeN);
      setLanguages(langValue);
      return;
    } else {
      const counKey = nameKey.join();
      const nativeValue = data.name.nativeName[counKey].common;
      const LangValue = data.languages[counKey];
      setNativeName(nativeValue);
      setLanguages(LangValue);
      return;
    }
  }, [data]);

  return (
    <Wrapper>
      <button onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>
      <ContentBox>
        <Flags>
          <img src={data.flags.svg} alt={countyId} />
        </Flags>
        <Content>
          <h1>{countyId}</h1>
          <InfoList>
            <li>
              <b>Native Name:</b>
              {nativeName}
            </li>
            <li>
              <b>Population:</b> {data.population.toLocaleString("en")}
              {" ("}
              {convertNumUnits(data.population)}
              {")"}
            </li>
            <li>
              <b>Region:</b> {data.region}
            </li>
            <li>
              <b>Sub Region:</b> {data.subregion}
            </li>
            <li>
              <b>Capital:</b> {data.capital.join()}
            </li>
            <li>
              <b>Top Level Domain:</b> {data.tld}
            </li>
            <li>
              <b>Currencies:</b>
              {currencies}
            </li>
            <li>
              <b>Languages:</b>
              {languages}
            </li>
          </InfoList>
          <BorderList>
            <h4>Border Countries:</h4>
            {data.borders ? (
              <ul>
                {data.borders?.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            ) : (
              <span>X</span>
            )}
          </BorderList>
        </Content>
      </ContentBox>
    </Wrapper>
  );
}

export default Detail;
