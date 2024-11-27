'use client';
import React, { useEffect, useState } from "react";

export function useBrowserWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(screen.width);
  }, []);

  const isMb = React.useMemo(() => width <= 768, [width]);
  return {
    width,
    isMb,
  };
}
