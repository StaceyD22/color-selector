import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import colorRow from '@/components/colorRow';

export default function Home() {
  const initialStates = {
    colors: [
      {
        color: "#CD5C5C",
        colorName: "IndianRed",
      },
      {
        color: "#F08080",
        colorName: "LightCoral",
      },
      {
        color: "#FA8072",
        colorName: "Salmon",
      },
      {
        color: "#E9967A",
        colorName: "DarkSalmon",
      },
      {
        color: "#FFA07A",
        colorName: "LightSalmon"
      },
      {
        color: "#DC143C",
        colorName: "Crimson",
      },
      {
        color: "#FF0000",
        colorName: "Red",
      },
      {
        color: "#B22222",
        colorName: "FireBrick",
      },
      {
        color: "#FFC0CB",
        colorName: "Pink",
      },
      {
        color: "#FFB6C1",
        colorName: "LightPink",
      },
      {
        color: "#FF69B4",
        colorName: "HotPink",
      },
      {
        color: "#FF1493",
        colorName: "DeepPink",
      },
    ],
  };

  const [colors, setColors] = useState( initialStates.colors );
  
  return (
    <>
      <Container fluid>
        <colorRow colors={colors} />
      </Container>
    </>
  )
}
