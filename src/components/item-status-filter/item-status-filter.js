import React, { Component }from 'react'
import './item-status-filter.scss'

export default class ItemStatusFilter extends Component{

  buttons = [
    {name:'all', label: 'All'},
    {name:'active', label: 'Active'},
    {name:'done', label: 'Done'}
  ];

  render() {

    const  { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const klass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
                name={name}
                key={name}
                onClick={() => onFilterChange(name) }
                className={`btn ${klass}`}>{label}</button>
      )
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
