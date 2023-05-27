
import {Chip, Divider, Stack} from "@mui/material";
import Header from "../Header/Header";
import Picture from "../Picture/Picture";
import Description from "../Description/Description";
import Equipment from "../ Equipment/Equipment";
import {useState} from "react";

export default function Content() {
    const [alignment, setAlignment] = useState('description');

    return (
        <Stack gap={2} alignItems={'center'} pb={8}>
            <Header alignment={alignment} setAlignment={setAlignment}/>
            <Stack
                maxWidth={'1040px'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
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
            </Stack>
        </Stack>
    );
}