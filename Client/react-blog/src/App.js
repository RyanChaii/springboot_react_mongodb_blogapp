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
      <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333", height: "1000px" }}>
        <ToastContainer />
        <Router>
          <CardTitle className="display-2">
            <h3>Swee Chai Blog</h3>
          </CardTitle>
          <Container>
            <Row>
              <Col>
                <Menu />
              </Col>
            </Row>
            <Row>
              <Col>
                <Routes>
                  <Route path="/" element={<AllBlogs />} />
                  <Route path="/add" element={<AddBlog />} />
                  <Route path="/update" element={<UpdateBlog />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
      </Card>
    </div>
  );
}

export default App;
