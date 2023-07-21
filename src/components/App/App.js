
import React, {useState} from "react";
import {Stack, useMediaQuery} from "@mui/material";
import Header from "../Header/Header";
import Description from "../Description/Description";
import Equipment from "../ Equipment/Equipment";
import Around from "../Around/Around";
import Contact from "../Contact/Contact";

export default function App() {
  const [alignment, setAlignment] = useState('description');
  const isDesktop = useMediaQuery('(min-width:800px)');

  const Page = {
    around: Around,
    description: Description,
    equipment: Equipment,
    contact: Contact
  };

  return (
      <Stack gap={3} alignItems={'center'} pb={8}>
        <Header alignment={alignment} setAlignment={setAlignment} />

        <Stack
            maxWidth={'1040px'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            mt={isDesktop ? '90px' : '0'}
            gap={1}
        >
          {React.createElement(Page[alignment])}
        </Stack>
      </Stack>
  );
}