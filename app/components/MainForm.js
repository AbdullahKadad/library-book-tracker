import { useState } from 'react';
import Toast from './Toast';

export default function MainForm() {
  const [book, setBook] = useState({ title: '', author: '', genre: '', publicationDate: '', description: '' });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    // Collect all field values and update the state
    const formData = new FormData(e.target);
    const newBook = {
      title: formData.get('title'),
      author: formData.get('author'),
      genre: formData.get('genre'),
      publicationDate: formData.get('publicationDate'),
      description: formData.get('description'),
    };

    // Update the state with the new book details
    setBook(newBook);

    // Clear form fields after submission
    e.target.reset();

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <form className="p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the title of the book"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the author's name"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the book's genre"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-700">
            Publication Date
          </label>
          <input
            type="date"
            id="publicationDate"
            name="publicationDate"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter a brief description of the book"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add Book
        </button>
      </form>

      {showToast && <Toast book={book} />}
    </>
  );
}
