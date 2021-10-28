import React from "react";

export default function ContactList({ listName, onDeleteContact }) {
  return (
    <>
      <ul>
        {listName.map(({ name, id, number }) => (
          <li key={id}>
            {name}:{number}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
