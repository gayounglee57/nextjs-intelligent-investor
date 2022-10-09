import * as React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { IntelligentTableRowUI } from "./IntelligentTableRowUI";
import { TransitionText } from "./TransitionText";

// import { mockStatsData } from "../__tests__/mockStatsData";

const statsUrl = "/api/stats";
const balanceSheetUrl = "/api/balanceSheet";

function useStats(symbol: string) {
  return useQuery(
    "stats-" + symbol,
    async () => {
      const { data } = await axios.get(statsUrl, { params: { symbol } });
      return data;
    },
    { staleTime: 1000 * 60 * 60 }
  );
}

function useBalanceSheet(symbol: string) {
  return useQuery(
    "balance-sheet-" + symbol,
    async () => {
      const { data } = await axios.get(balanceSheetUrl, { params: { symbol } });
      return data;
    },
    { staleTime: 1000 * 60 * 60 }
  );
}

// function getMockData() {
//   return mockStatsData;
// }

export const IntelligentTableRow = ({ ticker }) => {
  // const statsData = getMockData();
  const {
    isLoading: isStatsLoading,
    error: statsError,
    data: statsData,
  } = useStats(ticker);
  const {
    isLoading: isBalanceSheetLoading,
    error: balanceSheetError,
    data: balanceSheetData,
  } = useBalanceSheet(ticker);
  const isLoading = isStatsLoading || isBalanceSheetLoading;

  if (isLoading || !statsData || !balanceSheetData)
    return <TransitionText text={"Loading"} />;
  if (statsError || balanceSheetError) return <TransitionText text={"Error"} />;

  console.log("statsData", ticker, statsData);
  console.log("balanceSheetData", ticker, balanceSheetData);

  return (
    <>
      {statsData && balanceSheetData && (
        <IntelligentTableRowUI
          statsData={statsData}
          balanceSheetData={balanceSheetData}
        />
      )}
    </>
  );
};
