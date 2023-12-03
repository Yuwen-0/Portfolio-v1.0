
import{ useEffect } from 'react';

import PropTypes from 'prop-types';

function Cursor({cursorSize}) {

      const handleMouseMove = (event) => {
        const follower = document.querySelector(".cursor-follower");
        follower.style.left = `${event.clientX}px`;
        follower.style.top = `${event.clientY}px`;
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