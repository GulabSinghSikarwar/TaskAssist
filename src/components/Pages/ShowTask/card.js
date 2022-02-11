import React from 'react'
import { Card, Button } from 'react-bootstrap'

const TaskCard = (props) => {


    return ( <
        div style = {
            { width: '450px' }
        } >
        <
        Card className = "text-center" >
        <
        Card.Header style = {
            { textTransform: 'uppercase', fontSize: '28px' }
        } > { props.title } <
        /Card.Header> <
        Card.Body >

        <
        Card.Title style = {
            { fontSize: '25px' }
        } > { props.specialInfo } <
        /Card.Title> <
        Card.Title style = {
            { fontSize: '25px', fontWeight: 'lighter', marginTop: '50px' }
        } > { props.details }

        <
        /Card.Title>



        <
        /Card.Body> <
        Card.Footer className = "text-muted" >
        <
        Button variant = "primary"
        style = {
            { margin: "0px 20px" }
        } > Edit Task < /Button> <
        Button variant = "danger " > Delete < /Button> < /
        Card.Footer > <
        /Card> < /
        div >
    )
}
export default TaskCard