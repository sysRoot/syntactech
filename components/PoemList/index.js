import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardText,
    CardHeader,
} from 'reactstrap';

const PoemList = () => {
    const [poems, setPoems] = useState([{ title: '...', content: '...' }]);
    useEffect(() => {
        axios
            .get('https://meaningpoetry-backend.herokuapp.com/poems')
            .then((res) => {
                setPoems(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log("Be more verbose", err));
    }, []);

    return (
        <Container>
            <Row className='align-items-center my-5'>
                {poems.map((poem) => (
                    <Col key={poem._id} md={4} className='mb-5'>
                        <Card h={100}>
                            <CardHeader>{poem.title}</CardHeader>
                            <CardBody>
                                <CardText>
                                    {poem.content.slice(0, 191)}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                <Link href={`/poems/${poem.slug}`}>
                                    <a className='btn btn-primary btn-sm'>
                                        {' '}
                                        Read this poem.
                                    </a>
                                </Link>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PoemList;
