import { useRef } from "react";

function ColorBg() {
  const backgroundColorRef = useRef(null);

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    backgroundColorRef.current.style.backgroundColor = selectedColor;
  };

  return (
    <div ref={backgroundColorRef} style={{height:'100vh',}}>
      <h1 style={{width:'100vh'}}>Choose Color</h1>
      <select
        style={{ padding: "30px 40px", fontSize: "26px",width:'100%' }}
        onChange={handleColorChange}
      >
        <option value="Select">Select</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default ColorBg;
