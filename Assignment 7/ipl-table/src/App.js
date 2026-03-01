import { useState, useEffect } from "react";

export default function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort ascending by NRR
        const sorted = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>IPL Season 2022 Points Table</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Team</th>
            <th style={thStyle}>Matches</th>
            <th style={thStyle}>Won</th>
            <th style={thStyle}>Lost</th>
            <th style={thStyle}>Tied</th>
            <th style={thStyle}>NRR</th>
            <th style={thStyle}>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} style={trStyle}>
              <td style={tdStyle}>{team.Team}</td>
              <td style={tdStyle}>{team.Matches}</td>
              <td style={tdStyle}>{team.Won}</td>
              <td style={tdStyle}>{team.Lost}</td>
              <td style={tdStyle}>{team.Tied}</td>
              <td style={tdStyle}>{team.NRR}</td>
              <td style={tdStyle}>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Simple inline styles
const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#f4f4f4",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

const trStyle = {
  background: "#fff",
};