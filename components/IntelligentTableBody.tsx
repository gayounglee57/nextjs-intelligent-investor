import * as React from "react";

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
    }
  };

  return (
    <ErrorBoundary>
      <TableBody>
        {tickers.length > 0 && (
          <IntelligentTableRow key={tickers[0]} ticker={tickers[0]} />
        )}
        {!(tickers.length > 0) && (
          <IntelligentTableInput handleKeyPress={handleKeyPress} />
        )}
      </TableBody>
    </ErrorBoundary>
  );
};
