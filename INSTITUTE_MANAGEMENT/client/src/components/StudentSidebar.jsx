import React from 'react'
import "../style.css"

export default function StudentSidebar() {
  return (
    <div>
            <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg" id="navbar">

                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row m-auto ml-sm-5 " id="navbarNav">
                    <div className="navbar-nav col-md-10">

                        <a href="#" className="nav-item dash-link nav-link "> Personal <span className="sr-only">(current)</span> </a>
                        <a href="#" className="nav-item nav-link dash-link "> Exam Results </a>
                        <a href="#" className="nav-item nav-link dash-link"> Attendence </a>
                        <a href="#" className="nav-item nav-link dash-link"> Fees Payment </a>
                        <a href="#" className="nav-item nav-link dash-link"> Feedback </a>
                        <a href="#" className="nav-item nav-link dash-link"> View Timetable </a>
                    </div> 
                </div>
            </nav>
        </div>
  )
}
