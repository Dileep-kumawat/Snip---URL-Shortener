import { useEffect, useState } from "react";
import { useUrl } from "./hooks/useUrl"

const App = () => {
  const { urls, handleCreateUrl, handleGetUrls, handleDeleteUrl } = useUrl();
  const [url, setUrl] = useState("");

  async function createUrlShortener(e) {
    e.preventDefault();

    await handleCreateUrl({ url });
    handleGetUrls();
  }

  async function deleteUrl(id) {
    await handleDeleteUrl({ id });
    handleGetUrls();
  }

  useEffect(() => {
    handleGetUrls();
  }, []);

  return (
    <div>
      welcome from app :

      <div>
        <h1>All urls : </h1>

        {urls.length <= 0 && <h2>No urls yet</h2>}

        {urls.map((url) => {
          return <div key={url._id}>
            <a href={`${import.meta.env['VITE_BACKEND_ENDPOINT']}/${url.shorterUrl}`} target="_blank" rel="noopener noreferrer">{import.meta.env['VITE_BACKEND_ENDPOINT']}/{url.shorterUrl}</a> => {url.originalUrl}

            <button onClick={() => { deleteUrl(url.shorterUrl) }} style={{ marginLeft: '20px' }}>Delete</button>
            <br /><br />
          </div>
        })}
      </div>

      <br /><br /><br />

      <div>
        <h1>Create Url</h1>
        <form onSubmit={createUrlShortener}>
          <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="https://example.com/long/long..." />
          <button>Create Url</button>
        </form>
      </div>
    </div>
  )
}

export default App
