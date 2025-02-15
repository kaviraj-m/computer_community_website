"use client"; // Ensures it runs as a client component in Next.js

import React from "react";
import { Card } from "@raive-ui/core";
import { Button } from "@raive-ui/button";

const Test: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <Button variant="primary" size="large">Primary</Button>
      <Card
        title="Test Card"
        description="This is a test card."
        imageUrl="https://via.placeholder.com/300x200"
        footer={<Button variant="outline">View More</Button>}
      />
    </div>
  );
};

export default Test;
