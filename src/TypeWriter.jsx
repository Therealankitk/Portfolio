import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function TypewriterRoles() {
  return (
    <h1 className="typewriter">
    {`<`}<Typewriter
        words={[
        "Frontend Developer",
        "Full-Stack Developer",
        "AI & ML Developer",
        "Software Engineer"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={100}
        delaySpeed={1500}
    />{`/>`}
    </h1>
  )
}

