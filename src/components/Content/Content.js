
import {Chip, Divider, Stack, useMediaQuery} from "@mui/material";
import Header from "../Header/Header";
import Picture from "../Picture/Picture";
import Description from "../Description/Description";
import Equipment from "../ Equipment/Equipment";
import {useState} from "react";
import Around from "../Around/Around";

export default function Content() {
    const [alignment, setAlignment] = useState('description');
    const isDesktop = useMediaQuery('(min-width:700px)');

    return (
        <Stack gap={2} alignItems={'center'} pb={8}>
            <Header alignment={alignment} setAlignment={setAlignment}/>

            <Stack
                maxWidth={'1040px'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                mt={isDesktop ? '80px' : '0'}
                gap={1}
            >
                {alignment === 'description' &&
                    <>
                        <Divider flexItem variant={'middle'}><Chip label="Quelques photos ?" /></Divider>
                        <Picture />
                        <Divider flexItem variant={'middle'}><Chip label="À propos de ce logement" /></Divider>
                        <Description />
                    </>
                }
                {alignment === 'equipment' &&
                    <>
                        <Equipment />
                    </>
                }
                {alignment === 'location' &&
                    <>
                        <Around />
                    </>
                }
            </Stack>
        </Stack>
    );
}