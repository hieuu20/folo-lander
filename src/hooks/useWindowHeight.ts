import { useState, useEffect } from "react";

export function useWindowHeight(): number {
  const isClient = typeof window !== "undefined";

  const getHeight = () => (isClient ? window.innerHeight : 0);

  const [height, setHeight] = useState<number>(getHeight);

  useEffect(() => {
    if (!isClient) return;

    // const onResize = () => {
    //   setHeight(window.innerHeight);
    // };

    // cập nhật ngay (trường hợp kích thước thay đổi trước khi event được gắn)
    setHeight(window.innerHeight);

    // window.addEventListener("resize", onResize);
    // return () => window.removeEventListener("resize", onResize);
  }, [isClient]);

  return height;
}
