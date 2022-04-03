import Typewriter from "typewriter-effect"

export function Writer({phrasesArr}) {
  return(
    <Typewriter
    options={{
      strings: [...phrasesArr],
      autoStart: true,
      loop: true,
    }}
  />
  )
}