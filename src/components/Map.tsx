import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

function Map() {
  const [center, setCenter] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });

  const [zoom, setZoom] = useState(11);

  return (
    <section className={"h-screen w-full"}>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

export default Map;
