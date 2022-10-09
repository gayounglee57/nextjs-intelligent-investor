import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { StyledEngineProvider } from "@mui/material/styles";
import "../styles/App.css";
import { HeaderText } from "../components/HeaderText";
import { IntelligentTable } from "../components/IntelligentTable";

const queryClient = new QueryClient();
export default function App() {
    
    return (
        <StyledEngineProvider injectFirst>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <header className="App-header">
                        <HeaderText />
                        <IntelligentTable />
                    </header>
                </div>
            </QueryClientProvider>
        </StyledEngineProvider>
    );
}