import * as React from "react";
import axios from "axios";

import TableBody from "@mui/material/TableBody";
import { IntelligentTableInput } from "./IntelligentTableInput";
import { IntelligentTableRow } from "./IntelligentTableRow";
import { ErrorBoundary } from "./ErrorBoundary";

export const IntelligentTableBody = () => {
  const [tickers, setTickers] = React.useState<string[]>([]);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      setTickers([...tickers, e.target.value]);
      e.target.value = "";
      // const data = await axios.get("/api/post");
      // console.log('data', data);
    }
  };

  return (
    <ErrorBoundary>
      <TableBody>
        {tickers &&
          tickers.map((ticker) => (
            <IntelligentTableRow key={ticker} ticker={ticker} />
          ))}
        <IntelligentTableInput handleKeyPress={handleKeyPress} />
      </TableBody>
    </ErrorBoundary>
  );
};
