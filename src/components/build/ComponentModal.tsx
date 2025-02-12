import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Component } from "./types";

interface ComponentModalProps {
  open: boolean;
  onClose: () => void;
  components: Component[];
  onSelect: (component: Component) => void;
}

const ComponentModal: React.FC<ComponentModalProps> = ({ open, onClose, components, onSelect }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredComponents = components.filter((component) => {
    return (
      component.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? component.compatibleWith?.includes(filter) : true)
    );
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: "20px",
          width: "80%",
          height: "80vh",
          margin: "auto",
          background: "#fff",
          borderRadius: "10px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "15px" }}>
          Select a Component
        </Typography>

        {/* 🔍 Search & 🗂️ Filter Row */}
        <Box sx={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <TextField
            fullWidth
            label="Search Components"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)} label="Filter">
              <MenuItem value="">All</MenuItem>
              {components
                .flatMap((comp) => comp.compatibleWith || [])
                .filter((v, i, a) => a.indexOf(v) === i)
                .map((compId) => (
                  <MenuItem key={compId} value={compId}>
                    {compId}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>

        {/* 🔲 Scrollable Components Grid */}
        <Box sx={{ overflowY: "auto", flex: 1, paddingRight: "10px" }}>
          <Grid container spacing={2}>
            {filteredComponents.map((component) => (
              <Grid item xs={12} sm={6} md={4} key={component.id}>
                <Card
                  onClick={() => {
                    onSelect(component);
                    onClose();
                  }}
                  sx={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                  }}
                >
                  <CardMedia component="img" height="140" image={component.image} alt={component.name} />
                  <CardContent>
                    <Typography variant="h6">{component.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {component.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ❌ Close Button */}
        <Button fullWidth variant="contained" color="error" sx={{ marginTop: "10px" }} onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ComponentModal;
