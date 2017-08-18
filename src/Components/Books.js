import React, { Component } from 'react';
import {Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';

class Books extends Component {
  render() {
    let bookItems;
    if(this.props.books) {
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        return (
          <Panel key={id} header={title} eventKey={id}>
            test
          </Panel>
        )
      });
    }
    return (
      <div>
        <Accordion>
          {bookItems}
        </Accordion>
      </div>
    );
  }
}

export default Books;
