import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import styled from 'styled-components'
const CardStyles = styled.div`
  display: inline-block;
  max-width: 46%;
  margin: 2%;
`
const PriceTagStyles = styled.p`
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  text-align: center;
`
class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id)
  }
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <CardStyles key={item.id}>
          <div className="card">
            <div className="card-image">
              <img src={item.image} alt={item.title} />
              <span className="card-title">{item.title}</span>
              <span
                to="/"
                className="btn-floating halfway-fab waves-effect waves-light red"
                onClick={() => {
                  this.handleClick(item.id)
                }}
              >
                <i className="material-icons">add</i>
              </span>
            </div>
            <div className="card-content">
              <p>{item.desc}</p>
              <PriceTagStyles>${item.sale_price}</PriceTagStyles>
            </div>
          </div>
        </CardStyles>
      )
    })
    return (
      <div className="container">
        <div className="box">{itemList}</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
