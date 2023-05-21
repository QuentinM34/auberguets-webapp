
import {List, ListItem, ListItemIcon, ListItemText, Stack} from "@mui/material";
import {MenuBookRounded, SportsTennis, Tv} from "@mui/icons-material";

export default function Equipment() {

    return (
        <Stack my={'1em'}>
            <List>
                <ListItem>
                    <ListItemIcon><Tv color={'info'}/></ListItemIcon>
                    <ListItemText primary="Télévision"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><SportsTennis color={'info'}/></ListItemIcon>
                    <ListItemText primary="Table de ping pong"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MenuBookRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Livres et de quoi lire"/>
                </ListItem>
            </List>
        </Stack>
    );
}