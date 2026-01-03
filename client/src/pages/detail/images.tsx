import type { FC } from 'react'

interface Props {
    images: string[];
}

const Images:FC<Props> = ({images}) => {
  return (
    <div className='grid grid-cols-2  gap-6 h-fit'>
        {images.map((image,key) => <img key={key} src={image} alt="product" className='w-full h-full  obejct-cover' />)}
    </div>
  );
};

export default Images;