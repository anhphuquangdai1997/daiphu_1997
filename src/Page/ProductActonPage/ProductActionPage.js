import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtname: "",
      txtprice: "",
      chkbStatus: "",
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onsave = (e) => {
    e.preventDefault();
    // console.log(this.state);
    var { txtname, txtprice, chkbStatus } = this.state;
    axios({
      method: "POST",
      url: "http://localhost:3000/products",
      data: {
        name: txtname,
        price: txtprice,
        status: chkbStatus,
      },
    }).then((res) => {
      console.log(res);
      //   this.props.history.push("/quanlisanpham");
      this.props.history.goBack();
    });
  };
  handleclickhomepage = () => {
    this.props.history.push("/");
  };
  componentDidMount() {}

  render() {
    var { txtname, txtprice, chkbStatus } = this.state;
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onsave}>
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                name="txtname"
                placeholder="nhập tên sản phẩm"
                value={txtname}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Giá</label>
              <input
                type="number"
                className="form-control"
                name="txtprice"
                placeholder="Input price"
                value={txtprice}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Trạng Thái</label>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="chkbStatus"
                  value={chkbStatus}
                  onChange={this.onChange}
                />
                Còn Hàng
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => this.handleclickhomepage()}
            >
              go Home
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(ProductActionPage);
