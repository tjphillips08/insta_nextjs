import { useState } from "react";
import NavigationBar from "../components/NavigationBar";

const Upload = () => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTagChange = (event) => {
    setTags(event.target.value.split(","));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Upload photo and description to server
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <form className="bg-teal-500 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Photo
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="photo"
                type="file"
                accept="image/*"
                className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out"
                onChange={handlePhotoChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Description
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                id="description"
                rows="3"
                className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out"
                onChange={handleDescriptionChange}
                value={description}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Tags
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="tags"
                type="text"
                className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out"
                onChange={handleTagChange}
                value={tags.join(",")}
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-4 py-2 font-medium text-white bg-indigo-700 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload