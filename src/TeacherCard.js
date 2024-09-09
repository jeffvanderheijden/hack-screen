import React, { useEffect, useState } from "react"
import { useGlitch } from "react-powerglitch"
import teacherPlaceholder from "./images/placeholder.webp";
import hackerPlaceholder from "./images/hackerPlaceholder.jpeg";

const TeacherCard = ({
  glitched,
  name,
  image
}) => {
  const [glitchState, setGlitchState] = useState(false);
  const glitch = useGlitch(
    {
      timing: { iterations: 1 },
      slice: {
        count: 4,
        velocity: 10,
        minHeight: 0.02,
        maxHeight: 0.40,
        hueRotate: true,
      }
    });

  useEffect(() => {
    // Start glitch & lights
    setTimeout(() => {
      glitched ? setGlitchState(true) : setGlitchState(false)
      window.parent && window.parent.postMessage(
        {
          event_id: 'my_cors_message',
          data: { arduino: 1 }
        }, "*"
      );
    }, 2000);
    // Stop glitch & lights
    setTimeout(() => {
      setGlitchState(false);
      window.parent && window.parent.postMessage(
        {
          event_id: 'my_cors_message',
          data: { arduino: 0 }
        }, "*"
      );
    }, 4000);
  }, [glitched]);

  return (
    <>
      {glitchState ? (
        <li>
          <div className="hacker" ref={glitch.ref}>
            <img src={hackerPlaceholder} />
            <p>HACKER?</p>
          </div>
        </li>
      ) : (
        <li>
          <div className="teacher">
            <img src={image ? image : teacherPlaceholder} />
            <p>{name}</p>
          </div>
        </li>
      )}
    </>
  )
}

export default TeacherCard