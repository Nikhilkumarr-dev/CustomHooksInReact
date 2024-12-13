import { useEffect } from "react";
import { useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();//usig ref variable can store the value even after rerender

  console.log("rerender happend with new value"+value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  console.log("returned" + ref.current);
  return ref.current;
};
//it returns first ,.effect gets called


// steps that are occured 
// creates the ref with an initial value of undefined
// returns the ref’s undefined value
// ComponentA finishes its rendering
// the ref gets assigned the value “1”
