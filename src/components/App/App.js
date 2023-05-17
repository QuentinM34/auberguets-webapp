
import {Button, Collapse, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {ExpandMore} from "@mui/icons-material";
import homeBackground from '../../assets/img/home.jpg';

export default function App() {
  const [collapse, setCollapse] = useState(true);

  return (
    <Collapse in={collapse}>
      <Stack
          width={'100vw'}
          height={'100vh'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{backgroundImage: `url(${homeBackground})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
      >
        <Stack fullWidth height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Typography component={'h1'} color={'white'} fontWeight={'bold'} fontSize={100}>Gîte les Auberguets</Typography>
        </Stack>
        <Button
            variant="contained"
            fullWidth
            sx={{height: '100px', backgroundColor: 'rgba(169, 169, 169, 0.8)'}}
            onClick={() => setCollapse(false)}
        >
            <ExpandMore />
        </Button>
      </Stack>
    </Collapse>
  );
}