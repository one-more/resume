import React, { Component } from 'react'
import styled from 'styled-components'
import Summary from './components/Summary'
import Header from './components/Header'
import Proficiencies from './components/Proficiencies'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
        <Wrapper>
            <Header />
            <Summary />
            <Proficiencies />
            <Experience />
            <Footer />
        </Wrapper>
    );
  }
}

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    max-width: 710px;
    padding: 1rem;
   
`;