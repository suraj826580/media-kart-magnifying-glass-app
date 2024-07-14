import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GlassContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #000;
  overflow: hidden;
  pointer-events: none;
`;

const GlassContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  white-space: nowrap;
`;
const MagnifyingGlass = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const newScale = 1 + window.scrollY / 1000;
      setScale(newScale > 2 ? 2 : newScale);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GlassContainer
      style={{
        left: `${position.x - 100}px`,
        top: `${position.y - 100}px`,
        transform: `scale(${1 / scale})`,
      }}>
      <GlassContent style={{ transform: `scale(${scale})` }}>
        Magnified Text
      </GlassContent>
    </GlassContainer>
  );
};

export default MagnifyingGlass;
