import React, { useRef, useEffect, useState } from "react";
import { Container, CardGroup, Card, Row, Col, Button} from "react-bootstrap";
import styles from '@/styles/Home.module.css'

const MAX_POSSIBLE_HEIGHT = 500;

  
  const ExpendableText = ({ maxHeight, children }) => {
    const ref = useRef();
    const [expanded, setExpanded] = useState(true);
  
    useEffect(() => {
      if (ref.current.scrollHeight > maxHeight) {
        setExpanded(false);
      }
    }, [maxHeight]);
  
    return (
      <Card.Text style={styles.cardText} ref={ref}>
        <div
          style={{ maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight, overflowY: 'hidden' }}
        >
          {children}
        </div>
        {expanded ? <Button variant="light" onClick={() => setExpanded(!expanded)}>Read Less</Button> :
                    <Button variant="light" onClick={() => setExpanded(!expanded)}>Read More</Button>}
      </Card.Text>
    );
  };

export default ExpendableText