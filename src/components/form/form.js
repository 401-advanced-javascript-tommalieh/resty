import React from 'react';
// import Counter from '../counter/counter.js'
import './form.scss';
// import Results from '../results/results.js'


class Form extends React.Component {
    history = [];
    constructor(props) {
      super(props);
      this.state = { 
        url: '',
        method: '',
        body: '',
        apiResponse: '',
      };
      if(!JSON.parse(localStorage.getItem('history'))){
        localStorage.setItem('history', JSON.stringify(this.history));
      }
    }

    changeHandler = (e) => {
      const url = e.target.value;
      this.setState({ url });
      // console.log(url);
    }

    selectHandler = (e) => {
      const method = e.target.value;
      this.setState({method});
      // console.log(method);
    }

    bodyChangeHandler = (e) => {
      const body = e.target.value;
      this.setState({body});
    }

    submitHandler = async (e) => {
      try{
        e.preventDefault();
        const url = '';
        const method = '';
        e.target.reset();
        switch(this.state.method){
        case 'get':
          console.log('get');
          await this.getHandler(e);
          break;
        case 'post':
          console.log('post');
          await this.postAndPutHandler(e);
          break;
        case 'put':
          console.log('put');
          await this.postAndPutHandler(e);
          break;
        case 'delete':
          console.log('delete');
          await this.deleteHandler(e);
          break;
        default:
          await this.getHandler(e);
        }
        this.setState({url, method});
      // console.log(e.target.value);
      }catch(err){
        console.log(err);
      }
    }

    getHandler = async (e) => {
      try{
        const rawApiData = await fetch(this.state.url);
        const jsonApiData = await rawApiData.json();
        console.log(jsonApiData.results);
        console.log(jsonApiData);
        this.history = JSON.parse(localStorage.getItem('history'));
        this.history.push({url: this.state.url, method: this.state.method, response: jsonApiData.results});
        localStorage.setItem('history', JSON.stringify(this.history));
        this.props.handler(jsonApiData);
      }catch(err){
        console.log(err);
      }
    }

    postAndPutHandler = async (e) => {
      try{
        const options = {
          method: `${this.state.method}`.toUpperCase(),
          body: JSON.stringify(this.state.bodyInput),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        console.log(options.body);
        const rawApiData = await fetch(this.state.url, options);
        const jsonApiData = await rawApiData.json();
        this.props.handler(jsonApiData);
      }catch(err){
        console.log(err);
      }
    }

    deleteHandler = async (e) => {
      try{
        const options = {
          method: `${this.state.method}`.toUpperCase(),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const rawApiData = await fetch(this.state.url, options);
        const jsonApiData = await rawApiData.json();
        this.props.handler(jsonApiData);
      }catch(err){
        console.log(err);
      }
    }
    
    

    render() {
      return (    
        <>
          <form onSubmit={this.submitHandler}>
            <label htmlFor="url">URL:  </label>
            <input id='url' type='text' placeholder='Enter URL here' onChange={this.changeHandler}></input>
            <button id='go' type='submit'>GO!</button>
            <p>Please select your method:</p>
            <input type="radio" id="get" name="method" value="get" onChange={this.selectHandler}></input>
            <label htmlFor="get">GET</label>
            <input type="radio" id="post" name="method" value="post" onChange={this.selectHandler}></input>
            <label htmlFor="post">POST</label>
            <input type="radio" id="update" name="method" value="update" onChange={this.selectHandler}></input>
            <label htmlFor="update">UPDATE</label>
            <input type="radio" id="delete" name="method" value="delete" onChange={this.selectHandler}></input>
            <label htmlFor="delete">DELETE</label>
            <br></br>
            <br></br>
            <br></br>
            <textarea id="jsonBody" name="requestBody" rows="10" cols="100" onChange={this.bodyChangeHandler}></textarea>
          </form>
        </>
      );
    }

}


export default Form;
