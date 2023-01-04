import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index.js";

function CreateDeck({ updatedDecks }) {
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });

  const history = useHistory();

  const changeForm = ({ target }) => {
    setNewDeck({ ...newDeck, [target.name]: target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
    updatedDecks(1);
  };

  return (
    <div className="col-9 mx-auto">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {/* a link the redirects to the home page */}
            <Link to={"/"}>
              <i class="bi bi-house-door-fill"></i> Home
            </Link>
          </li>

          <li className="breadcrumb-item">Create Deck</li>
        </ol>
      </nav>

      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={newDeck.name}
            onChange={changeForm}
            id="name"
            className="form-control"
            placeholder="Deck Name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            value={newDeck.description}
            onChange={changeForm}
            className="form-control"
            id="description"
            placeholder="Brief description of the deck."
            rows={4}
          />
        </div>

        <Link to="/" name="cancel" className="btn btn-secondary mr-3">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;