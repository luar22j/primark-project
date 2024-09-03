import React, { useRef, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "./types";
import { useTranslation } from "react-i18next";
import "../../assets/css/location/list.css";

interface Props {
  selectPosition: Place | null;
  setSelectPosition: (place: Place) => void;
}

export const SearchBox = ({ selectPosition, setSelectPosition }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Estado de carga
  const autocompleteRef = useRef<any>(null);

  const { t } = useTranslation();

  const tiendas = t("shops", { returnObjects: true });

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en km
  };

  const findNearestStore = (latitude: number, longitude: number) => {
    let nearestStore = null;
    let minDistance = Infinity;

    Object.values(tiendas).forEach((item) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        item.lat,
        item.lon
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearestStore = item;
      }
    });

    return nearestStore;
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      setLoading(true); // Empieza la carga
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const nearestStore = findNearestStore(latitude, longitude);
          if (nearestStore) {
            setSelectPosition(nearestStore);
          } else {
            alert(t("location.noNearbyStores"));
          }
          setLoading(false); // Termina la carga
        },
        (error) => {
          alert(t("location.locationError"));
          setLoading(false); // Termina la carga
        }
      );
    } else {
      alert(t("location.notSupported"));
    }
  };

  const sortedTiendas = Object.values(tiendas).sort((a, b) =>
    a.display_name.localeCompare(b.display_name)
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && autocompleteRef.current) {
      const options = autocompleteRef.current.querySelectorAll("ul > li");
      if (options.length > 0) {
        const firstOption = options[0];
        const value = firstOption.getAttribute("data-option");
        if (value) {
          const selectedPlace = Object.values(tiendas).find(
            (item) => item.display_name === value
          );
          if (selectedPlace) {
            setSelectPosition(selectedPlace);
          }
        }
      }
    }
  };

  return (
    <div className="global-animation lg:w-[30%] w-full flex flex-col items-center gap-3 rounded-lg">
      <div className="flex sm:flex-row flex-col justify-between w-full">
        <h2 className="ml-1 text-gray-500">{t("location.text")}</h2>
        <a
          className="a-animation ml-1 sm:ml-0 cursor-pointer"
          onClick={handleUseMyLocation}
        >
          {t("location.link")}
        </a>
      </div>

      <Autocomplete
        freeSolo
        options={Object.values(tiendas).map((item) => item.display_name)}
        onInputChange={(event, value) => setSearchText(value)}
        onChange={(event, value) => {
          const selectedPlace = Object.values(tiendas).find(
            (item) => item.display_name === value
          );
          if (selectedPlace) {
            setSelectPosition(selectedPlace);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("input.search")}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#03a4d8",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "#03a4d8",
                },
              },
            }}
          />
        )}
        ref={autocompleteRef}
        className="w-full"
      />

      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <CircularProgress style={{ color: "#03a4d8" }} />
        </div>
      ) : (
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="w-full h-full overflow-y-scroll"
        >
          {sortedTiendas.map((item) => (
            <div className="list" key={item.osm_id}>
              <ListItem button onClick={() => setSelectPosition(item)}>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={item.display_name} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBox;
