// import { useState } from "react";

// import { Box, Heading, Input, Button, VStack } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// function EmployeeLogin() {

//   const [name,setName] = useState("");
//   const [password,setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {

//     const res = await fetch("http://localhost:3000/login",{
//       method:"POST",
//       headers:{ "Content-Type":"application/json"},
//       body:JSON.stringify({
//         employee_name:name,
//         password:password
//       })
//     });

//     const data = await res.json();

//     if(data.success){
//       localStorage.setItem("employee_id",data.employee.employee_id);
//       navigate("/employee-dashboard");
//     }
//     else{
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <Box ml="260px" mt="80px" display="flex" justifyContent="center">
//       <Box w="350px" p={8} bg="white" borderRadius="lg" boxShadow="lg">

//         <Heading size="md" mb={6} textAlign="center">
//           Employee Login
//         </Heading>

//         <VStack spacing={4}>
//           <Input
//             placeholder="Employee Name"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//           />

//           <Input
//             type="password"
//             placeholder="Password"
            
//             onChange={(e)=>setPassword(e.target.value)}
//           />

//           <Button colorScheme="blue" w="100%" onClick={handleLogin}>
//             Login
//           </Button>
//         </VStack>

//       </Box>
//     </Box>
//   );
// }

// export default EmployeeLogin; 

import { useState } from "react";
import { Box, Heading, Input, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    const res = await fetch("http://localhost:3000/login",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({
        employee_name:name,
        password:password
      })
    });

    const data = await res.json();

    if(data.success){
      localStorage.setItem("employee_id",data.employee.employee_id);
      localStorage.setItem("employee_name",data.employee.employee_name);   // added
      navigate("/employee-dashboard");
    }
    else{
      alert("Invalid credentials");
    }
  };

  return (
    <Box ml="260px" mt="80px" display="flex" justifyContent="center">
      <Box w="350px" p={8} bg="white" borderRadius="lg" boxShadow="lg">

        <Heading size="md" mb={6} textAlign="center">
          Employee Login
        </Heading>

        <VStack spacing={4}>
          <Input
            placeholder="Employee Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button colorScheme="blue" w="100%" onClick={handleLogin}>
            Login
          </Button>
        </VStack>

      </Box>
    </Box>
  );
}

export default EmployeeLogin;