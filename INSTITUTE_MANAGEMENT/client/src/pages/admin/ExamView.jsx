import React, { useEffect, useState } from 'react'
import Sidenav from '../../components/admin/Sidenav'
import SearchEs from '../../components/admin/SearchEs'
import CanExModal from '../../components/modal/exammodel/CanExModal'
import UpdExModal from '../../components/modal/exammodel/UpdExModal'
import axios from'axios'
import SearchExamModal from '../../components/modal/exammodel/SearchExamModal'


export default function ExamView() {
    const[exam_schedules,setexamSchedules] = useState([]);

    useEffect(() => {
        axios.get('/exam_schedules').then(res=> {
            setexamSchedules(res.data);

        })
            .catch(err => {
                console.log(err);
            })
    })
    
    return (
        <div>
            <Sidenav />
            <br />
            {/* <SearchExamModal/> */}
            {/* <SearchEs/> */}
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Grade</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exam_schedules.map(es=>(
                            <tr key={es.eScheduleID}>
                                {/* <th scope="row">{x}</th> */}
                                <td>{es.grade}</td>
                                <td>{es.subject}</td>
                                <td>{es.date}</td>
                                <td>{es.time}</td>
                                <td className="text-center">
                                    <UpdExModal eid={es.eScheduleID}/>
                                    <CanExModal eid={es.eScheduleID}/>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
        </div>
    )
}
