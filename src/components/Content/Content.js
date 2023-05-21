
import {Chip, Divider, Stack} from "@mui/material";
import Header from "../Header/Header";
import Picture from "../Picture/Picture";
import Description from "../Description/Description";
import Equipment from "../ Equipment/Equipment";

export default function Content() {

    return (
        <Stack gap={2} alignItems={'center'}>
            <Header />
            <Stack
                maxWidth={'1040px'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={1}
            >
                <Divider flexItem><Chip label="Quelques photos ?" /></Divider>
                <Picture />
                <Divider flexItem><Chip label="À propos de ce logement" /></Divider>
                <Description />
                <Divider flexItem><Chip label="Les équipements" /></Divider>
                <Equipment />
            </Stack>
        </Stack>
    );
}