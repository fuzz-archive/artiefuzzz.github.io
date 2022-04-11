import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';

const customLoader = ({ src }: ImageLoaderProps) => {
  return `../static/${src}`;
};

const Image = (props: ImageProps) => {
  return <NextImage loader={customLoader} {...props} />;
};

export default Image