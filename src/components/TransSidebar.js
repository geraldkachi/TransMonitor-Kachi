import React from 'react'
import Overview from '../images/Overview.svg'
import { Link } from 'react-router-dom'

import note1 from '../images/note1.svg'
import note2 from '../images/note2.svg'
import note3 from '../images/note3.svg'
import single from '../images/single.svg'
import '../App.css'

const TransSidebar = () => {
    return (
        <>
            <div className="d-flex flex-column" style={{width:"260px", position:"relative", zIndex: 999}}>
                <div className="rounded-pill mt-5 mr-5" style={{backgroundColor:"#27AE60", marginLeft:"20px", paddingTop:"6px",paddingBottom:"6px" , paddingRight:"25px", paddingLeft:"25px"}}>
                   <div className="text-center" style={{color:"white", fontSize:"12px", fontWeight:700}}>GENERATE INVOICE</div>
                </div>
                   <div className="my-3">
                        <div className="my-3 ml-3" style={{fontSize:"11px", color:"#647787"}}>Main</div>

                        <div className="py-2 pl-3 leftb" style={{backgroundColor:"#e8f1fd"}}>
                            <img src={Overview} alt=""/><span className="mx-2" style={{fontSize:"11px", color:"#647787"}}>Overview</span>
                        </div>
                   </div>

                   <span className="ml-3" style={{fontSize:"11px", color:"#647787"}}>Payment</span>

                   <div>
                       <ul className='mx-0 px-0' style={{listStyle:"none"}}>
                           <li className="my-2 ml-3">
                               <Link to="/" style={{color:"#647787",listStyle:'none', textDecoration:"none", fontSize:"11px"}}>
                                    <img src={note1} alt=""/>
                                    <span className="ml-3">App Payment</span>
                               </Link>
                            </li>
                           <li className="my-2 ml-3">
                               <Link to="/" style={{color:"#647787",listStyle:'none', textDecoration:"none", fontSize:"11px"}}>
                                    <img src={note1} alt=""/>
                                    <span className="ml-3">Reconcilled Payments</span>
                               </Link>
                            </li>
                           <li className="my-2 ml-3">
                               <Link to="/" style={{color:"#647787",listStyle:'none', textDecoration:"none", fontSize:"11px"}}>
                                    <img src={note1} alt=""/>
                                    <span className="ml-3">Un - Reconcilled Payments</span>
                               </Link>
                            </li>
                           <li className="my-2 ml-3">
                               <Link to="/" style={{color:"#647787",listStyle:'none', textDecoration:"none", fontSize:"11px"}}>
                                    <img src={note1} alt=""/>
                                    <span className="ml-3">Manual Settlement</span>
                               </Link>
                            </li>
                       </ul>
                   </div>

                   <span className="ml-3" style={{fontSize:"11px", color:"#647787"}}>Orders</span>
                   
                   <div>
                       <ul  className='mx-0 px-0 ml-3' style={{listStyle:"none"}}>
                           <li className="my-2">
                           <Link to="/" style={{fontSize:"11px",color:"#647787",listStyle:'none', textDecoration:"none"}}>
                                       <img src={note1} alt=""/>
                                    <span className="ml-3">All Order</span>
                            </Link>
                           </li>
                           <li className="my-2">
                           <Link to="/" style={{fontSize:"11px",color:"#647787",listStyle:'none', textDecoration:"none"}}>
                                       <img src={note2} alt=""/>
                                    <span className="ml-3">Pending Orders</span>
                           </Link>
                           </li>
                           <li className="my-2">
                           <Link to="/" style={{fontSize:"11px",color:"#647787",listStyle:'none', textDecoration:"none"}}>
                                       <img src={note3} alt=""/>
                                    <span className="ml-3">Reconcilled Orders</span>
                           </Link>
                           </li>
                           <li className="my-4">
                                <Link to="/" style={{fontSize:"11px",color:"#647787",listStyle:'none', textDecoration:"none"}}>
                                            <img src={single} alt=""/>
                                            <span className="ml-3">Merchant Profile</span>
                                </Link>
                           </li>
                       </ul> 
                   </div>
            </div>   
        </>
    )
}

export default TransSidebar