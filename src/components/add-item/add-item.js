import React, {Component} from 'react'
import './add-item.scss'

export default class AddItem extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label.length) {
      this.props.onAdd(this.state.label);

      this.setState({
        label: ''
      })
    }
  };

  render() {
    const { label } = this.state;
    return (
      <form className="add-item-wrapper d-flex align-items-center"
            onSubmit={this.onSubmit}>
        <input  className="form-control"
                placeholder="What needs to be done"
                type="text"
                value={label}
                onChange={this.onLabelChange}
        />

        <button type="submit"
                className="btn btn-outline-secondary add-item">Добавить</button>
      </form>
    )
  }
};
