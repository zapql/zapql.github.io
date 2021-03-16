import styled, { css } from 'styled-components'
// import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'

export const SearchContainer = styled.div`
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 2vh;
    padding-right: 2vh;

${(props) =>
    props.toggleBackground
    ? css`
        background-color: #FFF;`
    : css`
        background-color: #f6f6f6;`
    }
`

export const SearchInput = styled(Input)`
    background-color: #FFF;
    border: none;
    border-radius: 999px;
    padding: 0.5vh;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    outline: none;
    box-shadow: 0 1px silver;
    font-size: 18px;
    line-height: 45px;
`