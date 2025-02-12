"use client";
import React from "react";
import { useState } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { pcParts } from "./data";
import { Component } from "./types";
import ComponentModal from "./ComponentModal";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import PowerIcon from "@mui/icons-material/Power";
import CaseIcon from "@mui/icons-material/BusinessCenter";
import MotherboardIcon from "@mui/icons-material/DeveloperBoard";

const icons: { [key: string]: React.ReactElement } = {
  CPU: <ComputerIcon fontSize="large" />,
  Motherboard: <MotherboardIcon fontSize="large" />,
  RAM: <MemoryIcon fontSize="large" />,
  Storage: <StorageIcon fontSize="large" />,
  SMPS: <PowerIcon fontSize="large" />,
  Cabinet: <CaseIcon fontSize="large" />,
};

const PCBuild = () => {
  const [selectedParts, setSelectedParts] = useState<{ [key: string]: Component | null }>({
    CPU: null,
    Motherboard: null,
    RAM: null,
    Storage: null,
    SMPS: null,
    Cabinet: null,
  });
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => setModalType(type);
  const closeModal = () => setModalType(null);

  const getComponentList = (type: string): Component[] => {
    switch (type) {
      case "CPU":
        return pcParts.cpus;
      case "Motherboard":
        return pcParts.motherboards;
      case "RAM":
        return pcParts.ram;
      case "Storage":
        return pcParts.storage;
      case "SMPS":
        return pcParts.smps;
      case "Cabinet":
        return pcParts.cabinets;
      default:
        return [];
    }
  };

  const handleSelect = (type: string, component: Component) => {
    setSelectedParts((prev) => ({ ...prev, [type]: component }));
  };

  return (
    <Box
      sx={{
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#FFD700" }}>
        Build Your PC
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {Object.keys(selectedParts).map((part) => (
          <Grid item xs={12} sm={6} key={part}>
            <Card
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "10px",
              }}
              onClick={() => openModal(part)}
            >
              {selectedParts[part] ? (
                <>
                  <CardMedia component="img" height="140" image={selectedParts[part]?.image} alt={part} />
                  <CardContent>
                    <Typography variant="h6">{selectedParts[part]?.name}</Typography>
                  </CardContent>
                </>
              ) : (
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {icons[part]}
                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    Choose {part}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      <ComponentModal
        open={Boolean(modalType)}
        onClose={closeModal}
        components={getComponentList(modalType || "")}
        onSelect={(component) => handleSelect(modalType || "", component)}
      />
    </Box>
  );
};

export default PCBuild;
