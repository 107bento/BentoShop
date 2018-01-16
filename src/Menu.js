import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import {API} from './API';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editOpen: false,
      deleteOpen: false,
      currentMealName: '',
      currentMealPrice: 0,
      meals: []
    };

    // 在 constructor 裡就綁住 this,防止後面 this 指到父元素
    this.editToggle = this.editToggle.bind(this);
    this.deleteToggle = this.deleteToggle.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.getShopMenu();
  }

  // 跳出 editModal,抓當前餐點名稱,價格
  editToggle(mealName, mealPrice) {
    this.setState({
      editOpen: !this.state.editOpen,
      currentMealName: mealName,
      currentMealPrice: mealPrice
    });
  }

  // 跳出 deleteModal,抓當前餐點名稱
  deleteToggle(mealName) {
    this.setState({
      deleteOpen: !this.state.deleteOpen,
      currentMealName: mealName
    });
  }

  addMeal(e){
    e.preventDefault();
    // console.log(this.refs.name.value, this.refs.price.value);
    const mealName = this.refs.name.value;
    const mealPrice = this.refs.price.value;
    // 在原本欄位前面新增餐點,並顯示原餐點
    const newMeals = [{meal_name: mealName, meal_price: mealPrice, meal_discount: 0}, ...this.state.meals
    ];
    // 更新餐點陣列
    this.setState({
      meals: newMeals
    });
  }

  getShopMenu() {
    API.getShopInfo().then((res) => {
      if (res.statusCode == 200) {
        console.log(res.data);
        let data = res.data;
        this.setState({
          meals: data.meals
        });
      } else if (res.statusCode == 401) {
        alert('請重新登入');
        window.location.replace("/login");
      } else {
        alert(res.errorMessages);
        console.log(res.errorMessages);
      }
    }).catch((error) => {
      alert(error);
    });
  }

  render() {

    const awesomeSize={
      fontSize:'1.5em'
    };

    return (
    <div className="mx-auto" style={{maxWidth: '75%'}}>
        <Card className="my-3" mb-2 outline color="primary">
          <CardHeader style={{backgroundColor: '#428bca', color: '#FFF'}} text-white>新增餐點</CardHeader>
          <CardBody>
            <div className="row">
              <div className="col-md-5 form-group">
                <label>餐點名稱</label>
                <input className="form-control" type="text" placeholder="ex: 雞腿飯" ref="name"/>
              </div>
              <div className="col-md-5 form-group">
                <label>餐點價錢</label>
                <input className="form-control" type="text" placeholder="ex: 97" ref="price"/>
              </div>
              <div className="col-md-2 text-center"><Button type="submit" color="success" className="my-3" style={{width: 90}}>新增</Button></div>
            </div>
          </CardBody>
        </Card>
        <table className="my-2 table table-bordered table-hover text-center">
            <thead>
                <tr>
                    <td>餐點名稱</td>
                    <td>價格</td>
                    <td>編輯</td>
                    <td>刪除</td>
                </tr>
            </thead>
            <tbody>
              {
                this.state.meals.map((meal, i) => {
                  return (
                    <tr key={i}>
                      <td>{meal.meal_name}</td>
                      <td>{meal.meal_price}</td>
                      <td onClick={()=>this.editToggle(meal.meal_name, meal.meal_price)}><i className="fa fa-pencil" aria-hidden="true" style={awesomeSize}/></td>
                      <td onClick={()=>this.deleteToggle(meal.meal_name)}><i className="fa fa-trash" aria-hidden="true" style={awesomeSize}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
        <Modal isOpen={this.state.editOpen} toggle={this.editToggle}>
          <ModalHeader>餐點編輯</ModalHeader>
          <ModalBody>
          <div className="form-group">
              <div className="row px-5">
                <div className="form-group col-md-7">
                  <label className="col-form-label">餐點名稱</label>
                  <input type="text" className="form-control" value={this.state.currentMealName}/>
                </div>
                <div className="form-group col-md-5">
                  <label className="col-form-label">金額</label>
                  <input type="text" className="form-control" value={this.state.currentMealPrice}/>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.editToggle}>儲存</Button>
            <Button color="secondary" onClick={this.editToggle}>取消</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.deleteOpen} toggle={this.deleteToggle}>
          <ModalHeader>刪除餐點</ModalHeader>
          <ModalBody>
            <div>確定要刪除 {this.state.currentMealName} 嗎</div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteToggle}>刪除</Button>
            <Button color="secondary" onClick={this.deleteToggle}>取消</Button>
          </ModalFooter>
        </Modal>
    </div>
    );
  }
}
 
export default Menu;

// TODO
//　修改新增菜單的 layout
// call API:
// 新增
// 修改
// 刪除
