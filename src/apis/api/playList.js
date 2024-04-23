export const playListDataRequest = async (data) => {
    return await fetch("https://places.googleapis.com/v1/places:searchNearby", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": "AIzaSyBfW0NY0PPlXdijK-njQI4HbCDrDZwy5Ko",
            "X-Goog-FieldMask": "*",
        },
        body: JSON.stringify(data),
    });
};
