import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';

const customLoader = ({ src }: ImageLoaderProps) => {
  const [name, extension] = src.split('.');
  return `../static/${name}.${extension}`;
};

const Image = (props: ImageProps) => {
  return <NextImage loader={customLoader} {...props} />;
};

export default Image