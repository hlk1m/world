import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICountry } from "../data/api";
import { convertNumUnits } from "../number";

const ItemWrapper = styled.li<{ headingSize?: boolean }>`
  background-color: ${(props) => props.theme.elementsColor};
  width: 100%;
  height: 20vw;
  min-height: 330px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 60px;
  overflow: hidden;

  cursor: pointer;
  -webkit-box-shadow: ${(props) => props.theme.shadowColor};
  box-shadow: ${(props) => props.theme.shadowColor};

  /* flags */
  img {
    width: 100%;
    height: 45%;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  /* content */
  div {
    width: 100%;
    padding: 30px;
    height: auto;

    h5 {
      font-weight: 800;
      font-size: ${(props) => (props.headingSize ? "20px" : "24px")};
      margin-bottom: 20px;
    }
    p {
      line-height: 24px;
    }
    strong {
      font-weight: 600;
    }
  }

  /* laptop */
  @media screen and (max-width: 1280px) {
    height: 25vw;
    /* flags */
    img {
      height: 45%;
    }
    div {
      padding: 20px;
      h5 {
        margin-bottom: ${(props) => (props.headingSize ? "10px" : "15px")};
      }
    }
  }

  /* mobile */
  @media screen and (max-width: 428px) {
    height: 90vw;
    min-height: 300px;
    img {
      height: 47%;
    }
  }
`;

// Interface
interface IProps {
  data: ICountry;
}

function Card({ data }: IProps) {
  const [reduceFontSize, setReduceFontSize] = useState(false);
  const navigate = useNavigate();
  const onClick = () =>
    navigate(`/country/${data.name.common}`, {
      state: {
        id: data.name.common,
        data,
      },
    });

  useEffect(() => {
    if (data.name.common.length > 12) {
      setReduceFontSize(true);
    } else {
      setReduceFontSize(false);
    }
  }, []);

  return (
    <ItemWrapper onClick={onClick} headingSize={reduceFontSize}>
      <img alt={data.name.common} src={data.flags.png} />

      <div>
        <h5>{data.name.common}</h5>
        <p>
          <strong>Population :</strong> {convertNumUnits(data.population)}{" "}
          <br />
          <strong>Region :</strong> {data.region} <br />
          <strong>Capital :</strong> {data.capital}
        </p>
      </div>
    </ItemWrapper>
  );
}

export default React.memo(Card);
