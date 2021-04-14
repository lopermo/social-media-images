import React from "react";
import styled from 'styled-components';
import Arrow from '../../public/curved-arrow.svg';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  text-align: center;
  color: palevioletred;
`;

const SubTitle = styled.h2`
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const person = props => {
  return (
    // <div className="Person" style={style}>
    <section id="image2save" className={`${props.bgRadius} bg-blue-600 px-20 py-40 text-right text-white relative`}>
      <div className="relative z-20">
        <div className={`text-6xl ${props.titleWeight}`}>{props.title}</div>
        <div className="text-4xl mt-4 font-extralight">{props.description}</div>
      </div>
      <Arrow className="absolute bottom-8 right-14 w-40 h-40 z-10 opacity-20 transform rotate-90" />
    </section>
  );
};

export default person;