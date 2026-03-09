// // // import { useEffect, useState } from "react";

// // // import {
// // //   Box,
// // //   Heading,
// // //   Table,
// // //   Thead,
// // //   Tbody,
// // //   Tr,
// // //   Th,
// // //   Td,
// // //   Select,
// // //   Button,
// // //   Flex,
// // // } from "@chakra-ui/react";

// // // function EmployeeDashboard() {
// // //   const [complaints, setComplaints] = useState([]);
// // //   const id = localStorage.getItem("employee_id");
// // //   const employeeName = localStorage.getItem("employee_name") ;

// // //   useEffect(() => {
// // //     console.log("Employee ID:", id);
// // //     console.log(employeeName);

// // //     fetch(`http://localhost:3000/employee-dashboard/complaints/${id}`)
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         if (data.success) {
// // //           setComplaints(data.data);
// // //         }
// // //       })
// // //       .catch((err) => console.error("Fetch Error:", err));
// // //   }, []);

// // //   // const updateStatus = async (id, newStatus, oldStatus) => {
// // //   //   if (oldStatus === newStatus) return;
// // //   //   await fetch(`http://localhost:3000/employee-dashboard/complaints/${id}`, {
// // //   //     method: "PUT",
// // //   //     headers: { "Content-Type": "application/json" },
// // //   //     body: JSON.stringify({
// // //   //       old_status: oldStatus,
// // //   //       new_status: newStatus,
// // //   //     }),
// // //   //   });

// // //   //   setComplaints((prev) =>
// // //   //     prev.map((c) =>
// // //   //       c.complaint_id === id ? { ...c, status: newStatus } : c
// // //   //     )
// // //   //   );
// // //   // };

// // //   const updateStatus = async (id, newStatus, oldStatus) => {
// // //     if (newStatus === oldStatus) {
// // //       alert("Status is same");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await fetch(
// // //         `http://localhost:3000/employee-dashboard/complaints/${id}`,
// // //         {
// // //           method: "PUT",
// // //           headers: { "Content-Type": "application/json" },
// // //           body: JSON.stringify({
// // //             old_status: oldStatus,
// // //             new_status: newStatus,
// // //             employee_name: employeeName
// // //           }),
// // //         },
// // //       );

// // //       const data = await res.json();
// // //       console.log(data);

// // //       if (data.success) {
// // //         alert("Status Updated Successfully");
// // //       }

// // //       setComplaints((prev) =>
// // //         prev.map((c) =>
// // //           c.complaint_id === id ? { ...c, status: newStatus } : c,
// // //         ),
// // //       );
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };
// // //   const handleStatusChange = (id, value) => {
// // //     setComplaints((prev) =>
// // //       prev.map((c) =>
// // //         c.complaint_id === id ? { ...c, tempStatus: value } : c,
// // //       ),
// // //     );
// // //   };

// // //   return (
// // //     <Box ml="260px" p={6}>
// // //       <Heading mb={6}>Employee Dashboard</Heading>

// // //       <Table variant="simple">
// // //         <Thead>
// // //           <Tr>
// // //             <Th>ID</Th>
// // //             <Th>Complaint</Th>
// // //             <Th>Status</Th>
// // //           </Tr>
// // //         </Thead>

// // //         <Tbody>
// // //           {complaints.map((c) => (
// // //             <Tr key={c.complaint_id}>
// // //               <Td>{c.complaint_id}</Td>

// // //               <Td>{c.complaint_description}</Td>

// // //               <Td>
// // //                 <Flex gap={2}>
// // //                   <Select
// // //                     value={c.tempStatus || c.status}
// // //                     onChange={(e) =>
// // //                       handleStatusChange(c.complaint_id, e.target.value)
// // //                     }
// // //                   >
// // //                     <option value="OPEN">OPEN</option>
// // //                     <option value="IN_PROGRESS">IN_PROGRESS</option>
// // //                     <option value="RESOLVED">RESOLVED</option>
// // //                     <option value="CLOSED">CLOSED</option>
// // //                   </Select>

// // //                   <Button
// // //                     colorScheme="blue"
// // //                     onClick={() =>
// // //                       updateStatus(
// // //                         c.complaint_id,
// // //                         c.tempStatus || c.status,
// // //                         c.status,
// // //                       )
// // //                     }
// // //                   >
// // //                     Update
// // //                   </Button>
// // //                 </Flex>
// // //               </Td>
// // //             </Tr>
// // //           ))}
// // //         </Tbody>
// // //       </Table>
// // //     </Box>
// // //   );
// // // }

// // // export default EmployeeDashboard;

// import { useEffect, useState } from "react";
// import {
//   Box,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Select,
//   Button,
//   Flex,
// } from "@chakra-ui/react";

// function EmployeeDashboard() {
//   const [complaints, setComplaints] = useState([]);

//   const employeeId = localStorage.getItem("employee_id");
//   const employeeName = localStorage.getItem("employee_name");

//   useEffect(() => {
//     fetch(`http://localhost:3000/employee-dashboard/complaints/${employeeId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setComplaints(data.data);
//         }
//       })
//       .catch((err) => console.error("Fetch Error:", err));
//   }, [employeeId]);

