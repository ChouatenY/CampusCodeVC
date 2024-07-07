import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => (
  <div className="jumbotron text-center">
    <h1>CampusCode</h1>
    <p>Built with React, Node.js, Express and Webpack.</p>
    <Button bsStyle="primary" href="/admin">Admin</Button>
    <Button bsStyle="secondary" href="/student">Student</Button>
  </div>
);

export default Home;
