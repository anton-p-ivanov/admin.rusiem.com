import type { TGetImageProps } from '../types';

const getImageProps: TGetImageProps = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  const image = new Image();

  reader.readAsDataURL(file);
  reader.onload = ({ target }) => {
    image.src = target?.result as string;
    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      resolve({ width, height, src: image.src });
    };
  };

  reader.onerror = () => {
    reject(new Error('Could not get image dimensions. Not an image?'));
  };
});

export default getImageProps;
