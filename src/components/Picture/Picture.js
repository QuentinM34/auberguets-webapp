
import CuisneImg from "../../assets/img/cuisine.jpg";
import ChambreImg from "../../assets/img/chambre.jpg";
import TerrainBouleImg from "../../assets/img/terrainBoule.jpg";
import SalonImg from "../../assets/img/salon.jpg";
import TerrasseImg from "../../assets/img/terrasse.jpg";
import {Box, ImageList, ImageListItem, useMediaQuery, useTheme} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useState} from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Picture() {
    const isDesktop = useMediaQuery('(min-width:700px)');
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        isDesktop
            ?
            <ImageList
                variant="quilted"
                cols={4}
                rowHeight={isDesktop ? 190 : 80}
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
            :
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                sx={{margin: '1em 0'}}
            >
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src={CuisneImg}
                        alt={'Cuisine'}
                    />
                </div>
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src={ChambreImg}
                        alt={'Chambre'}
                    />
                </div>
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src={SalonImg}
                        alt={'Chambre'}
                    />
                </div>
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src={TerrasseImg}
                        alt={'Chambre'}
                    />
                </div>
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src={TerrainBouleImg}
                        alt={'Chambre'}
                    />
                </div>
            </AutoPlaySwipeableViews>
    );
}