import React,{useContext} from "react";
import { Card, Button } from 'react-bootstrap'
// import AddTaskContext from "./contextStore/AddTaskContext";
import AddTaskContext from "./contextStore/AddTaskContext";
const AddTaskLiveOutPut = (props) => {
 const context =useContext(AddTaskContext);

    return (
        <div>
            <div>
                <Card className="text-center">
                    <Card.Header style={{ textTransform: 'uppercase', fontSize: '28px' }}>
                 {context.title}
                    </Card.Header> 
                    <Card.Body>

                        <Card.Title style={{ fontSize: '25px' }}>
                            {context.specialInfo}
                        </Card.Title>
                        <Card.Title style={{ fontSize: '25px' }}>
                            {context.details}

                        </Card.Title>

                        

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary">
                            Go somewhere
                        </Button>
                    </Card.Footer>
                </Card>
            </div>

        </div>
    )
}
export default AddTaskLiveOutPut;
