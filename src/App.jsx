import Codeblock from "./components/codeblock.jsx"

const App = () => {

  const text =
`const codeblockShowcase = (visitors) => {
  visitors.forEach((visitor) => visitor.thank("For coming"))
  console.log("Hello World!")
}`
  
  const title = "Showcase code"

  const meta = {
    title: title,
    github: "https://github.com/Bartosz-Pilarski",
    user: "Bartosz-Pilarski"
  } 

  return (
    <div className="main-wrapper">
      <div className="main-headers">
        <h1>React Codeblock</h1>
        <h2>Simple React component for displaying code snippets</h2>
      </div>
      <div className="main-showcase">
        <p> Simple, easy-to-use, and open-source React component for displaying code snippets </p>
        <Codeblock code={text} overview={meta}/>
        <p> Source code available on <a href="https://github.com/Bartosz-Pilarski/react-codeblock" target="_blank">GitHub</a></p>
      </div>
      <footer>
        2024, site and code by <a href="https://github.com/Bartosz-Pilarski" target="_blank"> Bartosz Pilarski </a>
      </footer>
    </div>
  )
}

export default App
