import { Card, CardBody, CardTitle, Input, Container, Button } from "reactstrap";

const AddBlog = () => {
  return (
    <Card body inverse color="info">
      <CardBody>
        <form onSubmit="#">
          <CardTitle className="display-2">New Blog</CardTitle>
          <Input placeholder="Enter the blog title here" onChange="#" />
          <br />
          <Input type="textarea" rows="10" placeholder="Enter the blog content here" onChange="#" />
          <br />
          <Container>
            <Button type="submit" color="success" style={{ marginRight: "15px" }} size="lg">
              Post Blog
            </Button>
            <Button type="submit" color="warning" size="lg">
              Clear
            </Button>
          </Container>
        </form>
      </CardBody>
    </Card>
  );
};

export default AddBlog;
