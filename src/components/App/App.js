
// import {
//     useMediaQuery,
// } from "@mui/material";
import Content from "../Content/Content";
import AuberguetsTheme from "../../assets/muiTheme.js";

export default function App() {
  // const isDesktop = useMediaQuery('(min-width:700px)');

  return (
      <AuberguetsTheme>
          <Content />
      </AuberguetsTheme>
  );
}