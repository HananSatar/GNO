import React, { Component } from 'react'
import Context from "../context";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //renders the header component including logo and header links
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
           <div>
            <div className="grid">
  
  <div className="img1">
                <img src={require("../images/logo11.png")} /></div>
                <div className="img2">
                <img src={require("../images/logo2.png")} /></div>

                <div className="img3">
                <img src={require("../images/logo3.png")} /></div>
                </div>  
            <div id="he">
              <h1>أستمارة تسجيل منظمة أجنبية</h1>
              </div> 
              <div id="he1">
              
              <h1> نرجو التفضل بالموافقة على تسجیل فرع منظمتنا في العراق وفقا للمعلومات الاتیة</h1>
              
          
              </div> 
              </div>
          );

        }}
      </Context.Consumer>
    );
  }
}

export default Header;
{/* const useStyles = makeStyles(theme => ({ */ }
//   root: {
//     background: theme.background,
//     border: 0,
//     borderRadius: 3,
//     boxShadow: theme.boxShadow,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// }));

// function DeepChild() {
//   const classes = useStyles();

//   return <Button className={classes.root}>Theme nesting</Button>;
// }

// function Theme() {
//   return (
//     <div>
//       <ThemeProvider
//         theme={{
//           background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         }}
//       >
//         <DeepChild />
//         <br />
//         <br />
//         <ThemeProvider
//           theme={outerTheme => ({
//             ...outerTheme,
//             background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//             boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//           })}
//         >
//           <DeepChild />
//         </ThemeProvider>
//       </ThemeProvider>
//     </div>

//   );
// }
// }} 
// export default Header;
