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
    user: "Komrad-Jurij"
  }

  return (
    <Codeblock code={text} overview={meta}/>
  )
}

export default App
