import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductListt from "../../components/ProductListt/ProductListt";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class ProducListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/products",
      data: null,
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });


      
  }
  render() {
    var { products } = this.state;

    return (
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/quanlisanpham/add" className="btn btn-info">
          Thêm sản phẩm
        </Link>
        <ProductListt />
        {this.showProducts(products)}
      </div>
    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem 
        key={index} 
        product={product} 
        index={index}
        
        />;
      });
    }
    return result;
  }
}
const mapStateToPropt = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToPropt, null)(ProducListPage);
