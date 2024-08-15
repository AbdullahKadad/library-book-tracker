export default function Toast({ book }) {
  return (
    <div className="mt-4 bg-gray-800 text-white p-4 rounded-md shadow-lg">
      <p>
        Last added book: <strong>{book.title}</strong> by {book.author} (Genre: {book.genre}, Published: {book.publicationDate})
      </p>
      <p>Description: {book.description}</p>
    </div>
  );
}
