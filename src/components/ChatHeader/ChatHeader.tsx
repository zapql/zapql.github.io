import React, {FC} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from "@material-ui/core/styles";
import styled, { ThemeProvider } from "styled-components";

// --primary-bg: #2c6157
// Nao esta aplicando
const Navbar = styled(AppBar)`
    background-color: var(--primary-bg);
    color: var(--primary-text);
    font-size: 20px;
    line-height: 40px;
    position: absolute;
`;

const theme = createMuiTheme();

interface HeaderProps {
    contactInfo?: string;
}

const ChatHeader: FC<HeaderProps> = ({ contactInfo="Gestor Messenger" }) => {
    return (
        <div>
            <ThemeProvider theme={theme}>

            <Navbar>
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        {contactInfo}
                    </Typography>
                </Toolbar>
            </Navbar>
            </ThemeProvider>
        </div>
    )
}

export default ChatHeader