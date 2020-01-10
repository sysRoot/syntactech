import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

const Category = () => {
  const router = useRouter();
  const [category, setCategory] = useState([{poems:[{title: "...", poem: "..."}]}]);
  useEffect(() => {
    axios
      .get(`https://syntactech-admin.herokuapp.com/categories?slug=${router.query.id}`)
      .then(res => {
        console.log('r', res.data)
        setCategory(res.data)
      })
      .catch(err => console.log(err));
  }, [setCategory]);

  console.log(category)
  return (
    <Container>
      <Row className="align-items-center my-5">
        {category[0].poems.map(poem => (
          <Col key={poem._id} md={4} className="mb-5">

            <Card h={100}>
            <CardHeader>{poem.title}</CardHeader>
              <CardBody>
                <CardText>
                  {poem.poem.slice(0, 191)}
                </CardText>
              </CardBody>
              <CardFooter>
                <Link href={`/poems/${poem._id}`}>
                  <a className="btn btn-primary btn-sm"> Read this poem.</a>
                </Link>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
