import React from 'react'
import { Link } from "react-router-dom";
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const TransPagination = () => {
    return (
        <>
            <div className="d-flex justify-content-between mb-5 mt-4 mx-1">
                    <div>Showing 1 to 10 of 500 entries</div>
                    
                    <div>
                    <nav aria-label="...">
                        <ul className="pagination pagination-sm">
                          <li className="page-item">
                            <Link className="page-link" style={{textDecoration:"none",color:"grey"}} to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                          </li>
                            <Link className="page-link" style={{textDecoration:"none",color:"grey"}} to="#">1 <span className="sr-only">(current)</span></Link>
                          <li className="page-item active" aria-current="page">
                            <li className="page-item">
                              <Link className="page-link"  style={{textDecoration:"none",color:""}} to="#">2</Link>
                            </li>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" style={{textDecoration:"none",color:"grey"}} to="#">Next</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
        </>
    )
}

export default TransPagination



// <Pagination size="sm" aria-label="Page navigation example">
//       {/* <PaginationItem>
//         <PaginationLink first href="#" />
//       </PaginationItem> */}

//       <PaginationItem>
//         <PaginationLink previous >
//         <Link to='/' style={{textDecoration:"none",color:""}}>Previous</Link>
//         </PaginationLink>
//       </PaginationItem>


//       <PaginationItem>
//         <PaginationLink >
//         <Link to='/' style={{textDecoration:"none",color:""}}>1</Link>
//         </PaginationLink>
//       </PaginationItem>

//       <PaginationItem>
//         <PaginationLink >
//           <Link to='/' style={{textDecoration:"none",color:""}}>2</Link>
//         </PaginationLink>
//       </PaginationItem>
      


//       <PaginationItem>
//         <PaginationLink next>
//             <Link to='/' style={{textDecoration:"none",color:""}}>Next</Link>
//         </PaginationLink>
//       </PaginationItem>

//       {/* <PaginationItem>
//         <PaginationLink last href="#" />
//       </PaginationItem> */}
//     </Pagination>