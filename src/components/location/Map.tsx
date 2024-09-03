import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";
import { Place } from "./types";

const defaultPosition: LatLngTuple = [40.4168, -3.7038];

interface Props {
  selectPosition: Place | null;
}

export const Map = ({ selectPosition }: Props) => {
  const ResetCenterView = ({
    selectPosition,
  }: {
    selectPosition: Place | null;
  }) => {
    const map = useMap();

    useEffect(() => {
      if (selectPosition) {
        map.setView(L.latLng(selectPosition?.lat, selectPosition?.lon), 11, {
          animate: true,
        });
      }
    }, [selectPosition]);

    return null;
  };

  const position: LatLngTuple = selectPosition
    ? [selectPosition.lat, selectPosition.lon]
    : defaultPosition;

  return (
    <MapContainer
      className="border-2 border-black global-animation flex lg:w-[70%] w-full h-screen rounded-lg shadow-lg sticky"
      center={position}
      zoom={6}
      attributionControl={false}
    >
      <TileLayer url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=tyKLCsc6j03XnPCzj7C6" />

      {selectPosition && (
        <Marker position={position}>
          <Popup>
            <div className="flex flex-col">
              <h1 className="font-bold">{selectPosition.popup}</h1>
              <p>{selectPosition.description}</p>
            </div>
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
};

export default Map;
