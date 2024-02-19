function App() {
  return <div>
    {/* <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
    <br></br>
    <CardWrapper innerComponent={<TextComponent2 />}></CardWrapper> */}
    <CardWrapper>
      Hi There 
    </CardWrapper>
    <CardWrapper>
      <TextComponent />
    </CardWrapper>
    <CardWrapper>
      <CardWrapper>
        <TextComponent2 />
      </CardWrapper>
    </CardWrapper>
  </div>
}
function CardWrapper({children}) {
  return <div style={{border:"2px solid black", padding: 20}}>
    {children}
  </div>
}
function TextComponent() {
  return <div>
    Hi there from Text Component
  </div>
}
function TextComponent2() {
  return <div>
    Hello there
  </div>
}

export default App
