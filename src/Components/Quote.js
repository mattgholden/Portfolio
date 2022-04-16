import React, { Component } from 'react';

class Quote extends Component {
  render() {

    if(this.props.data){
      var quote = this.props.data.quote.map(function(quote){
        return  <li key={quote.user}>
            <blockquote>
               <p>{quote.text}</p>
               <cite>{quote.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="quote">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Quote</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {quote}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Quote;
