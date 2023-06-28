
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction, Button,
    Stack, Toolbar,
    Typography, useMediaQuery
} from "@mui/material";
import {ConstructionRounded, ContactPageRounded, DescriptionRounded, LocationOnRounded} from "@mui/icons-material";

export default function Header({alignment, setAlignment}) {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <>
            {isDesktop
                ?
                <AppBar position="fixed" sx={{display: 'flex', alignItems: 'center', backgroundColor: '#4c78a7', paddingX: 2}}>
                    <Toolbar sx={{ width: '100%', maxWidth: '1040px'}}>
                        <Typography fontWeight={'bold'} color={'white'} fontSize={30} sx={{flexGrow: 1}}>LES AUBERGUETS</Typography>
                        <Stack flexDirection={'row'} gap={2}>
                            <Button variant={alignment === 'description' ? 'outlined' : 'text'} color={'primary'} onClick={() => setAlignment('description')}>Description</Button>
                            <Button variant={alignment === 'location' ? 'outlined' : 'text'} color={'primary'} onClick={() => setAlignment('location')}>Around</Button>
                            <Button variant={alignment === 'equipment' ? 'outlined' : 'text'} color={'primary'} onClick={() => setAlignment('equipment')}>Équipements</Button>
                            <Button variant={alignment === 'contact' ? 'outlined' : 'text'} color={'primary'} onClick={() => setAlignment('contact')}>Contact</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
                :
                <Stack
                    width={'100%'}
                    height={'80px'}
                    sx={{backgroundColor: '#4c78a7'}}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Stack flexDirection={'row'} height={'100%'} alignItems={'center'} maxWidth={'1040px'} width={'100%'} justifyContent={isDesktop ? "space-between" : 'center'}>
                        <Typography fontWeight={'bold'} color={'white'} fontSize={30}>LES AUBERGUETS</Typography>
                        <BottomNavigation
                            showLabels
                            value={alignment}
                            onChange={(event, value) => setAlignment(value)}
                            sx={{position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#4c78a7', paddingY: '10px', zIndex: 100}}
                        >
                            <BottomNavigationAction value={'description'} label="Description" icon={<DescriptionRounded />} />
                            <BottomNavigationAction value={'location'} label="Les Alentours" icon={<LocationOnRounded/>} />
                            <BottomNavigationAction value={'equipment'} label="Équipements" icon={<ConstructionRounded/>} />
                            <BottomNavigationAction value={'contact'} label="Contact" icon={<ContactPageRounded />} />
                        </BottomNavigation>
                    </Stack>
                </Stack>
            }
        </>
    );
}