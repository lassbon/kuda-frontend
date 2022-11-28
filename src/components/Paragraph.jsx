function Paragraph({ text, sizeVal = "12", widthVal }) {
  return <p style={{ fontSize: { sizeVal }, width: { widthVal } }}>{text}</p>
}

export default Paragraph
