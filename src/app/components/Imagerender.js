import Image from 'next/legacy/image'
 
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
 
const Imagerender = ({src,alt}) => {
  return (
    <Image
      src={src}
      alt={alt}
    //   loader={myLoader}
    //   width={500}
    //   height={500}
    />
  )
}
export default Imagerender;