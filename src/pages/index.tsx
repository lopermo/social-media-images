import Card from "../components/Card";
import { useState } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import styled from "styled-components";

import { BlockPicker, SketchPicker, TwitterPicker } from "react-color";

/**
 * Styles
 */
const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: block;
  cursor: pointer;
  max-width: max-content;
`;
const Color = styled.div`
  width: 60px;
  height: 38px;
  border-radius: 2px;
`;
const Popover = styled.div`
  position: absolute;
  zindex: 2;
`;
const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  display: block;
`;

export default function Home() {
  const types = {
    og: {
      width: 1200,
      height: 627,
    },
  };

  /* Form */
  const [type, setType] = useState("og");
  const [title, setTitle] = useState("Hi, I'm Guille!");
  const [titleWeight, setTitleWeight] = useState("font-medium");
  const [descWeight, setDescWeight] = useState("font-light");
  const [textAlign, setTextAlign] = useState("text-right");
  const [description, setDescription] = useState(
    "Here I blog about traveling and developing."
  );

  /* Picker colors */
  const presetColors = [
    "#D4F8EF",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF",
    "#0E4B3E",
  ];

  /* Background Color picker */
  const [bgColor, setBgColor] = useState({ r: 212, g: 248, b: 239, a: 1 });
  const [bgPicker, setBgPicker] = useState(false);
  const clickBgPicker = () => setBgPicker(!bgPicker);
  const closeBgPicker = () => setBgPicker(false);
  const changeBgPicker = (color) => setBgColor(color.rgb);

  /* Text Color picker */
  const [textColor, setTextColor] = useState({ r: 14, g: 75, b: 62, a: 1 });
  const [textPicker, setTextPicker] = useState(false);
  const clickTextPicker = () => setTextPicker(!textPicker);
  const closeTextPicker = () => setTextPicker(false);
  const changeTextPicker = (color) => setTextColor(color.rgb);

  /* Save the banner as image */
  const saveImage = () => {
    var node = document.getElementById("image2save");
    htmlToImage
      .toPng(node, {
        canvasWidth: parseInt(types[type].width),
        canvasHeight: parseInt(types[type].height),
        pixelRatio: 1,
      })
      .then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="flex flex-col justify-center w-screen min-h-screen bg-ghost">
      <div className="max-w-screen-sm mx-auto mb-20 text-5xl font-black leading-tight text-center text-blue-500 font-poppins">
        Create your OpenGraph image in seconds
      </div>
      <div className="flex justify-between max-w-screen-lg mx-auto lg:space-x-20">
        <div className="flex-initial">
          <Card
            bgColor={bgColor}
            textColor={textColor}
            title={title}
            titleWeight={titleWeight}
            descWeight={descWeight}
            textAlign={textAlign}
            description={description}
          />
        </div>
        <div className="flex-1">
          <div className="w-full">
            <div className="max-w-screen-md px-10 py-8 mx-auto bg-white border border-b rounded-xl">
              <div className="flex flex-wrap mb-4 lg:space-x-8 lg:flex-nowrap">
                <div className="flex-1">
                  <Label>Background</Label>
                  <Swatch onClick={clickBgPicker}>
                    <Color
                      style={{
                        background: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`,
                      }}
                    />
                  </Swatch>
                  {bgPicker ? (
                    <Popover>
                      <Cover onClick={closeBgPicker} />
                      <SketchPicker
                        presetColors={presetColors}
                        color={bgColor}
                        onChange={changeBgPicker}
                      />
                    </Popover>
                  ) : null}
                </div>
                <div className="flex-1">
                  <Label>Text</Label>
                  <Swatch onClick={clickTextPicker}>
                    <Color
                      style={{
                        background: `rgba(${textColor.r}, ${textColor.g}, ${textColor.b}, ${textColor.a})`,
                      }}
                    />
                  </Swatch>
                  {textPicker ? (
                    <Popover>
                      <Cover onClick={closeTextPicker} />
                      <SketchPicker
                        presetColors={presetColors}
                        color={textColor}
                        onChange={changeTextPicker}
                      />
                    </Popover>
                  ) : null}
                </div>
                <div className="flex-1">
                  <Label>Text align</Label>
                  <select
                    value={textAlign}
                    onChange={(event) => setTextAlign(event.target.value)}
                  >
                    <option value="text-left">Left</option>
                    <option value="text-center">Center</option>
                    <option value="text-right">Right</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap mb-4 lg:space-x-8 lg:flex-nowrap">
                <div className="flex-1">
                  <Label>Title</Label>
                  <input
                    className="w-full"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div>
                  <Label>Style</Label>
                  <select
                    value={titleWeight}
                    onChange={(event) => setTitleWeight(event.target.value)}
                  >
                    <option value="font-black">Black</option>
                    <option value="font-bold">Bold</option>
                    <option value="font-medium">Medium</option>
                    <option value="font-normal">Regular</option>
                    <option value="font-light">Light</option>
                    <option value="font-extralight">Extra light</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap mb-4 lg:space-x-8 lg:flex-nowrap">
                <div className="flex-1">
                  <Label>Body</Label>
                  <textarea
                    className="w-full"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <div>
                  <Label>Style</Label>
                  <select
                    value={descWeight}
                    onChange={(event) => setDescWeight(event.target.value)}
                  >
                    <option value="font-black">Black</option>
                    <option value="font-bold">Bold</option>
                    <option value="font-medium">Medium</option>
                    <option value="font-normal">Regular</option>
                    <option value="font-light">Light</option>
                    <option value="font-extralight">Extra light</option>
                  </select>
                </div>
              </div>
              <button onClick={saveImage} className="mt-4 ml-auto button">
                Save image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
