import React, {FC} from 'react';

// import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

// const mapStateToProps = (state) => {
//   return {
//     pageName: state.header.pageName
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPageName() {
//       dispatch({type: "SET_PAGE_NAME"})
//     }
//   }
// }

// --primary-bg: #2c6157
// Nao esta aplicando
const Navbar = styled(AppBar)`
    background-color: var(--primary-bg);
    color: var(--primary-text);
    font-size: 20px;
    line-height: 40px;
    position: absolute;
`;

interface HeaderProps {
    contactInfo?: string;
}

const ChatHeader: FC<HeaderProps> = ({ contactInfo="Gestor Messenger" }) => {
    return (
        <div>
            <Navbar>
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        {contactInfo}
                    </Typography>
                </Toolbar>
            </Navbar>
        </div>
    )
}

// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     this.classes = this.props.classes
//     this.open = props.open
//     this.fixedHeightPaper = clsx(this.classes.paper, this.classes.fixedHeight);
//   }
  
//   render() {
//     return (
//       <div>
//         <AppBar position="absolute" className={clsx(this.classes.appBar, this.open && this.classes.appBarShift)}>
//               <Toolbar className={this.classes.toolbar}>

//                 {/* <IconButton
//                   edge="start"
//                   color="inherit"
//                   aria-label="open drawer"
//                   className={clsx(this.classes.menuButton, this.open && this.classes.menuButtonHidden)}
//                 >
//                   <MenuIcon />
//                 </IconButton> */}

//                 <Typography component="h1" variant="h6" color="inherit" noWrap className={this.classes.title}>
//                   {this.props.pageName}
//                 </Typography>
//               </Toolbar>
//             </AppBar>
//       </div>
//     )
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
export default ChatHeader