import React, { useState } from 'react';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8000/posts/create-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      setSuccess(true);
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>

      <input
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button data-testid="submit-post" onClick={handleSubmit}>
        Submit
      </button>

      {success && <p>Post created</p>}
    </div>
  );
}

export default CreatePost;
