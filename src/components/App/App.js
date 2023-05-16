
import {Button, Collapse, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {ExpandMore} from "@mui/icons-material";

export default function App() {
  const [collapse, setCollapse] = useState(true);

  return (
    <Collapse in={collapse}>
      <Stack width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: '#454545'}}>
        <Stack fullWidth height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Typography component={'h1'} color={'white'} fontWeight={'bold'} fontSize={70}>Gîte les Auberguets</Typography>
        </Stack>
        <Button fullWidth sx={{height: '100px', backgroundColor: '#999999'}} variant="contained" onClick={() => setCollapse(false)}>
            <ExpandMore />
        </Button>
      </Stack>
    </Collapse>
  );
}