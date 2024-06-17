import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global-style";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./data/atom";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();
  const theme = useRecoilValue(themeAtom);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
