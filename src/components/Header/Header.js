import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
<<<<<<< Updated upstream
            <h1 title="Header" className="header">{title}</h1>
            {/* <h3 data-testid="header-2" className="header">Hello</h3> */}
=======
            <h1 className="header" data-testid="header-1">{title}</h1>
            {/* <h3 title='Header' className="header">Cats</h3> */}
>>>>>>> Stashed changes
        </>
    )
}
