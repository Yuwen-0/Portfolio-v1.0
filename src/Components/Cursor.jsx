
import{ useEffect } from 'react';

import PropTypes from 'prop-types';

function Cursor({cursorSize,currsorBG = "", cursorColor,cursorText = ""}) {

      const handleMouseMove = (event) => {
        setTimeout(() => {
          const cursor = document.querySelector(".cursor-follower");
          cursor.style.top = `${event.clientY}px`;
          cursor.style.left = `${event.clientX}px`;
        }, 15);
      };
      useEffect(() => {
        document.body.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          document.body.removeEventListener("mousemove", handleMouseMove);
        }
      }, []);

      const styles = {
        color: cursorColor,
        width: cursorSize.width,
        height: cursorSize.height,
        border: `2px solid ${cursorColor}`
      }

    return (
        <div className="cursor-follower" style={{...styles}}>
          <p className='cursor-text'>{cursorText}</p>
        </div>
    )
    
}

Cursor.propTypes = {
  cursorSize: PropTypes.object,
  currsorBG: PropTypes.string,
  cursorColor: PropTypes.string,
  cursorText: PropTypes.string
}

export default Cursor