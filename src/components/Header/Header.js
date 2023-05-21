
import {Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {useState} from "react";

export default function Header() {
    const [alignment, setAlignment] = useState('description');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Stack
            width={'100%'}
            height={'80px'}
            sx={{backgroundColor: '#4c78a7'}}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack flexDirection={'row'} height={'100%'} alignItems={'center'} maxWidth={'1040px'} width={'100%'} justifyContent={"space-between"}>
                <Typography fontWeight={'bold'} color={'white'} fontSize={30}>LES AUBERGUETS</Typography>
                <ToggleButtonGroup
                    color={"primary"}
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="description" >Description</ToggleButton>
                    <ToggleButton value="around" >Les Alentours</ToggleButton>
                    <ToggleButton value="contact" >Contact</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
}