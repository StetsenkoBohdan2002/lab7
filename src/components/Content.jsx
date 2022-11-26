import './Content.css';
import React, { Component } from 'react';

export default class Content extends Component {
  state = {
    name: '',
    variant: null,
    group: '',
    tel: '',
    idCard: '',
    nameValid: false,
    varValid: false,
    groupValid: false,
    telValid: false,
    idValid: false,
  };
  validName = (event) => {
    this.setState({ name: event.target.value });
    if (/\b[A-Z][a-z]+ \b[A-Z].[A-Z]./gi.test(event.target.value)) {
      this.setState({ nameValid: true });
    } else {
      this.setState({ nameValid: false });
    }
  };
  validVar = (event) => {
    this.setState({ variant: +event.target.value });
    if (/[0-9]{2}/gi.test(event.target.value)) {
      this.setState({ varValid: true });
    } else {
      this.setState({ varValid: false });
    }
  };
  validGroup = (event) => {
    this.setState({ group: event.target.value });
    if (/[A-Z]{2}-[0-9]{2}/gi.test(event.target.value)) {
      this.setState({ groupValid: true });
    } else {
      this.setState({ groupValid: false });
    }
  };
  validTel = (event) => {
    this.setState({ tel: event.target.value });
    if (/\+\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(event.target.value)) {
      this.setState({ telValid: true });
    } else {
      this.setState({ telValid: false });
    }
  };
  validId = (event) => {
   this.setState({ idCard: event.target.value });
   if (/[A-Z]{2} [#№][0-9]{6}/.test(event.target.value)) {
     this.setState({ idValid: true });
   } else {
     this.setState({ idValid: false });
   }
 };

  render() {
    return (
      <main className='main'>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='full-name'>ПІБ:</label>
          <input
            className={this.state.nameValid ? 'valid' : 'invalid'}
            onChange={(e) => this.validName(e)}
            id='full-name'
            type='text'
            name='full-name'
            placeholder='ПІБ - TTTTTT T.T.'
          ></input>
          <label htmlFor='variant'>Варіант:</label>
          <input
            onChange={(e) => this.validVar(e)}
            className={this.state.varValid ? 'valid' : 'invalid'}
            id='variant'
            type='number'
            name='variant'
            placeholder='Варіант'
          ></input>
          <label htmlFor='group'>Група:</label>
          <input
            onChange={(e) => this.validGroup(e)}
            className={this.state.groupValid ? 'valid' : 'invalid'}
            id='group'
            type='text'
            name='group'
            placeholder='Група'
          ></input>
          <label htmlFor='tel'>Телефон:</label>
          <input
            onChange={(e) => this.validTel(e)}
            className={this.state.telValid ? 'valid' : 'invalid'}
            id='tel'
            type='text'
            name='tel'
            placeholder='Телефон'
          ></input>
          <label htmlFor='id-card'>ID-card:</label>
          <input
            onChange={(e) => this.validId(e)}
            className={this.state.idValid ? 'valid' : 'invalid'}
            id='id-card'
            type='text'
            name='id-card'
            placeholder='ID-card'
          ></input>
          <button type='submit' className='submit-btn'>
            Send
          </button>
        </form>
      </main>
    );
  }
}
