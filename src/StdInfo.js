import React from 'react'

function StudentInfo(props){
    return(
        <div>
            <h1>Assignment No.{props.assignNo}</h1>
            <hr/>
            <h2>{props.stdName}</h2>
            <h2>PIAIC {props.stdCenter}, Batch-{props.stdBatch}</h2>
        </div>
    );
}

export default StudentInfo;