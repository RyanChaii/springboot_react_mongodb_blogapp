import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Card, CardTitle, Container, Row, Col } from "reactstrap";
import Menu from "./components/Menu";
import AllBlogs from "./components/AllBlogs";
import AddBlog from "./components/AddBlog";
import UpdateBlog from "./components/UpdateBlog";

// import "react-toastify/dist/re"

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
        <ToastContainer />
        <Router>
          <CardTitle>
            <h3>Swee Chai Blog</h3>
          </CardTitle>
          <Container>
            <Row>
              <Col>
                <Menu />
              </Col>
            </Row>
            <Col>
              <Routes>
                <Route path="/" component={AllBlogs} exact />
                <Route path="/add" component={AddBlog} exact />
                <Route path="/update" component={UpdateBlog} exact />
              </Routes>
            </Col>
          </Container>
        </Router>
      </Card>
    </div>
  );
}

export default App;
