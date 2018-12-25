import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Item, Image, Icon } from "semantic-ui-react";
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
    const product = data[0];
    return (
      <div>
        ProductList is:
        <ul>
          <Product
            productImg={product.product_image_url}
            title={product.title}
            description={product.description}
            submitterImg={product.submitter_avatar_url}
            votes={product.votes}
          />
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
          <Item.Image src={images[this.props.productImg]} size="small" />
          <Item.Content>
            <Item.Header as="a">
              <Icon.Group>
                <Icon name="caret up" />
              </Icon.Group>
              {this.props.votes}
            </Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <p>{this.props.description}</p>
            </Item.Description>
            <Item.Extra>
              <span>Submitted By:</span>
              <Image
                className="ui avatar"
                src={images[this.props.submitterImg]}
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

//export default ProductList;
ReactDOM.render(<ProductList />, document.getElementById("content"));
