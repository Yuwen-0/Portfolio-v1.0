
import{ useEffect } from 'react';

import PropTypes from 'prop-types';

function Cursor({cursorSize}) {

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

    return (
        <div className="cursor-follower" style={{ width: cursorSize.width, height: cursorSize.height }}></div>
    )
    
}

Cursor.propTypes = {
  cursorSize: PropTypes.object
}

export default Cursor