import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

// ✅ Import images correctly
import headphoneImg from "./assets/headphone.jpg";
import keyboardImg from "./assets/images.jpg";
import watchImg from "./assets/images (1).jpg";

function App() {

  const ProductCard = ({ name, price, image, inStock }) => {
    return (
      <Card
        sx={{
          width: 320,
          borderRadius: 4,
          boxShadow: 3,
          paddingBottom: 2
        }}
      >
        <CardMedia
          component="img"   // ✅ Important
          height="200"
          image={image}     // ✅ Dynamic image
          alt={name}
        />

        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, marginTop: 1 }}
          >
            ${price}
          </Typography>

          <Chip
            label={inStock ? "In Stock" : "Out of Stock"}
            color={inStock ? "success" : "error"}
            sx={{
              marginTop: 2,
              fontSize: "1rem",
              padding: "18px 10px",
              borderRadius: "25px"
            }}
          />
        </CardContent>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        flexWrap: "wrap",
        padding: 5
      }}
    >
      <ProductCard
        name="Wireless Headphones"
        price="129.99"
        image={headphoneImg}
        inStock={true}
      />

      <ProductCard
        name="Mechanical Keyboard"
        price="89.99"
        image={keyboardImg}
        inStock={false}
      />

      <ProductCard
        name="Smart Watch"
        price="199.99"
        image={watchImg}
        inStock={true}
      />
    </Box>
  );
}

export default App;