// src/index.tsx
import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Lazy-load your App for code-splitting
const App = lazy(() => import("./App.tsx"));

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-red-600">Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found. Make sure <div id=\"root\"/> exists");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        }
      >
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
