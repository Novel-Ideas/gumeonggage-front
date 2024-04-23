/**@jsxImportSource @emotion/react */
import { useMutation } from "react-query";
import * as s from "./style";
import { useState } from "react";

function PlayMap() {
    const mutation = useMutation(async (requestData) => {
        const response = await fetch(
            "https://places.googleapis.com/v1/places:searchNearby",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": "AIzaSyBfW0NY0PPlXdijK-njQI4HbCDrDZwy5Ko",
                    "X-Goog-FieldMask": "*",
                },
                body: JSON.stringify(requestData),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    });

    const handleClick = () => {
        mutation.mutate({
            includedTypes: ["tourist_attraction"],
            maxResultCount: 10,
            locationRestriction: {
                circle: {
                    center: {
                        latitude: 35.15246,
                        longitude: 129.059681,
                    },
                    radius: 500.0,
                },
            },
        });
    };

    return (
        <div css={s.layout}>
            <div css={s.mapContainer}>
                <button onClick={handleClick}>요청</button>
            </div>
        </div>
    );
}

export default PlayMap;
