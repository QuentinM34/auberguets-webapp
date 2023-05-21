
import {
    BottomNavigation,
    BottomNavigationAction,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography, useMediaQuery
} from "@mui/material";
import {ContactPageRounded, DescriptionRounded, LocationOnRounded} from "@mui/icons-material";

export default function Header({alignment, setAlignment}) {
    const isDesktop = useMediaQuery('(min-width:700px)');

    return (
        <Stack
            width={'100%'}
            height={'80px'}
            sx={{backgroundColor: '#4c78a7'}}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack flexDirection={'row'} height={'100%'} alignItems={'center'} maxWidth={'1040px'} width={'100%'} justifyContent={isDesktop ? "space-between" : 'center'}>
                <Typography fontWeight={'bold'} color={'white'} fontSize={30}>LES AUBERGUETS</Typography>
                {isDesktop
                    ?
                        <ToggleButtonGroup
                            color={"primary"}
                            value={alignment}
                            exclusive
                            onChange={(event, value) => setAlignment(value)}
                        >
                            <ToggleButton value="description" >Description</ToggleButton>
                            <ToggleButton value="location" >Les Alentours</ToggleButton>
                            <ToggleButton value="contact" >Contact</ToggleButton>
                        </ToggleButtonGroup>
                    :
                        <BottomNavigation
                            showLabels
                            value={alignment}
                            onChange={(event, value) => setAlignment(value)}
                            sx={{position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#4c78a7', paddingY: '10px', zIndex: 100}}
                        >
                            <BottomNavigationAction value={'description'} label="Description" icon={<DescriptionRounded />} />
                            <BottomNavigationAction value={'location'} label="Les Alentours" icon={<LocationOnRounded/>} />
                            <BottomNavigationAction value={'contact'} label="Contact" icon={<ContactPageRounded />} />
                        </BottomNavigation>
                }
            </Stack>
        </Stack>
    );
}