//   const updateStatus = async (id, newStatus, oldStatus) => {
//     if (newStatus === oldStatus) {
//       alert("Status is same");
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:3000/employee-dashboard/complaints/${id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             old_status: oldStatus,
//             new_status: newStatus,
//             employee_name: employeeName,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (data.success) {
//         alert("Status Updated Successfully");
//       }

//       setComplaints((prev) =>
//         prev.map((c) =>
//           c.complaint_id === id
//             ? {
//                 ...c,
//                 status: newStatus,
//                 previous_statuses: [
//                   ...(c.previous_statuses || []),
//                   newStatus,
//                 ],
//               }
//             : c
//         )
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleStatusChange = (id, value) => {
//     setComplaints((prev) =>
//       prev.map((c) =>
//         c.complaint_id === id ? { ...c, tempStatus: value } : c
//       )
//     );
//   };

//   return (
//     <Box ml="260px" p={6}>
//       <Heading mb={6}>Employee Dashboard</Heading>

//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>ID</Th>
//             <Th>Complaint</Th>
//             <Th>Status</Th>
//           </Tr>
//         </Thead>

//         <Tbody>
//           {complaints.map((c) => (
//             <Tr key={c.complaint_id}>
//               <Td>{c.complaint_id}</Td>

//               <Td>{c.complaint_description}</Td>

//               <Td>
//                 <Flex gap={2}>
//                   <Select
//                     value={c.tempStatus || c.status}
//                     onChange={(e) =>
//                       handleStatusChange(c.complaint_id, e.target.value)
//                     }
//                   >
//                     <option
//                       value="OPEN"
//                       disabled={c.previous_statuses?.includes("OPEN")}
//                     >
//                       OPEN
//                     </option>

//                     <option
//                       value="IN_PROGRESS"
//                       disabled={c.previous_statuses?.includes("IN_PROGRESS")}
//                     >
//                       IN_PROGRESS
//                     </option>

//                     <option
//                       value="RESOLVED"
//                       disabled={c.previous_statuses?.includes("RESOLVED")}
//                     >
//                       RESOLVED
//                     </option>

//                     <option
//                       value="CLOSED"
//                       disabled={c.previous_statuses?.includes("CLOSED")}
//                     >
//                       CLOSED
//                     </option>
//                   </Select>

//                   <Button
//                     colorScheme="blue"
//                     onClick={() =>
//                       updateStatus(
//                         c.complaint_id,
//                         c.tempStatus || c.status,
//                         c.status
//                       )
//                     }
//                   >
//                     Update
//                   </Button>
//                 </Flex>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// }

// export default EmployeeDashboard;

import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Button,
  Flex,
} from "@chakra-ui/react";

function EmployeeDashboard() {
  const [complaints, setComplaints] = useState([]);

  const employeeId = localStorage.getItem("employee_id");
  const employeeName = localStorage.getItem("employee_name");

  useEffect(() => {
    fetch(`http://localhost:3000/employee-dashboard/complaints/${employeeId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setComplaints(data.data);
        }
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, [employeeId]);

  const updateStatus = async (id, newStatus, oldStatus) => {
    if (newStatus === oldStatus) {
      alert("Status is same");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/employee-dashboard/complaints/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            old_status: oldStatus,
            new_status: newStatus,
            employee_name: employeeName,
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        alert("Status Updated Successfully");
      }

      setComplaints((prev) =>
        prev.map((c) =>
          c.complaint_id === id
            ? {
                ...c,
                status: newStatus,
                previous_statuses: [...(c.previous_statuses || []), newStatus],
              }
            : c,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = (id, value) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.complaint_id === id ? { ...c, tempStatus: value } : c,
      ),
    );
  };

  return (
    <Box ml="260px" p={6}>
      <Heading mb={6}>Employee Dashboard</Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Complaint</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>

        <Tbody>
          {complaints.map((c) => (
            <Tr key={c.complaint_id}>
              <Td>{c.complaint_id}</Td>

              <Td>{c.complaint_description}</Td>

              <Td>
                <Flex gap={2}>
                  <Select
                    value={c.tempStatus || c.status}
                    onChange={(e) =>
                      handleStatusChange(c.complaint_id, e.target.value)
                    }
                  >
                    <option
                      value="OPEN"
                      disabled={c.previous_statuses?.includes("OPEN")}
                    >
                      OPEN
                    </option>
                    <option
                      value="IN_PROGRESS"
                      disabled={c.previous_statuses?.includes("IN_PROGRESS")}
                    >
                      IN_PROGRESS
                    </option>
                    <option
                      value="RESOLVED"
                      disabled={c.previous_statuses?.includes("RESOLVED")}
                    >
                      RESOLVED
                    </option>
                    <option
                      value="CLOSED"
                      disabled={c.previous_statuses?.includes("CLOSED")}
                    >
                      CLOSED
                    </option>
                  </Select>
                  <Button
                    colorScheme="blue"
                    onClick={() =>
                      updateStatus(
                        c.complaint_id,
                        c.tempStatus || c.status,
                        c.status,
                      )
                    }
                  >
                    Update
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default EmployeeDashboard;
