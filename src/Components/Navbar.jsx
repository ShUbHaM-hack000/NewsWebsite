import React from 'react'

function Navbar({setCategory}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"style={{ cursor: 'pointer' }}>
            <div className="container-fluid cursor-pointer">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs">NewsMag</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link c" onClick={()=>setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Business")}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Entertainment")}>Entertainment</div>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
