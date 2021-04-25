import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardHeader
} from "reactstrap";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://meaningpoetry-backend.herokuapp.com/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, [setCategories]);

  return (
    <Container>
      <Row className="align-items-center my-5">
        {categories.map(category => (
          <Col key={category._id} md={4} className="mb-5">
            {console.log(category)}
            <Card h={100}>
            <CardHeader>{category.title}</CardHeader>
              <CardBody>
                <CardText>
                  {category.description}
                </CardText>
              </CardBody>
              <CardFooter>
                <Link href={`/categories/${category.slug}`}>
                  <a className="btn btn-primary btn-sm"> Check this category</a>
                </Link>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
