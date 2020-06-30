import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Form from './components/form/form.js'
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Results from './components/results/results.js'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0, results: [], apiResult:{}};
  }
  handleFormResult = (apiDataResult) => {
    console.log(apiDataResult.results);

    this.setState({results: apiDataResult.results, count: apiDataResult.count, apiResult: apiDataResult});
    console.log(this.state);
  }

  render(){
  return (
    <div className="App">
      <Header />
      <main>
      <Form handler={this.handleFormResult} />
      <Results results={this.state.results} count={this.state.count} apiResult={this.state.apiResult}/>
      </main>
      <Footer />
    </div>
  );
}
}

export default App;
