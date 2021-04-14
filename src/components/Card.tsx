import React from "react";
import styled from "styled-components";
import Arrow from "../../public/curved-arrow.svg";

const width = "400px";
// Create a Title component that'll render an <h1> tag with some styles
const Card = styled.section`
  width: ${width};
  height: auto;
`;

const Header = styled.div`
  width: ${width};
  height: calc((${width} * 0.5225));
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Title = styled.section`
  color: #1d2129;
`;
const Link = styled.section`
  color: #606770;
`;
const Description = styled.section`
  color: #606770;
`;

const card = (props) => {
  const bgColor = `rgba(${props.bgColor.r}, ${props.bgColor.g}, ${props.bgColor.b}, ${props.bgColor.a})`;
  const textColor = `rgba(${props.textColor.r}, ${props.textColor.g}, ${props.textColor.b}, ${props.textColor.a})`;
  return (
    <Card className="relative overflow-hidden border border-gray-300 max-w-max">
      <Header
        id="image2save"
        style={{ backgroundColor: bgColor, color: textColor }}
        className={`p-8 ${props.textAlign} text-white relative`}
      >
        <div className="relative z-20">
          <div className={`${props.titleWeight} text-3xl`}>{props.title}</div>
          <div
            style={{ whiteSpace: "pre-line" }}
            className={`${props.descWeight} mt-2`}
          >
            {props.description}
          </div>
        </div>
        {/* <Arrow className="absolute z-10 w-24 h-24 transform rotate-90 bottom-8 right-20" /> */}
      </Header>
      <div
        className="px-6 py-4 border-t border-gray-200"
        style={{ backgroundColor: "#f0f2f5" }}
      >
        <Link className="mb-2 text-xs uppercase">myfantasticwebsite.com</Link>
        <Title className="font-medium">My fantastic website</Title>
        <Description className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit
          fugiat dicta nisi facere...
        </Description>
      </div>
    </Card>
  );
};

export default card;
