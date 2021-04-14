import Card from '../components/Card';
import { useState } from 'react';
import domtoimage from 'dom-to-image-more';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';


export default function Home() {

  const [title, setTitle] = useState('Hi, I\'m Guille!');
  const [titleWeight, setTitleWeight] = useState('font-medium');
  const [bgRadius, setBgRadius] = useState('rounded-3xl');
  const [description, setDescription] = useState('Here I blog about traveling and developing.');

  const saveImage = () => {
    var node = document.getElementById('image2save');
    htmlToImage.toPng(node, { canvasWidth: 3000, canvasHeight: 1000, pixelRatio: 3 })
      .then(function (dataUrl) {
        download(dataUrl, 'my-node.png');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  return (
    <div className="container mx-auto">
      <div className="w-full">
        <Card bgRadius={bgRadius} title={title} titleWeight={titleWeight} description={description}></Card>
        <div className="mx-auto max-w-screen-md rounded-tr-none rounded-tl-none border-l border-r border-b px-24 py-14 rounded-xl">
          <div className="flex lg:space-x-8 flex-wrap lg:flex-nowrap mb-4">
            <div className="flex-initial">
              <label>Border style</label>
              <select value={bgRadius} onChange={event => setBgRadius(event.target.value)}>
                <option value="rounded-3xl">3XL</option>
                <option value="rounded-2xl">2XL</option>
                <option value="rounded-xl">XL</option>
                <option value="rounded-lg">LG</option>
                <option value="rounded-none">None</option>
              </select>
            </div>
          </div>
          <div className="flex lg:space-x-8 flex-wrap lg:flex-nowrap mb-4">
            <div className="flex-1">
              <label>Title</label>
              <input className="w-full" type="text" value={title} onChange={event => setTitle(event.target.value)} />
            </div>
            <div>
              <label>Style</label>
              <select value={titleWeight} onChange={event => setTitleWeight(event.target.value)}>
                <option value="font-black">Black</option>
                <option value="font-bold">Bold</option>
                <option value="font-medium">Medium</option>
                <option value="font-light">Light</option>
                <option value="font-extralight">Extra light</option>
              </select>
            </div>
          </div>
          <label>Body</label>
          <textarea className="w-full" value={description} onChange={event => setDescription(event.target.value)} />
          <button onClick={saveImage} className="button mt-4">Save image</button>
        </div>
      </div>
    </div>
  )
}
