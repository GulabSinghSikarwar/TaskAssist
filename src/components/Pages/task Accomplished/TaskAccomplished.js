import React from 'react'
import { Card, Button } from 'react-bootstrap'
const AccomplishedTask = () => {
    return (
        <div>
            <h1>
                this shows the list for task accomplished

            </h1>
            <Card className="text-center">
                <Card.Header><h3>Accomplished Task</h3></Card.Header>
                <Card.Body>
                    <Card.Title> Tasks that have been finished  </Card.Title>
                    <Card.Text>
                        Some details Regarding  Your task......................... . and Some general extra information

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}
export default AccomplishedTask