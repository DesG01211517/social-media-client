import { useState } from "react";
import axios from "axios";

function AddPost() {
  const [formData, setFormData] = useState({
    content: "",
    media: "",
    comment: "",
    like: false,
  });

  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/post", formData);
      alert("Post added successfully!");
    } catch (error) {
      console.error("There was an error adding the post:", error);
    }
  };

  const activateForm = () => {
    setIsActive(true);
  };

  return (
    <form
      className={`bg-gray-100 border border-gray-300 shadow-lg rounded-lg mx-auto p-6 max-w-2xl transition-transform duration-300 ${
        isActive ? "transform scale-100" : "transform scale-95"
      }`}
      onClick={activateForm}
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-bold mb-4">Add a Post</h3>

      <label className="block text-left font-semibold mb-2" htmlFor="media">
        Media URL (Image or Video):
      </label>
      <input
        type="url"
        id="media"
        name="media"
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Enter a URL for an image or video"
        value={formData.media}
        onChange={handleChange}
      />

      <label className="block text-left font-semibold mb-2" htmlFor="content">
        Post Content:
      </label>
      <textarea
        id="content"
        name="content"
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Write your post content..."
        rows="4"
        value={formData.content}
        onChange={handleChange}
      />

      <label className="block text-left font-semibold mb-2" htmlFor="comment">
        Comment:
      </label>
      <textarea
        id="comment"
        name="comment"
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Write a comment..."
        rows="2"
        value={formData.comment}
        onChange={handleChange}
      />

      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="like"
          checked={formData.like}
          onChange={handleChange}
        />
        <span className="ml-2 font-semibold">Like</span>
      </label>

      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddPost;
