import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import BookCard from "../components/Card";
import { useFirebase } from "../context/Firebase";
const Homepage = () => {
  const firebase = useFirebase();
  const [books, setbooks] = useState([]);
  useEffect(() => {
    firebase.listallbooks().then((books) => setbooks(books.docs));
  }, [firebase]);

  return (
    <div className="container mt-5">
      <CardGroup>
        {books.map((book) => (
          <BookCard key={book.id} {...book.data()} />
        ))}
      </CardGroup>
    </div>
  );
};

export default Homepage;
