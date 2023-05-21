
import CuisneImg from "../../assets/img/cuisine.jpg";
import ChambreImg from "../../assets/img/chambre.jpg";
import TerrainBouleImg from "../../assets/img/terrainBoule.jpg";
import SalonImg from "../../assets/img/salon.jpg";
import TerrasseImg from "../../assets/img/terrasse.jpg";
import {ImageList, ImageListItem} from "@mui/material";

export default function Picture() {


    return (
        <ImageList
            variant="quilted"
            cols={4}
            rowHeight={190}
        >
            <ImageListItem cols={2} rows={2}>
                <img src={CuisneImg} alt={'cuisine'}/>
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <img src={ChambreImg} alt={'chambre'}/>
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <img src={SalonImg} alt={'salon'}/>
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <img src={TerrasseImg} alt={'terrasse'}/>
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <img src={TerrainBouleImg} alt={'terrain de pétanque'}/>
            </ImageListItem>
        </ImageList>
    );
}