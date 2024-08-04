import React , {useState} from "react";
export default function Forms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been changed to upper case" , "success");

    }

    const handlelowClick =()=>{
       let  newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been changed to Lower case" , "success");

    }

    const handleClearClick =()=>{
        let  newText = '';
         setText(newText);
         props.showAlert("Text has been cleared" , "success");
 
     }
    const handleOnChange = (event)=>{
        setText(event.target.value);

    }

    // const handleCopy =()=>{
    //     var text = document.getElementById("myBox")
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("Text has been copied" , "success");
    // }

    const [text, setText] = useState(" ");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3 myBox">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black' }} id="box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear  Text</button>
    </div>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes Read: </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  );
}