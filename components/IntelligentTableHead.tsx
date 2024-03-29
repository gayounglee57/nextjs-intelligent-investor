import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const IntelligentTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell align="right">Ticker Symbol (from yahoo finance)</TableCell>
      <TableCell align="right">Are EPS positive?</TableCell>
      <TableCell align="right">Are P/E ratios below 25 and positive?</TableCell>
      <TableCell align="right">
        Is price smaller than book value doubled?
      </TableCell>
      <TableCell align="right">
        Is long term debt conservatively financed?
      </TableCell>
      <TableCell align="right">
        Are liabilities doubled not greater than assets?
      </TableCell>
    </TableRow>
  </TableHead>
);
