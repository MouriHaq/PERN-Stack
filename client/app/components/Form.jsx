import React from 'react';

function Form({ addLink, linkName, setLinkName, linkURL, setLinkURL }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addLink();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="linkName">Link Name:</label>
      <input
        type="text"
        id="linkName"
        name="linkName"
        value={linkName}
        onChange={(e) => setLinkName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="linkURL">Link URL:</label>
      <input
        type="text"
        id="linkURL"
        name="linkURL"
        value={linkURL}
        onChange={(e) => setLinkURL(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;

