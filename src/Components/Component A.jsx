import { useState } from "react";
import ComponentB from "./Components B";

const ComponentA=()=>{
  const [cendol, setCendol] = useState(2);

  const handleCendolValueChange = (value) => {
    setCendol(value);
  };

  return (
    <div>
      <h1> Assignment-2</h1>
      <ComponentB cendolValue={cendol} onCendolValueChange={handleCendolValueChange} />
    </div>
  );
}

export default ComponentA;