import React, { Component } from "react";
// import ProductItem from "../ProductItem/ProductItem";

class ProductListt extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách sản phẩm</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>stt</th>
                  <th>mã</th>
                  <th>tên</th>
                  <th>giá</th>
                  <th>trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListt;
