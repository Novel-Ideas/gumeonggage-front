/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import useCurrentLocation from "../../../hooks/useCrruntLocation";
import PageModal from "../../pageComponents/pageModal/PageModal";
import { useRecoilState } from "recoil";
import { playDataState } from "../../../atoms/playDataAtom";

const containerStyle = {
    width: "95%",
    height: "90%",
    border: "3px solid #dbdbdb",
    borderRadius: "30px",
};

// const center = {
//     lat: -3.745,
//     lng: -38.523,
// };

function PlayMap() {
    const [playData, setPlayData] = useRecoilState(playDataState);
    const [playLocation, setPlayLocation] = useState({});
    const { location } = useCurrentLocation();
    const [map, setMap] = useState(<></>);

    useEffect(() => {
        setPlayLocation({
            lat: playData.location.latitude,
            lng: playData.location.longitude,
        });
    }, [playData]);
    useEffect(() => {
        setMap(() => (
            <LoadScript googleMapsApiKey="AIzaSyBfW0NY0PPlXdijK-njQI4HbCDrDZwy5Ko">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={playLocation}
                    zoom={17}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker position={playLocation} />
                    <></>
                </GoogleMap>
            </LoadScript>
        ));
    }, [location]);

    return (
        <PageModal>
            <div css={s.layout}>{map}</div>;
        </PageModal>
    );
}

export default PlayMap;
