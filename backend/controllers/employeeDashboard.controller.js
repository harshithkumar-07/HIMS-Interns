// import con from "../db.js";

// export const getEmployeeComplaints = async (req, res) => {
//   try {
//     const { employee_id } = req.params;

//     const result = await con.query(
//       `
//       SELECT
//         cm.complaint_id,
//         cm.ticket_number,
//         cm.complaint_description,
//         cm.status,
//         cm.priority,
//         cm.department
//       FROM complaint_master cm
//       JOIN complaint_assignment ca
//       ON cm.complaint_id = ca.complaint_id
//       WHERE ca.assigned_employee_id = $1
//       `,
//       [employee_id],
//     );

//     return res.status(200).json({
//       success: true,
//       data: result.rows,
//     });
//   } catch (error) {
//     console.error("Employee Dashboard Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };

// export const updateComplaintStatus = async (req, res) => {
//   try {
//     const { complaint_id } = req.params;
//     const { old_status, new_status , employee_name} = req.body;
//     console.log("Changed By:", employee_name);

//     await con.query(
//       `UPDATE complaint_master
//        SET status = $1
//        WHERE complaint_id = $2`,
//       [new_status, complaint_id]
//     );

//     await con.query(
//       `INSERT INTO complaint_status_history
//        (complaint_id, old_status, new_status, changed_by)
//        VALUES ($1, $2, $3, $4)`,
//       [complaint_id, old_status, new_status, employee_name]
//     );

//     return res.status(200).json({
//       success: true,
//       message: "Status updated successfully",
//     });

//   } catch (error) {
//     console.error("Update Status Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };

import con from "../db.js";

export const getEmployeeComplaints = async (req, res) => {
  try {
    const { employee_id } = req.params;

    // const result = await con.query(
    //   `
    //   SELECT
    //     cm.complaint_id,
    //     cm.ticket_number,
    //     cm.complaint_description,
    //     cm.status,
    //     cm.priority,
    //     cm.department,
    //     ARRAY(
    //       SELECT new_status
    //       FROM complaint_status_history csh
    //       WHERE csh.complaint_id = cm.complaint_id
    //     ) AS previous_statuses
    //   FROM complaint_master cm
    //   JOIN complaint_assignment ca
    //   ON cm.complaint_id = ca.complaint_id
    //   WHERE ca.assigned_employee_id = $1
    //   `,
    //   [employee_id]
    // );
    const result = await con.query(
      `
SELECT 
  cm.complaint_id,
  cm.ticket_number,
  cm.complaint_description,
  cm.status,
  cm.priority,
  cm.department,
  ARRAY(
    SELECT DISTINCT status FROM (
      SELECT old_status AS status
      FROM complaint_status_history
      WHERE complaint_id = cm.complaint_id
      UNION
      SELECT new_status
      FROM complaint_status_history
      WHERE complaint_id = cm.complaint_id
      UNION
      SELECT cm.status
    ) s
  ) AS previous_statuses
FROM complaint_master cm
JOIN complaint_assignment ca
ON cm.complaint_id = ca.complaint_id
WHERE ca.assigned_employee_id = $1
`,
      [employee_id],
    );

    return res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Employee Dashboard Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const updateComplaintStatus = async (req, res) => {
  try {
    const { complaint_id } = req.params;
    const { old_status, new_status, employee_name } = req.body;

    console.log("Changed By:", employee_name);

    await con.query(
      `UPDATE complaint_master
       SET status = $1
       WHERE complaint_id = $2`,
      [new_status, complaint_id],
    );

    await con.query(
      `INSERT INTO complaint_status_history
       (complaint_id, old_status, new_status, changed_by)
       VALUES ($1, $2, $3, $4)`,
      [complaint_id, old_status, new_status, employee_name],
    );

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error("Update Status Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
