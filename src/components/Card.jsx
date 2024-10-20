import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
const BookCard = (props) => {
    const firebase= useFirebase();
    const [url, setUrl] = useState(null)
    useEffect(() => {
     firebase.getImageUrl(props.imageURL).then((url)=>setUrl(url))
    
    }, [props.imageURL,firebase])
    
  return (
<Card style={{  margin:"20px" ,width: '15rem'}}>
      <Card.Img style={{height:"40vh" }} variant="top" src={url} />
      <Card.Body >
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This Book ahas a tittle {props.name} and this book is sold by {props.displayName} and this books cost Rs {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard
