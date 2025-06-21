import { useEffect, useRef } from "react";

const PinterestBoard = () => {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).PinUtils && (window as any).PinUtils.build) {
      (window as any).PinUtils.build();
    }
  }, []);

  return (
    <div ref={boardRef}>
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="400"
        data-pin-scale-height="240"
        data-pin-scale-width="80"
        href="https://www.pinterest.com/YOUR_USERNAME/YOUR_BOARD/"
      >
        {/* Pinterest board will load here */}
      </a>
    </div>
  );
};

export default PinterestBoard;
