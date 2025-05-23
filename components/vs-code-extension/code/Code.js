/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { prefix } from '../../../utils/prefix';
import styles from './Code.module.css';

export default function UseCases(props) {

    const samples = props.samples;

    const architectureView = samples['design-the-application'];
    const copilot = samples['ballerina-copilot'];
    const serviceDesigning = samples['design-the-services'];
    const codeEditing = samples['write-the-code'];
    const notebooks = samples['notebooks'];
    const runAndDebug = samples['run-and-debug'];
    const tryIt = samples['try-the-services'];
    const tests = samples['test-the-code'];
    const choreo = samples['deploy-with-wso2-choreo'];
    const dataMapper = samples['transform-data'];

    return (
        <>

                        {/* Architecture View */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='ballerina-copilot' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'ballerina-copilot')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {copilot.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{copilot.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                <div id="code-tab">
                                    <Tabs defaultActiveKey="copilotView1" id="code" className="mb-3 codeTabs">
                                        <Tab eventKey="copilotView1" title="Code generation">
                                            <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/ai_codegen.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="copilotView2" title="AI Data Mapper">
                                        <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/ai_datamapper.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="copilotView3" title="Ask Ballerina">
                                        <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/ai_ask.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="copilotView4" title="Test generation">
                                        <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/ai_test.png`}/>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='design-the-application' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'design-the-application')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {architectureView.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{architectureView.frontmatter.description}</ReactMarkdown>
                                    <div className={styles.dVersion}>
                                         {/* <span>Sample 1: Summarize text using OpenAI</span>  */}
                                        {/* <a href={`${prefix}/learn/vs-code-extension/design-the-application/explore-the-architecture-view/`}className={styles.cDownload} target="_blank" rel="noreferrer"> */}
                                             {/* <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />  */}
                                            
                                            {/* <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Design your project" /> */}
                                            {/* Explore the Architecture View */}
                                        {/* </a> */}
                                        <a href='https://github.com/ballerina-guides/gcp-microservices-demo/tree/main/frontend' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>
{/* 
 

                                    <div className={styles.dVersion}>
                                        <span>Sample 3: Tweet on upcoming and recently released movies using Azure OpenAI</span>
                                        <a href='https://github.com/ballerina-guides/ai-samples/blob/main/tweet_on_upcoming_and_recently_released_movies_using_azure_openai/main.bal' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div> */}
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                <div id="code-tab">
                                    <Tabs defaultActiveKey="architectureView1" id="code" className="mb-3 codeTabs">
                                        <Tab eventKey="architectureView1" title="Design Diagram">
                                            <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/design-diagram.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="architectureView2" title="Flow Diagram">
                                        <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/flow-diagram.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="architectureView3" title="Types">
                                        <div className={styles.codeSnippet}>
                                                <img src={`${prefix}/images/type-diagram.png`}/>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Service Designing */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='design-the-services' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'design-the-services')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {serviceDesigning.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{serviceDesigning.frontmatter.description}</ReactMarkdown>
                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/design-the-services/http-api-designer/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="HTTP API designer" />
                                            HTTP API Designer
                                        </a>
                                        <a href='https://github.com/ballerina-guides/integration-samples/tree/main/restful-api-with-data-mapper' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>

                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/design-the-services/graphql-api-designer/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="GraphQL service designer" />
                                        GraphQL API Designer
                                        </a>
                                        <a href='https://github.com/ballerina-platform/module-ballerina-graphql/tree/master/examples/starwars' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>


                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                <div id="code-tab">
                                    <Tabs defaultActiveKey="serviceDesigning1" id="code" className="mb-3 codeTabs">
                                        <Tab eventKey="serviceDesigning1" title="HTTP API Designer">
                                            <div className={styles.codeSnippet}>
                                            <img src={`${prefix}/images/http-designer.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="serviceDesigning2" title="GraphQL API Designer">
                                            <div className={styles.codeSnippet}>
                                            <img src={`${prefix}/images/graphql-designer.png`}/>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Code Editing */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='write-the-code' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'write-the-code')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {codeEditing.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{codeEditing.frontmatter.description}</ReactMarkdown>
                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/write-the-code/intellisense/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Implement the code" />
                                            Write the code
                                        </a>
                                        <a href='https://github.com/ballerina-guides/integration-samples/tree/main/restful-api-with-data-mapper' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                <div id="code-tab">
                                    <Tabs defaultActiveKey="sample1" id="code" className="mb-3 codeTabs">
                                        <Tab eventKey="sample1" title="Code completion">
                                            <div className={styles.codeSnippet}>
                                            <img src={`${prefix}/images/code-completion.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="sample2" title="Code actions">
                                            <div className={styles.codeSnippet}>
                                            <img src={`${prefix}/images/code-actions.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="sample3" title="Go to references">
                                            <div className={styles.codeSnippet}>
                                            <img src={`${prefix}/images/go-to-references.png`}/>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="sample4" title="Diagnostics">
                                            <div className={styles.codeSnippet}>
                                            <img src={`${prefix}/images/diagnostics.png`}/>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Run & Debug */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='run-and-debug' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'run-and-debug')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {runAndDebug.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{runAndDebug.frontmatter.description}</ReactMarkdown>

                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/run-a-program/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Run a program" />
                                            Run a program
                                        </a>
                                    </div>

                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/debug-the-code/debug-sessions/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Debug the code" />
                                        Debug the code
                                        </a>
                                        <a href='https://github.com/ballerina-guides/integration-samples/tree/main/restful-api-with-data-mapper' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>


                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                {
                                    (runAndDebug.code && runAndDebug.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: runAndDebug.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (runAndDebug.frontmatter.image && runAndDebug.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${runAndDebug.frontmatter.image}`} alt={runAndDebug.frontmatter.title} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Try It */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='try-the-services' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'design-the-services')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {tryIt.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{tryIt.frontmatter.description}</ReactMarkdown>
                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/try-the-services/try-http-services/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="HTTP API designer" />
                                            Try HTTP services
                                        </a>
                                        <a href='https://github.com/ballerina-guides/integration-samples/tree/main/restful-api-with-data-mapper' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>

                                    {/* <div className={styles.dVersion}> */}
                                        {/* <a href={`${prefix}/learn/vs-code-extension/try-the-services/try-graphql-services/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="GraphQL designer" />
                                        Try GraphQL services
                                        </a> */}
                                        {/* <a href='https://github.com/ballerina-platform/module-ballerina-graphql/tree/master/examples/starwars' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a> */}
                                    {/* </div> */}


                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                {
                                    (tryIt.code && tryIt.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: tryIt.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (tryIt.frontmatter.image && tryIt.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${tryIt.frontmatter.image}`} alt={tryIt.frontmatter.title} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Test the Code */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='test-the-code' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'test-the-code')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {tests.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{tests.frontmatter.description}</ReactMarkdown>

                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/test-the-code/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Test the code" />
                                            Test the code
                                        </a>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                {
                                    (tests.code && tests.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: tests.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (tests.frontmatter.image && tests.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${tests.frontmatter.image}`} alt={tests.frontmatter.title} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Data Mapping */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='transform-data' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'transform-data')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {dataMapper.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{dataMapper.frontmatter.description}</ReactMarkdown>

                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/implement-the-code/data-mapper/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Data Mapper" />
                                            Data Mapper
                                        </a>
                                        <a href='https://github.com/ballerina-guides/integration-samples/tree/main/restful-api-with-data-mapper' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>
                                    </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                {
                                    (dataMapper.code && dataMapper.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: dataMapper.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (dataMapper.frontmatter.image && dataMapper.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${dataMapper.frontmatter.image}`} alt={dataMapper.frontmatter.title} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

             {/* Notebooks */}
             <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='test-the-code' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'notebooks')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {notebooks.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{notebooks.frontmatter.description}</ReactMarkdown>

                                    <div className={styles.dVersion}>
                                        <a href={`${prefix}/learn/vs-code-extension/notebooks/`} className={styles.cDownload} target="_blank" rel="noreferrer">
                                        <Image src={`${prefix}/images/docs-grey.svg`} width={20} height={20} alt="Notebooks" />
                                            Notebooks
                                        </a>
                                        <a href='https://github.com/ballerina-guides/integration-samples/tree/main/restful-api-with-data-mapper' className={styles.cDownload} target="_blank" rel="noreferrer">
                                            <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                            View code on GitHub
                                        </a>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                {
                                    (notebooks.code && notebooks.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: notebooks.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (notebooks.frontmatter.image && notebooks.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${notebooks.frontmatter.image}`} alt={notebooks.frontmatter.title} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Choreo Integration */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='deploy-with-wso2-choreo' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'deploy-with-wso2-choreo')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {choreo.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{choreo.frontmatter.description}</ReactMarkdown>

                                    {
                                        (choreo.frontmatter.url && choreo.frontmatter.url !== '') ?
                                            <div className={styles.dVersion}>
                                                <a href={choreo.frontmatter.url} className={styles.cDownload} target="_blank" rel="noreferrer">
                                                    Deploy with Devant by WSO2
                                                </a>
                                            </div>
                                            : null
                                    }

                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box} ${styles.ipaas}`}>
                                {
                                    (choreo.code && choreo.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: choreo.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (choreo.frontmatter.image && choreo.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${choreo.frontmatter.image}`} alt={choreo.frontmatter.title} className={styles.doNotFill} width='80%' height='90%'/>
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

        </>
    );
}
