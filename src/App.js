import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Item, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import data from "./data/seed";

function importAll(imageDir) {
  let images = {};
  imageDir.forEach(r => {
    r.keys().map(item => {
      images[item.replace("./", "")] = r(item);
    });
  });
  return images;
}

const images = importAll([
  require.context("../images/products", false, /\.(png|jpe?g|svg)$/),
  require.context("../images/avatars", false, /\.(png|jpe?g|svg)$/)
]);

class ProductList extends Component {
  render() {
    return (
      <div>
        ProductList is:
        <ul>
          <Product />
        </ul>
      </div>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Image src={images["image-aqua.png"]} size="small" />
          <Item.Content>
            <Item.Header as="a">Fork Knight</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <p>Authentic Renaissance actors,delivered in just two weeks</p>
            </Item.Description>
            <Item.Extra>
              <span>Submitted By:</span>
              <Image className="ui avatar" src={images["daniel.jpg"]} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

//export default ProductList;
ReactDOM.render(<ProductList />, document.getElementById("content"));
