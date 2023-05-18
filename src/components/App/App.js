
import {
    Button, Collapse, TabPanel,
    Stack, Tab, Tabs, Typography, useMediaQuery, Box
} from "@mui/material";
import {useState} from "react";
import {ExpandMoreRounded} from "@mui/icons-material";
import homeBackground from '../../assets/img/home.jpg';
import VerticalTabs from "../Content/Content";

export default function App() {
  const [collapse, setCollapse] = useState(true);
  const [value, setValue] = useState(0);
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
      <>
        <Collapse in={collapse}>
          <Stack
              width={'100vw'}
              height={'100vh'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{backgroundImage: `url(${homeBackground})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
          >
            <Stack fullWidth height={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Typography
                    component={'h1'}
                    color={'white'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    fontSize={isDesktop ? 100 : 50}
                >
                    Gîte les Auberguets
                </Typography>
            </Stack>
            <Button
                variant="contained"
                fullWidth
                sx={{height: '100px', backgroundColor: 'rgba(169, 169, 169, 0.8)'}}
                onClick={() => setCollapse(false)}
            >
                <ExpandMoreRounded fontSize="large" />
            </Button>
          </Stack>
        </Collapse>
        <VerticalTabs />
      </>
  );
}