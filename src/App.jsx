import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const [firstContacts, setFirstContacts] = useState(allContacts.slice(0, 5));

  const addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * allContacts.length);
    let randomContact = allContacts[randomIndex];
    let match = firstContacts.find((contact) => {
      return contact.name === randomContact.name;
    });

    while (match !== undefined) {
      randomIndex = Math.floor(Math.random() * allContacts.length);
      let randomContact = allContacts[randomIndex];
      match = firstContacts.find((contact) => {
        return contact.name === randomContact.name;
      });
    }

    setFirstContacts((prev) => {
      return [allContacts[randomIndex], ...prev];
    });
  };

  function sortByPopularity() {
    firstContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setFirstContacts([...firstContacts]);
  }

  function sortByName() {
    firstContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setFirstContacts([...firstContacts]);
  }

  function deleteContact(selectedContact) {
    let filteredContacts = firstContacts.filter((contact) => {
      return contact.id !== selectedContact.id;
    });

    setFirstContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <button onClick={sortByName}>Sort by Name</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {firstContacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} alt="contact picture" />
                </td>
                <td>
                  <strong>{contact.name}</strong>
                </td>
                <td>
                  <strong>{contact.popularity.toFixed(2)}</strong>
                </td>
                <td>{contact.wonOscar && <span>🏆</span>}</td>
                <td>{contact.wonEmmy && <span>🌟</span>}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
