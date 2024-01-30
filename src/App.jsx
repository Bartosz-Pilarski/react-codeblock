import Codeblock from "./components/Codeblock.jsx"

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
    <div>
      <h1>React Codeblock</h1>
      <h2>Simple React component for displaying code snippets</h2>
      <Codeblock code={text} overview={meta}/>
    </div>
  )
}

export default App
