import React, { Component } from "react";
import axios from "axios";
// import products from "../../reducers/products";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  ondelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete?")) {
      console.log(id);

      axios({
        method: "DELETE",
        url: `http://localhost:3000/products/${id}`,
        data: null,
      }).then((res) => {
        console.log(res);
        //cập nhật lại xoá
        // if (res.status === 200) {
        //   products = products.findIndex((product) => product.id !== id);
        //   this.setState({
        //     products: products,
        //   });
        // }
      });
    }
  };

  // findIndex = (products, id) => {
  //   var result = -1;
  //   products.forEach((product, index) => {
  //     if (product.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  // onedit = (id) => {
  //   axios({
  //     method: "GET",
  //     url: `http://localhost:3000/products/${id}`,
  //     data: null,
  //   }).then((res) => {
  //     console.log(res.data);
  //     var data = res.data;

  //     this.setState({
  //       idd: data.id,
  //       namee: data.name,
  //       pricee: data.price,
  //     });
  //   });
  // };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "còn hàng" : "hết hàng";
    var statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`lable lable-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to="/quanlisanpham/add"
            className="btn btn-info"
            // onClick={() => this.onEdit(product.id)}
          >
            Sửa
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.ondelete(product.id)}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
