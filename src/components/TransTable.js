import React from 'react'
import TransTableHead from "../components/TransTableHead"
import TransTableBody from "../components/TransTableBody"


const TransTable = () => {
    return (
        <>
           <TransTableHead />
           <TransTableBody />
        </>
    )
}

export default TransTable




// import React, { Fragment } from 'react'
// import { Table } from 'reactstrap';

// const TransTable = () => {
//     return (
//         <Fragment>
//             <Table>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope="row">1</th>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <th scope="row">2</th>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <th scope="row">3</th>
//           <td>Larry</td>
//           <td>the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//         </Fragment>
//     )
// }

// export default TransTable
