import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;