
import {Chip, Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {
    AcUnitRounded, AirRounded,
    BathtubRounded, BeachAccessRounded,
    BedRounded, BlenderRounded,
    ChairAltRounded, CheckroomRounded,
    ChildFriendlyRounded, CoffeeMakerRounded,
    CountertopsRounded, CribRounded, DeckRounded,
    DeviceThermostatRounded, DirectionsCarRounded,
    FenceRounded, FireExtinguisherRounded,
    FlatwareRounded, HotTubRounded,
    IronRounded, KeyRounded,
    KitchenRounded, LocalFloristRounded,
    LocalLaundryServiceRounded, MedicalServicesRounded,
    MenuBookRounded, MicrowaveRounded, OutdoorGrillRounded,
    PanoramaRounded, PoolRounded,
    PowerOffRounded, SensorsRounded,
    ShieldRounded, ShowerRounded,
    SportsTennis, TableBarRounded,
    ToysRounded, Tv, WifiRounded,
    WineBar, WineBarRounded
} from "@mui/icons-material";

export default function Equipment() {

    return (
        <>
            <Divider flexItem variant={'middle'}><Chip label="Vues panoramiques" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><PanoramaRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Vue sur le vignoble"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WineBar color={'info'}/></ListItemIcon>
                    <ListItemText primary="Vue sur la vallée"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Salle de bain" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Sèche-cheveux"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Produits de nettoyage"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Shampooing"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Savon pour le corps"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Douche extérieure"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Eau chaude"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Gel douche"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Chambre et linge" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><LocalLaundryServiceRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Lave-linge (Gratuit) dans le bâtiment"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShowerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Équipements de base" secondary="Serviettes, draps, savon et papier toilette"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckroomRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Cintres"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BedRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Draps"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BedRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Oreillers et couvertures supplémentaires"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><IronRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Fer à repasser"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckroomRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Étendoir à linge"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BedRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Moustiquaire"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Espace de rangement pour les vêtements"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Divertissement" /></Divider>
            <List sx={{width: '90%'}}>
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

            <Divider flexItem variant={'middle'}><Chip label="Famille" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><CribRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Lit pour bébé : disponible sur demande"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BedRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Lit parapluie : disponible sur demande"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ToysRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Livres et jouets pour enfants"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ChairAltRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Chaise haute"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BathtubRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Baignoire pour bébés"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FlatwareRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Vaisselle pour enfants"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShieldRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Protections sur les fenêtres"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><PowerOffRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Caches-prises"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FenceRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Barrières de sécurité pour bébé"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ShieldRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Protections sur les coins de tables"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ChildFriendlyRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Recommandations de baby-sitters"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Chauffage et climatisation" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><AcUnitRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Climatisation centrale"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><AirRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Ventilateurs portables"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><DeviceThermostatRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Chauffage"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Sécurité à la maison" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><SensorsRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Détecteur de fumée"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FireExtinguisherRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Extincteur"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MedicalServicesRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Kit de premiers secours"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Internet et bureau" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><WifiRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Wifi"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Cuisine et salle à manger" /></Divider>
            <List sx={{width: '90%'}}>
                <ListItem>
                    <ListItemIcon><FlatwareRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Cuisine" secondary="Espace où les voyageurs peuvent cuisiner"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Réfrigérateur"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MicrowaveRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Four à micro-ondes"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FlatwareRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Équipements de cuisine de base" secondary="Casseroles et poêles, huile, sel et poivre"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FlatwareRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Vaisselle et couverts" secondary="Bols, baguettes, assiettes, tasses, etc."/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Congélateur"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CountertopsRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Lave-vaisselle"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Cuisinière à induction"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Four"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BlenderRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Bouilloire électrique"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CoffeeMakerRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Cafetière : cafetière filtre, cafetière à piston, Nespresso"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WineBarRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Verres à vin"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Grille-pain"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Plaques de cuisson"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OutdoorGrillRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Ustensiles de barbecue" secondary="Barbecue, charbon, brochettes en bambou ou en métal, etc."/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><TableBarRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Table à manger"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Extérieur" /></Divider>
            <List sx={{width: '90%'}} >
                <ListItem>
                    <ListItemIcon><LocalFloristRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Arrière-cour partagée – Clôture intégrale" secondary="Un espace ouvert du logement généralement recouvert d'herbe"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><DeckRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Mobilier d'extérieur"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><DeckRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Espace repas en plein air"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OutdoorGrillRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Cuisine extérieure : privé(e)"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OutdoorGrillRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Barbecue"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BeachAccessRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Produits indispensables pour la plage" secondary="Serviettes de plage, parasol, couverture de plage, matériel de plongée avec tuba"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BeachAccessRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Chaises longues"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Parking et installations" /></Divider>
            <List sx={{width: '90%'}} >
                <ListItem>
                    <ListItemIcon><DirectionsCarRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Parking gratuit sur place"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><PoolRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Piscine Partagé extérieure (disponible à certaines périodes, ouverture 24h/24)" secondary="Disponible entre mai et oct."/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><HotTubRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Jacuzzi privé"/>
                </ListItem>
            </List>

            <Divider flexItem variant={'middle'}><Chip label="Services" /></Divider>
            <List sx={{width: '90%', mb: '1em'}} >
                <ListItem>
                    <ListItemIcon><KeyRounded color={'info'}/></ListItemIcon>
                    <ListItemText primary="Clés remises par l'hôte"/>
                </ListItem>
            </List>
        </>
    );
}