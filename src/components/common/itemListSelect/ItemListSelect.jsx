import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemListSelect = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    navigate(`/products/${event.target.value}`);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="category">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        onChange={handleChange}
        label="Category"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="AlimentosBebidas">Alimentos & Bebidas</MenuItem>
        <MenuItem value="Hogar">Hogar</MenuItem>
        <MenuItem value="Decoración">Decoración</MenuItem>
      </Select>
    </FormControl>
  );
};
