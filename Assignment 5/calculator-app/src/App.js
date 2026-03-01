import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [dark, setDark] = useState(false);

  function calculate(type) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (type) {
      case "add":
        res = n1 + n2;
        break;
      case "sub":
        res = n1 - n2;
        break;
      case "mul":
        res = n1 * n2;
        break;
      case "div":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
  }

  const theme = {
    bg: dark ? "#0b1220" : "#eef2ff",
    card: dark ? "#0f172a" : "#ffffff",
    text: dark ? "#e5e7eb" : "#0f172a",
    inputBg: dark ? "#020617" : "#ffffff",
    resultBg: dark ? "#020617" : "#eef2ff",
    btn: dark ? "#8b5cf6" : "#6366f1",
    btnHover: dark ? "#a78bfa" : "#4f46e5",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.bg,
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          background: theme.card,
          padding: 28,
          borderRadius: 20,
          width: 360,
          boxShadow: dark
            ? "0 20px 50px rgba(0,0,0,0.6)"
            : "0 20px 30px rgba(0,0,0,0.12)",
          color: theme.text,
          transition: "0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          <h2 style={{ margin: 0 }}>Calculator</h2>
          <button
            onClick={() => setDark(!dark)}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "6px 12px",
              cursor: "pointer",
              background: dark ? "#1e293b" : "#e0e7ff",
              color: theme.text,
              transition: "0.2s ease",
            }}
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            type="number"
            placeholder="First number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={inputStyle(theme)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <input
            type="number"
            placeholder="Second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={inputStyle(theme)}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            { label: "+", type: "add" },
            { label: "−", type: "sub" },
            { label: "×", type: "mul" },
            { label: "÷", type: "div" },
          ].map((btn) => (
            <button
              key={btn.type}
              onClick={() => calculate(btn.type)}
              style={{
                padding: "12px 0",
                fontSize: 18,
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: theme.btn,
                color: "#fff",
                transition: "transform 0.12s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = theme.btnHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = theme.btn)
              }
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.94)")
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div
          style={{
            padding: 14,
            borderRadius: 12,
            background: theme.resultBg,
            fontSize: 18,
            fontWeight: 600,
            minHeight: 36,
            textAlign: "center",
          }}
        >
          Result: {result !== null ? result : "—"}
        </div>
      </div>
    </div>
  );
}

function inputStyle(theme) {
  return {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    outline: "none",
    background: theme.inputBg,
    color: theme.text,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
    fontSize: 15,
  };
}