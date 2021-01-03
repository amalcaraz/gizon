import React from 'react';
import styled from 'styled-components';
import { device } from '../styles';

export interface ImageSrcProp {
  def: any
  jpg?: any
  png?: any
  webp?: any
}

export interface ImageProp {
  alt: string
  src: string
  className?: any
}

const Picture = styled.picture`
  display: contents;
`

function getExt(src: string): [string, string] {
  const aux = src.split('.')
  const ext = aux[aux.length - 1]
  const url = aux.slice(0, aux.length - 1).join('.')

  return [url, ext]
}

export const Image: React.FC<ImageProp> = ({ src, alt, className }) => {
  const [url, ext] = getExt(src)

  const res = [
    { media: device.desktop, srcSet: imgDeviceMap(url, device.desktop, ext) },
    { media: device.laptop, srcSet: imgDeviceMap(url, device.laptop, ext) },
    { media: device.tablet, srcSet: imgDeviceMap(url, device.tablet, ext) },
    { media: device.mobileS, srcSet: imgDeviceMap(url, device.mobileS, ext) }
  ]

  const defSrc = `${url}-l.${ext}`
  const defSrcSet = `${url}-m.${ext}, ${url}-l.${ext} 2x`

  return (
    <Picture>
      {res.map(({ media, srcSet }) => (
        <React.Fragment key={media}>
          <source type="image/webp" srcSet={srcSet[0]} media={media} />
          <source srcSet={srcSet[1]} media={media} />
        </React.Fragment>
      ))}
      <img className={className} src={defSrc} srcSet={defSrcSet} alt={alt} />
    </Picture>
  )
}

function imgDeviceMap(url: string, dev: any, ext: string) {
  switch (dev) {
    case device.desktop:
      return [
        `${url}-xl.webp`,
        `${url}-xl.${ext}`
      ]
    case device.laptop:
      return [
        `${url}-l.webp, ${url}-xl.webp 2x`,
        `${url}-l.${ext}, ${url}-xl.${ext} 2x`
      ]
    case device.tablet:
      return [
        `${url}-m.webp, ${url}-l.webp 2x`,
        `${url}-m.${ext}, ${url}-l.${ext} 2x`
      ]
    default:
      return [
        `${url}-s.webp, ${url}-m.webp 2x`,
        `${url}-s.${ext}, ${url}-m.${ext} 2x`
      ]
  }
}

export function bgImage({ src }: { src: string }) {
  const [url, ext] = getExt(src)

  return `
    background-image: url(${url}-l.${ext});

    ${bgImageLine(url, ext, ['s', 'm'])}

    @media ${device.tablet} {
      ${bgImageLine(url, ext, ['m', 'l'])}
    }

    @media ${device.laptop} {
      ${bgImageLine(url, ext, ['l', 'xl'])}
    }

    @media ${device.desktop} {
      ${bgImageLine(url, ext, ['xl', 'xl'])}
    }
  `
}

export function bgImageLine(url: string, ext: string, [x1, x2]: [string, string]) {
  return `
    background-image: 
      image-set(
        url(${url}-${x1}.${ext}) 1x,
        url(${url}-${x2}.${ext}) 2x
      );

    background-image: 
      image-set(
        url(${url}-${x1}.webp) 1x,
        url(${url}-${x2}.webp) 2x
      );
  `
}
