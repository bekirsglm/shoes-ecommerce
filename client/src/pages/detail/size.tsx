import { useState, type FC } from "react";
import { SIZES } from "../../constants";

interface Props {
    sizes: string;
}

const Size:FC<Props> = ({sizes}) => {

  const [selected, setSelected] = useState<string>("");
  
  const toogle = (newValue:string) => {
    setSelected(selected === newValue ? "" : newValue);
  };
  return (
    <div>
      <h2 className="font-semibold mb-3">Numara Seçiniz</h2>

      <div className="
      grid grid-cols-5 gap4">
       {SIZES.map((size) => { 
        // ekrana basıacak ola numara stokta var mı
        const inStock =sizes.split(",").includes(size)

        //ekrana basılan numara seçili mi
        const isSelected = selected === size;
        
        return (<button
        onClick={() => toogle(size)}
        disabled={!inStock}
         className={`py-2 px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#d2d1d3] disabled:text-zinc-[#8f8c91] ${isSelected ? "bg-black text-white" : "bg-white"}`}>
          {size}
          </button>
          );
       })} 
      </div>
    </div>
  );
};

export default Size;