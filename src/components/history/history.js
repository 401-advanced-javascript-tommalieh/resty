import React from 'react';

class History extends React.Component{
  key = 0;
  constructor(props){
    super(props);
    this.state = {history:[], key:1};
  }

  componentDidMount(){
    const history = JSON.parse(localStorage.getItem('history'));
    console.log(history);
    this.setState({history});
  }


  render(){
    return(
      <ul>
        {
          this.state.history.map(query => {
            this.key = this.key + 1;
            return <li key={this.key}>
              <span>{query.method}</span><span>{query.url}</span>
              <div><pre>"Response":{JSON.stringify(query.response, null, 2)}</pre></div>
            </li>;
          })
        }
      </ul>
    );
  }

}

export default History;