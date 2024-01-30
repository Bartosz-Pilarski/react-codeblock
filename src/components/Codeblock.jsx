import { useState } from "react"
import "./Codeblock.scss"

const CopyButton = ({ content }) => {
  const [buttonLabel, setButtonLabel] = useState("copy")
  return (
    <div 
      className="codeblock-copy" 
      onClick={() => {
      navigator.clipboard.writeText(content)
      setButtonLabel("copied!")
      setTimeout(() => {
        setButtonLabel("copy")
      }, 1000);
      }}
    > 
    {buttonLabel}
    </div>
  )
}

const Code = ({ content }) => {
  const lines = content.split("\n")

  let count = 0
  return (
  <pre className="codeblock-inner">
    <CopyButton content={content}/>
    {
      lines.map((line) => { 
        count += 1
        return (
          <code key={count}>
            <span className="codeblock-counter unselectable">
              {count}
            </span>
            <span className="codeblock-codeline">
              {line+"\n"}
            </span>
          </code>  
        )
      })
    }
  </pre>
  )
}

// Separate component for displaying the author. Prefers github users and determines the name and pfp by the github link. Also accepts a simple username.
const UserPlaque = ({github, user}) => {
  if(github) {
    const username = github.split("/").reverse()[0]
    return (<span> <a href={github} target="_blank"> {username} <img src={`https://avatars.githubusercontent.com/${username}`} alt="" /> </a> </span>)
  } else {
    return (<span> {user} </span>)
  }
}

// Displays code title and the author below the code snippet
const Overview = ({ overview: {title, github, user} }) => {
  return(
    <div className="codeblock-overview">
      {title ? (<span> {title} </span>) : ""}
      {(github || user) ? (<UserPlaque github={github ? github : false} user={user ? user : false}/>) : ""}
    </div>
  )
}

const Codeblock = ({ code, overview }) => {
    return(
        <div className="codeblock-wrapper">
            <Code content={code} />

            <Overview overview={overview}/>
        </div>
    )
} 

export default Codeblock