import { Button, ButtonGroup, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./counter.css";

export const Counter = ({ stock, count, setCount, size = "medium" }) => {
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };

  return (
    <ButtonGroup className={`button-group ${size}`}>
      <Button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 1}
      >
        <RemoveIcon fontSize="small" className={`counter-button ${size}`} />
      </Button>
      <TextField
        size="small"
        onChange={handleChange}
        value={count}
        className={`counter-input ${size}`}
      />
      <Button
        onClick={() => setCount((prev) => prev + 1)}
        disabled={count === stock}
      >
        <AddIcon fontSize="small" className={`counter-button ${size}`} />
      </Button>
    </ButtonGroup>
  );
};
