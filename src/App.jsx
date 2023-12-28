import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

console.log("line 5 => ", contacts);
console.log("line 6 => ", contacts.slice(0, 5));
function App() {
  const [firstContacts, setFirstContacts] = useState(contacts.slice(0, 5));

  console.log("line 10 => ", firstContacts);
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstContacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    style={{ width: "100px", height: "150px" }}
                  />
                </td>
                <td>
                  <strong>{contact.name}</strong>
                </td>
                <td>
                  <strong>{contact.popularity.toFixed(2)}</strong>
                </td>
                <td>{contact.wonOscar && <span>🏆</span>}</td>
                <td>{contact.wonEmmy && <span>🌟</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
