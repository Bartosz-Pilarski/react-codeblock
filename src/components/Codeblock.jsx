import "./Codeblock.scss"

const Code = ({ content }) => {
  const lines = content.split("\n")

  let count = 0
  return (
  <pre className="codeblock-inner">
    <div className="codeblock-copy" onClick={() => {
      navigator.clipboard.writeText(content)
    }}> copy </div>
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

const UserPlaque = ({github, user}) => {
  if(github) {
    const username = github ? github.split("/").reverse()[0] : user 
    return (<span> <a href={github} target="_blank"> {username} <img src={`https://avatars.githubusercontent.com/${username}`} alt="" /> </a> </span>)
  } else {
    return (<span> {user} </span>)
  }
}

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