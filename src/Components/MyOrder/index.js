import React, { Component } from "react";
import { Jumbotron, Tab, Tabs, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebarProduct";
import './style.css'



export default class MyOrder extends Component {

    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }
    render() {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div className="container-selling">
                    <Jumbotron className="container-content">
                        <h3>My order</h3>
                        <div className="tab-container">
                            <Tabs className="mt-5 tab-nav-order" activeKey={this.state.activeTab} onSelect={this.handleSelect} >
                                <Tab eventKey={1} title="All items">
                                    <div className="input-search-tab input-search-field-tab">
                                        <InputGroup >
                                            <FormControl
                                                className="rounded-pill"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append className="mr-2">
                                                <FontAwesomeIcon className="icon-search-tab " icon={faSearch} />
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </div>
                                    <div className="image-content text-center">
                                        <img
                                            src="https://res.cloudinary.com/zada/image/upload/v1607974667/datanotfound2_bpjduc.png"
                                            alt="React Bootstrap"
                                        />
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="Get paid">Tab 2 content</Tab>
                                <Tab eventKey={3} title="Processed">Tab 3 content</Tab>
                                <Tab eventKey={4} title="Sent">Tab 4 content</Tab>
                                <Tab eventKey={5} title="Completed">Tab 5 content</Tab>
                                <Tab eventKey={6} title="Order cancel">
                                    <div className="input-search-tab input-search-field-tab">
                                        <InputGroup >
                                            <FormControl
                                                className="rounded-pill"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append className="mr-2">
                                                <FontAwesomeIcon className="icon-search-tab " icon={faSearch} />
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </div>
                                    <div className="image-content text-center">
                                        <img
                                            src="https://res.cloudinary.com/zada/image/upload/v1607974667/datanotfound2_bpjduc.png"
                                            alt="React Bootstrap"
                                        />
                                    </div></Tab>
                            </Tabs>
                        </div>
                    </Jumbotron>
                </div>
            </div>
        );
    }
    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }
}
