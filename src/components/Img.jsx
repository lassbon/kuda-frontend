import defaultImg from "../img/zulfah.jpeg"

function Img(props) {
  const { imgLink, altText } = props

  return (
    <img src={imgLink || defaultImg} alt={altText} width={100} height={100} />
  )
}

export default Img
