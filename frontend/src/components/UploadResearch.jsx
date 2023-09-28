import React, { useState } from "react";

const UploadResearch = () => {
  const [formData, setFormData] = useState({
    publicationName: "",
    researchFile: null,
    type: "public",
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 h-screen bg-gradient-to-r from-purple-400 to-purple-800 text-white">
      <h2 className="text-2xl mb-4">Upload Research</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Publication Name</label>
          <input
            type="text"
            value={formData.publicationName}
            onChange={(e) =>
              setFormData({ ...formData, publicationName: e.target.value })
            }
            className="p-2 rounded border w-full bg-white text-black"
          />
        </div>

        <div>
          <label className="block mb-2">Research File</label>
          <input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, researchFile: e.target.files[0] })
            }
            className="p-2 rounded border w-full bg-white text-black"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              name="type"
              value="public"
              checked={formData.type === "public"}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            Public
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="private"
              checked={formData.type === "private"}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            Private
          </label>
        </div>

        {formData.type === "private" && (
          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: +e.target.value })
              }
              className="p-2 rounded border w-full bg-white text-black"
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            className="bg-white text-blue-600 px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadResearch;
