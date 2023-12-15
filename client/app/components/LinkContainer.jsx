"use client"
// import React, { useState, useEffect } from 'react';
// import Table from './Table';
// import Form from './Form';


// function LinkContainer() {
//   const [favLinks, setFavLinks] = useState([]);
//   const [linkName, setLinkName] = useState('');
//   const [linkURL, setLinkURL] = useState('');

//   useEffect(() => {
//     const storedLinks = JSON.parse(localStorage.getItem('favLinks')) || [];
//     setFavLinks(storedLinks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('favLinks', JSON.stringify(favLinks));
//   }, [favLinks]);

//   const removeLink = (index) => {
//     setFavLinks((prevLinks) => {
//       const updatedLinks = [...prevLinks];
//       updatedLinks.splice(index, 1);
//       return updatedLinks;
//     });
//   };

//   const addLink = () => {
//     if (linkName && linkURL) {
//       const newLink = { name: linkName, URL: linkURL };
//       setFavLinks((prevLinks) => [...prevLinks, newLink]);
//       setLinkName('');
//       setLinkURL('');
//     } else {
//       alert('Please provide both Name and URL');
//     }
//   };

//   return (
//     <div className='maindiv'>
//       <h1>My Favorite Links</h1>
//       <Table linkData={favLinks} removeLink={removeLink} />
//       <Form
//         addLink={addLink}
//         linkName={linkName}
//         setLinkName={setLinkName}
//         linkURL={linkURL}
//         setLinkURL={setLinkURL}
//       />
//     </div>
//   );
// }

// export default LinkContainer;



// LinkContainer.jsx
import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);
  const [linkName, setLinkName] = useState('');
  const [linkURL, setLinkURL] = useState('');
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('favLinks')) || [];
    setFavLinks(storedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem('favLinks', JSON.stringify(favLinks));
  }, [favLinks]);

  const removeLink = (index) => {
    setFavLinks((prevLinks) => {
      const updatedLinks = [...prevLinks];
      updatedLinks.splice(index, 1);
      return updatedLinks;
    });
  };

  const addLink = () => {
    if (linkName && linkURL) {
      if (selectedLink !== null) {
        // If selectedLink is not null, it means we're updating an existing link
        setFavLinks((prevLinks) =>
          prevLinks.map((link, index) =>
            index === selectedLink ? { name: linkName, URL: linkURL } : link
          )
        );
        setSelectedLink(null); // Reset selectedLink after updating
      } else {
        // Otherwise, add a new link
        const newLink = { name: linkName, URL: linkURL };
        setFavLinks((prevLinks) => [...prevLinks, newLink]);
      }
      setLinkName('');
      setLinkURL('');
    } else {
      alert('Please provide both Name and URL');
    }
  };

  const handleUpdate = (index) => {
    // Set the selected link and populate the input fields
    setSelectedLink(index);
    setLinkName(favLinks[index].name);
    setLinkURL(favLinks[index].URL);
  };

  return (
    <div className='maindiv'>
      <h1>My Favorite Links</h1>
      <Table linkData={favLinks} removeLink={removeLink} handleUpdate={handleUpdate} />
      <Form
        addLink={addLink}
        linkName={linkName}
        setLinkName={setLinkName}
        linkURL={linkURL}
        setLinkURL={setLinkURL}
      />
    </div>
  );
}

export default LinkContainer;
