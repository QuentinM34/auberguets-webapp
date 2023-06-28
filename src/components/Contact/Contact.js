
import {Avatar, Chip, Divider, Link, Stack, Typography} from "@mui/material";

export default function Contact() {


    return (
        <Stack width={'100%'} gap={2}>
            <Divider flexItem variant={'middle'}><Chip label="Nous contacter" /></Divider>
            <Stack flexDirection={'row'} gap={1} justifyContent={'center'}>
                <Typography>Mail :</Typography>
                <Link href={'mailto:proquentinmarce@gmail.com?subject=Demande à propos du gîte'} color={'secondary'} >proquentinmarce@gmail.com</Link>
            </Stack>

            <Divider flexItem variant={'middle'}><Chip label="Votre hôte" /></Divider>
            <Stack flexDirection={'row'} gap={3} justifyContent={'center'} alignItems={'center'}>
                <Avatar>OP</Avatar>
                <Typography>Sophie & Jean-Marc MARCERON</Typography>
            </Stack>
        </Stack>
    );
}