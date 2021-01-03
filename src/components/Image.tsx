import React from 'react';

export interface ImageProp {
  src: string
  alt: string
}

export const Image: React.FC<ImageProp> = ({ src, alt }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={`${src}.webp`} />
      <source type="image/jpeg" srcSet={`${src}.jpg`} />
      <img src={`${src}.jpg`} alt={alt} />
    </picture>
  )
}
