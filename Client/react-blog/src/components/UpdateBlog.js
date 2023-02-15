import { Card, CardBody, CardTitle, Input, Container, Button } from "reactstrap";

const UpdateBlog = () => {
  return (
    <Card body inverse color="info">
      <CardBody>
        <form onSubmit="#">
          <CardTitle className="display-2">Update Blog</CardTitle>
          <Input placeholder="Enter the blog title here" onChange="#" />
          <br />
          <Input type="textarea" rows="10" placeholder="Enter the blog content here" onChange="#" />
          <br />
          <Container>
            <Button type="submit" color="success" style={{ marginRight: "15px" }} size="lg">
              Accept Changes
            </Button>
            <Button type="submit" color="warning" size="lg">
              Cancel
            </Button>
          </Container>
        </form>
      </CardBody>
    </Card>
  );
};

export default UpdateBlog;
