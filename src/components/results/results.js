import React from 'react';
// import JSONView from 'react-json-view';


class Results extends React.Component {
  render() {
    if(this.props.apiResult.results){ 
      return (
        <>
          <div id="formResult">
            <div id='json'><pre>"Response":{JSON.stringify(this.props.apiResult, null, 2)}</pre></div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </>
        

      );
    }
    else{ 
      return (
        <>
          <div id="formResult2">
            <div id='json'></div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
    
      );
    }
    // if(this.props.apiResult.results){ 
    //     return (
    //         <div id="formResult">
    //         <JSONView id="json-View" src={this.props.apiResult}></JSONView>
    //         </div>
    //     )
    //     }
    //     else{ 
    //         return (
    //             <div id="formResult2">
    //                     <div id='json'></div>
    //             </div>
    //         )
    //         }
  }
}

export default Results;