
import {
    MapContainer, Tooltip, TileLayer, LayerGroup, Circle, Rectangle
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function Map() {

    const bounds = [
        [43.669958, 3.324574],
        [43.641330, 3.403281],
    ]

    return (
        <MapContainer
            key={Date.now()}
            center={[43.5372574, 3.4985739]}
            zoom={10}
            style={{height: '100%', width: '100%'}}
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <LayerGroup>
                <Rectangle bounds={bounds} pathOptions={{ color: 'blue' }}>
                    <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                        Lac du Salagou (20 min)
                    </Tooltip>
                </Rectangle>
                <Circle
                    center={[43.5372574, 3.4985739]}
                    pathOptions={{fillColor: 'transparent'}}
                    radius={1000}
                >
                    <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                        Gîte
                    </Tooltip>
                </Circle>
            </LayerGroup>
        </MapContainer>
    );
};