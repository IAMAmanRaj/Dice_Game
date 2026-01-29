import { useEffect, useState } from "react";

function ResponsiveWrapper({ children }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth < 768) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f0f0f0",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          }}
        >
          <h1 style={{ color: "#333", marginBottom: "20px" }}>
            Screen Size Not Supported
          </h1>
          <p
            style={{
              color: "#666",
              marginBottom: "20px",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            This game requires a minimum screen width of <strong>768px</strong>.
          </p>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "15px",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          >
            <p style={{ color: "#999", margin: "0" }}>
              Current screen width:
            </p>
            <p style={{ color: "#333", fontSize: "28px", fontWeight: "bold", margin: "5px 0 0 0" }}>
              {windowWidth}px
            </p>
          </div>
          <p style={{ color: "#999", fontSize: "14px" }}>
            Please use a device or resize your browser window to at least 768px
            width to play.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default ResponsiveWrapper;
