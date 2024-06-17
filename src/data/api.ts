// api, interface

export interface ICountry {
  altSpellings: string[];
  area: number;
  borders?: string[];
  capital: string[];
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: {
    [key: string]: { code: string };
  };
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    [lang: string]: {
      official: string;
      common: string;
    };
  };
  fifa: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  gini: {
    [year: string]: number;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  languages: {
    [lang: string]: string | string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: IName;
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [lang: string]: {
      official: string;
      common: string;
    };
  };
  unMember: boolean;
}

interface IName {
  common: string;
  official: string;
  nativeName: {
    [lang: string]: {
      official: string;
      common: string;
    };
  };
}

const URL = `https://restcountries.com/v3.1`;

export const countriesFetch = () => {
  return fetch(`${URL}/all`).then((res) => res.json());
};
