

// class CustomComp extends React.Component {

//   render() {
//     var heading = React.createElement('h1', null, 'Heading');
//     var paragraph = React.createElement('p', null, 'Paragraph');

//     return (
//       React.createElement('div', null, heading, paragraph)
//     );
//   }

// }
// var firstComp = React.createElement(CustomComp, null);
// var content = document.getElementById('content');
// ReactDOM.render(firstComp, content);






















// class CustomLink extends React.Component {

//   render() {

//     return (
//       React.createElement('a', this.props, this.props.linkt)
//     );
//   }


// }

// var myLinks = React.createElement('div', null,

//   React.createElement(CustomLink, { href: 'https://google.com', linkt: 'Google' }),
//   React.createElement(CustomLink, { href: 'https://facebook.com', linkt: 'Facebook'}),
//   React.createElement(CustomLink, { href: 'https://youtube.com' , linkt: 'YouTube'})
// );





// var content = document.getElementById('content');
// ReactDOM.render(myLinks, content);











// class CustomLink extends React.Component {

//   render() {

//     return (
//       React.createElement('a', this.props, this.props.linkt)
//     );
//   }


// }




class CustomLink extends React.Component {
render () {
  return (
    React.createElement('a', this.props, this.props.linkt)
  );
  
}
}


var fLink = React.createElement(CustomLink, { href: 'https://google.com', title: 'google', linkt: 'Google ' });
var sLink = React.createElement(CustomLink, { href: 'https://facebook.com', linkt: 'Facebook ' });
var tLink = React.createElement(CustomLink, { href: 'https://youtube.com', linkt: 'YouTube ' });


var myLinks = React.createElement('div', null, fLink, sLink, tLink);


// var myLinks = React.createElement('div', null,

//   React.createElement(CustomLink, { href: 'https://google.com', linkt: 'Google' }),
//   React.createElement(CustomLink, { href: 'https://facebook.com', linkt: 'Facebook'}),
//   React.createElement(CustomLink, { href: 'https://youtube.com' , linkt: 'YouTube'})
// );


var content = document.getElementById('content');
ReactDOM.render(myLinks, content);


// var content = document.getElementById('content');
// ReactDOM.render(myLinks, content);



