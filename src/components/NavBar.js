import styled from "styled-components"

const Box = styled.div`
   // background-color: aqua;
    padding: 24px;

`

const HeaderTitle = styled.div`
    font-weight: 600;
    font-size: 36px;
    font-family: 'Pangolin';
`

const SubTitle = styled.div`
    font-size: 14px;
`

const date = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-TH', options).replace(/, \d{4}/, '');

function NavBar() {
    return (
        <Box>
            <HeaderTitle>
                JATUPORN
            </HeaderTitle>
            <SubTitle>{formattedDate}</SubTitle>
        </Box>
    )
}

export default NavBar
