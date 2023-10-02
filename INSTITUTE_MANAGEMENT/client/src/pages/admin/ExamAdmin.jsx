import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddExModal from '../../components/modal/exammodel/AddExModal'
import ReportModal from '../../components/modal/exammodel/ReportModal'

export default function ExamAdmin() {
    return (
        <div>
            <Sidenav />
            <br /><br />
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10 d-flex justify-content-center">

                    <AddExModal />
                    {/* <button type="button" className="btn-dashb"> */}
                        <Link to="/examview" className="btn btn-dashb d-flex align-items-center">
                            View Exam Schedules
                        </Link><br/><br/>
                    {/* </button> */}
                </div>
            </div>
            <br/>
            {/* <div class="col-md-8 d-flex justify-content-center">
          <div className="col-md-4"><ReportModal/></div></div> */}
            <div className="row justify-content-center ">
           
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ReportModal/>
                
            </div>
            
        </div>
    )
}
