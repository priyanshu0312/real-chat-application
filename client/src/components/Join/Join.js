import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

export const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className="outerContainerJoin allhead">
     
      <h1 className="heading">Join Now!</h1>
      <form>
        <div class="row">
          <input
            placeholder="Name"
            className=""
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="row">
          <input
            placeholder="Room"
            className=""
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="buttons" type="submit">
            Sign In
          </button>
        </Link>
      </form>
      {/* <div className="joinInnerContainer">
      
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="buttons" type="submit">
            Sign In
          </button>
        </Link>
      </div> */}
    </div>
  )
}

export default Join
