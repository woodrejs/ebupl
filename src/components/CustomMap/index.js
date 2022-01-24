import React from "react";
import styled from "styled-components";
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from "react-google-maps";

function CustomMap() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 51.095349855813886, lng: 16.980084233499873 }}
    >
      <Marker position={{ lat: 51.095349855813886, lng: 16.980084233499873 }} />
    </GoogleMap>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(CustomMap));

const StyledMap = styled.div`
  background-color: white;
  height: 300px;
  width: 100%;
`;


/*

+ tlumaczenia 



+ mail 
+ APPID,PAGEID messanger
+ konto na google 
+ hosting 
+ domeny

domeny.pl



*/


