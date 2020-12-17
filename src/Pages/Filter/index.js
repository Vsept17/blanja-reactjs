import React, { Component } from 'react'
import Filter from "../../Components/Filter";
import Navbar from "../../Components/Navbar";
import {Container} from 'react-bootstrap'


export default class index extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Filter keyword={this.props.location.state.keyword}/>
            </Container>
        )
    }
}
