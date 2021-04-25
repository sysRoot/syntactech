import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";

import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
import "./poem.css";
const Poem = props => {
    const router = useRouter();

    const [poem, setPoem] = useState([{}]);

    const disqus_config = () => {
        this.page.url = `https://karma.lol/poems/${router.query.id}`;
        this.page.identifier = poem.title;
    };

    useEffect(() => {
        axios
            .get(`https://meaningpoetry-backend.herokuapp.com/poems?slug=${router.query.id}`)
            .then(res => {
                console.log(res.data);
                setPoem(res.data);
            })
            .catch(err => console.log(err));
        return (function() {
            let d = document,
                s = d.createElement("script");
            s.src = "https://psyche-id.disqus.com/embed.js";
            s.setAttribute("data-timestamp", +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }, [setPoem]);

    return (
        <Container>
            <MetaTags>
                {console.log(poem)}
                <title>{poem[0].title}</title>
                <meta name="description" content={poem[0].content} />
                <meta property="og:title" content={poem[0].title} />
                <meta
                    property="og:image"
                    content="https://picsum.photos/1200/1200"
                />
            </MetaTags>
            <Row>
                <Col lg={8}>
                    <h1 className="mt-4">{poem[0].title}</h1>

                    <hr />
                    <p className="lead">
                        by <a href="#">Penny-riot Mage</a>
                    </p>

                    <hr />
                    <pre>
                        <p>{poem[0].content}</p>
                    </pre>
                    <hr />
                    <div id="disqus_thread" />
                </Col>
                <Col md={4}>
                    <Card className="my-4">
                        <CardHeader as="h5">
                            Literally a Random Picture
                        </CardHeader>
                        <CardBody>
                            <img
                                className="sidebar"
                                src="https://picsum.photos/300/600"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default Poem;
