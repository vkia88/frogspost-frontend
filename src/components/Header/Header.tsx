import { Button, Container, CssBaseline, Skeleton } from "@mui/material";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Box } from "../../redux/feature/box";
import { setBoxes } from "../../redux/feature/boxesSlice";
import { Location } from "../../redux/feature/location";
import { setLocation } from "../../redux/feature/locationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ajaxService from "../../services/AjaxService";
import { defaultBoxes } from "./helper";

export default function Header() {
  const dispatch = useAppDispatch();
  const [locations, setLocations] = useState<Location[]>([]);
  const selectedLocation = useAppSelector((state) => state.location.value);

  function loadDefaultBoxes() {
    dispatch(setBoxes(defaultBoxes));
  }

  const handleLocationClick = (location: Location) => {
    dispatch(setLocation(location));

    ajaxService.get(`boxes/location/${location.id}`).then((response) => {
      const boxes = (response as AxiosResponse).data.boxes;

      for (const box of boxes) {
        box.empty = Boolean(!box.parcelId);
      }

      dispatch(
        setBoxes(boxes.sort((a: Box, b: Box) => a.size.localeCompare(b.size)))
      );
    });
  };

  useEffect(() => {
    ajaxService.get("locations").then((response) => {
      const locations = (response as AxiosResponse).data;

      setLocations(locations as Location[]);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <h1>Locker</h1>
        {/* <Button onClick={loadDefaultBoxes}>Default</Button> */}
        {locations.length ? (
          locations.map((location) => (
            <Button
              key={location.id}
              onClick={() => handleLocationClick(location)}
              variant={
                selectedLocation?.id === location.id ? "outlined" : "text"
              }
            >
              {location.name}
            </Button>
          ))
        ) : (
          <>
            <Skeleton variant="rectangular" width={100} height={40} />
          </>
        )}
      </Container>
    </>
  );
}
