import { PCParts } from "./types";

export const pcParts: PCParts = {
  cpus: [
    { id: "cpu1", name: "Intel i7 12700K", image: "https://computechstore.in/wp-content/uploads/2022/10/Intel-i7-12th-Gen-K-2.jpg", details: "12-core, 20-thread processor", compatibleWith: ["mb1", "mb2"] },
    { id: "cpu2", name: "AMD Ryzen 7 5800X", image: "https://computechstore.in/wp-content/uploads/2022/10/Ryzen-7-5700G.jpg", details: "8-core, 16-thread processor", compatibleWith: ["mb3", "mb4"] },
  ],
  motherboards: [
    { id: "mb1", name: "ASUS Z690", image: "https://computechstore.in/wp-content/uploads/2025/02/2000-16.jpg", details: "Supports DDR5 RAM", compatibleWith: ["cpu1", "ram1", "ram2"] },
    { id: "mb2", name: "MSI B660", image: "https://computechstore.in/wp-content/uploads/2025/02/2000-12.jpg", details: "Affordable Intel motherboard", compatibleWith: ["cpu1", "ram1"] },
    { id: "mb3", name: "ASUS X570", image: "https://computechstore.in/wp-content/uploads/2025/02/2000-12.jpg", details: "High-end AMD motherboard", compatibleWith: ["cpu2", "ram3", "ram4"] },
    { id: "mb4", name: "Gigabyte B550", image: "https://computechstore.in/wp-content/uploads/2025/02/2000-12.jpg", details: "Mid-range AMD board", compatibleWith: ["cpu2", "ram3"] },
  ],
  ram: [
    { id: "ram1", name: "Corsair 16GB DDR4", image: "https://computechstore.in/wp-content/uploads/2025/02/CORSAIR-Dominator-Titanium-96GB-2x48GB-DDR5-6600Mhz-CL32-Memory-White-1.jpg", details: "High-speed DDR4 RAM", compatibleWith: ["mb1", "mb2"] },
    { id: "ram2", name: "Kingston 16GB DDR4", image: "https://computechstore.in/wp-content/uploads/2025/02/Kingston-Fury-Beast-RGB-32GB-2x16GB-6000MHz-DDR5-CL30-RAM-White.jpg", details: "Reliable DDR4 RAM", compatibleWith: ["mb1"] },
    { id: "ram3", name: "G.Skill 16GB DDR4", image: "https://computechstore.in/wp-content/uploads/2025/02/Kingston-Fury-Beast-RGB-32GB-2x16GB-6000MHz-DDR5-CL30-RAM-White.jpg", details: "Premium RAM", compatibleWith: ["mb3", "mb4"] },
    { id: "ram4", name: "Teamgroup 32GB DDR4", image: "https://computechstore.in/wp-content/uploads/2025/02/Kingston-Fury-Beast-RGB-32GB-2x16GB-6000MHz-DDR5-CL30-RAM-White.jpg", details: "High-capacity RAM", compatibleWith: ["mb3"] },
  ],
  storage: [
    { id: "storage1", name: "Samsung 1TB NVMe SSD", image: "https://computechstore.in/wp-content/uploads/2025/02/Crucial-T705-2TB-PCIe-Gen5-NVMe-M.2-SSD1.jpg", details: "Ultra-fast PCIe NVMe SSD" },
    { id: "storage2", name: "WD 2TB HDD", image: "https://computechstore.in/wp-content/uploads/2025/02/Crucial-T705-2TB-PCIe-Gen5-NVMe-M.2-SSD1.jpg", details: "Reliable hard drive" },
  ],
  smps: [
    { id: "smps1", name: "Corsair 750W", image: "https://computechstore.in/wp-content/uploads/2025/02/Gigabyte-P550SS-ICE-80-PLUS-Silver-Power-Supply-White-1.jpg", details: "High-efficiency power supply" },
    { id: "smps2", name: "Cooler Master 650W", image: "https://computechstore.in/wp-content/uploads/2025/02/Gigabyte-P550SS-ICE-80-PLUS-Silver-Power-Supply-White-1.jpg", details: "Reliable 650W PSU" },
  ],
  cabinets: [
    { id: "cabinet1", name: "NZXT H510", image: "https://computechstore.in/wp-content/uploads/2022/10/H510i-R-1.jpg", details: "Minimalistic case with airflow" },
    { id: "cabinet2", name: "Lian Li PC-O11", image: "https://computechstore.in/wp-content/uploads/2025/01/a3-w-000-a.jpeg", details: "Premium case with glass panels" },
  ],
};
