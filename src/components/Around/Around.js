
import Map from "../Map/Map";
import {Stack, useMediaQuery} from "@mui/material";

export default function Around() {
    const isDesktop = useMediaQuery('(min-width:700px)');

    return (
        <Stack my={'1em'} width={'80%'}>
            <Stack width={'100%'} height={isDesktop ? '500px' : '300px'}>
                <Map />
            </Stack>
        </Stack>
    );
}