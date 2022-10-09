import React from "react";

interface IProps {
    children: React.ReactNode;
}
  
interface IState {
    error: string;
    errorInfo: any;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = {
    error: '',
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="Error-boundary">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
