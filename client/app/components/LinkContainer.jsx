"use client"
import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';


function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);
  const [linkName, setLinkName] = useState('');
  const [linkURL, setLinkURL] = useState('');

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
      const newLink = { name: linkName, URL: linkURL };
      setFavLinks((prevLinks) => [...prevLinks, newLink]);
      setLinkName('');
      setLinkURL('');
    } else {
      alert('Please provide both Name and URL');
    }
  };

  return (
    <div className='maindiv'>
      <h1>My Favorite Links</h1>
      <Table linkData={favLinks} removeLink={removeLink} />
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
