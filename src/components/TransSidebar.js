import React from 'react'
import Overview from '../images/Overview.svg'
import { Link } from 'react-router-dom'

// import {  } from "../images/";

import note1 from '../images/note1.svg'
import note2 from '../images/note2.svg'
import note3 from '../images/note3.svg'
import single from '../images/single.svg'
import '../App.css'


const TransSidebar = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center"  style={{width:'360px'}}>
                <div className="rounded-pill py-1 mt-5 ml-3" style={{backgroundColor:"#27AE60", marginRight:"180px"}}>
                   <div className="text-center mr-5 pr-1" style={{color:"white", fontSize:"12px"}}>GENERATE INVOICE</div>
                </div>
                   <div className="my-3">
                        <div className="my-3 ml-3" style={{fontSize:"11px", color:"#647787"}}>Main</div>

                        <div className="py-2 pl-3 leftb" style={{backgroundColor:"#e8f1fd", borderTopWidth:'50px', borderWidth:"12px", borderColor:"#1875F0"}}>
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
