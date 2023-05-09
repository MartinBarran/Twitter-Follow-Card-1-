import { useState } from "react";

export function TwitterFollowCard ({userName = 'Unknown', name, formatUserName}){
  const [isFollowing, setIsFollowing] = useState(false)

  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-btn is-following'
  : 'tw-followCard-btn'

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

  const imgSrc= `https://unavatar.io/${userName}`;

    return(
        <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt="Avatar de usuario" src={imgSrc}></img>
        <div className="tw-followCard-container"> 
          <strong className="tw-followCard-name">{name}</strong>
          <span className="tw-followCard-user">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>

    </article>
    )
}