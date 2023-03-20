
/* eslint-disable no-unused-vars */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  reload() {
    window.location.reload();
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return (
        <div>
          <h1>Что-то пошло не так.</h1>
          <button onClick={this.reload}>Reload</button>
        </div>
      );
    }

    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;