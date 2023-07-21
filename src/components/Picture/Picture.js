
import CuisineImg from "../../assets/img/cuisine.jpg";
import ChambreImg from "../../assets/img/chambre.jpg";
import TerrainBouleImg from "../../assets/img/terrainBoule.jpg";
import SalonImg from "../../assets/img/salon.jpg";
import TerrasseImg from "../../assets/img/terrasse.jpg";
import {Button, ImageList, ImageListItem, Stack, useMediaQuery} from "@mui/material";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Picture() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    const imageList = [
        {src: CuisineImg, alt: 'Cuisine'},
        {src: ChambreImg, alt: 'Chambre'},
        {src: TerrainBouleImg, alt: 'Terrain de pétanque'},
        {src: SalonImg, alt: 'Salon'},
        {src: TerrasseImg, alt: 'Terrasse'}
    ];

    return (
        isDesktop
            ?
            <ImageList
                variant="quilted"
                cols={4}
                rowHeight={isDesktop ? 190 : 80}
                sx={{position: 'relative'}}
            >
                <ImageListItem cols={2} rows={2}>
                    <img src={CuisineImg} alt={'cuisine'}/>
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
                <Button variant="contained" color="secondary" sx={{position: 'absolute', bottom: 10, right: 10}}>Voir plus...</Button>
            </ImageList>
            :
            <Stack sx={{position: 'relative'}}>
                <Carousel useKeyboardArrows={true} showStatus={false} showThumbs={false}>
                    {imageList.map(image =>
                        <img
                            key={'image' + image.alt}
                            style={{
                                height: 255,
                                display: 'block',
                                overflow: 'hidden',
                                width: '100%',
                            }}
                            src={image.src}
                            alt={image.alt}
                        />
                    )}
                </Carousel>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        height: '35px'
                    }}
                >
                    Voir plus...
                </Button>
            </Stack>
    );
}