import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const submitPost = () => {
    fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    }).then(() => {
      setPosts([...posts, { text }]);
      setText('');
    });
  };

  return (
    <div>
      <h1>My Blog</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={submitPost}>Add Post</button>
      <ul>{posts.map((p, i) => <li key={i}>{p.text}</li>)}</ul>
    </div>
  );
}

export default App;
