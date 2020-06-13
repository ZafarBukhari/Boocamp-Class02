import React from 'react'

function StudentInfo(props){
    return(
        <div>
            <h1 id='red'>This is component-1</h1>
            <h1>Assignment No.{props.assignNo}</h1>
            <h2>{props.stdName}</h2>
            <h2>PIAIC {props.stdCenter}, Batch-{props.stdBatch}</h2>
            <hr/>
        </div>        
    );
}

export default StudentInfo;