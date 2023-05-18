
import {Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {useState} from "react";

export default function Header() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Stack flexDirection={'row'} fullWidth height={'80px'} sx={{backgroundColor: '#4c78a7'}} alignItems={'center'} justifyContent={'space-around'}>
            <Typography fontWeight={'bold'} color={'white'} fontSize={30}>LES AUBERGUETS</Typography>
            <ToggleButtonGroup
                color={"primary"}
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="web" >Description</ToggleButton>
                <ToggleButton value="android" >Les Alentours</ToggleButton>
                <ToggleButton value="ios" >Contact</ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}