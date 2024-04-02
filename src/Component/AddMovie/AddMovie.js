import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddMovie({Add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const[rate,setRate]=useState("")
  const[posterUrl,setPosterUrl]=useState("")
  const[trailer,setTrailer]=useState("")
  const handelClik=()=>{
    Add({title:title,description:description,posterUrl:posterUrl,rate:rate,trailer:trailer,id:Math.random()})
    handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adding NewMovie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Detail</Modal.Title>
        </Modal.Header>
        
        
<label>Movietitle</label>
<input onChange={(e)=>setTitle(e.target.value)}/>
<label>Movie discriptin</label>
<input onChange={(e)=>setDescription(e.target.value)}/>
<label>MovieRate</label>
<input type='number'   onChange={(e)=>setRate(e.target.value)}/>
<label>MovieUrl</label>
<input onChange={(e)=>setPosterUrl(e.target.value)}/>
<label>Movietrailer</label>
<input onChange={(e)=>setTrailer(e.target.value)}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelClik}>
            AddNewmovies
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;


