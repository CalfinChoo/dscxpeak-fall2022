import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useState } from 'react';
import logo from './logo.png'

const Container = styled.div`
    height: 60px;
    `

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span `
    font-size: 25px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    width: 350px;
    margin-left: 25px;
    padding: 8px;
`

const Input = styled.input`
    border: none;
    width: 500px;
`

const Center = styled.div`
    flex: 1;
    padding-left: 300px;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #3f51b5;
    cursor: pointer;
    margin-right: 25px;
    &:hover {
      color: #34b3f0;
      text-shadow: 1px 1px;
    }
`

const Navbar = () => {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className='mt-2 mb-7'>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><a href='/home'>
                <img
                      className="hidden lg:block w-[140px]"
                      src={logo}
                      alt="Workflow"
                    />
            </a></Center>
                <Right>

                <a href='/payment-history' className='text-[40px]'><MenuItem>HISTORY</MenuItem></a>
                <a href='/recs' className='text-[40px] hover:text-blue'><MenuItem>RECOMMENDATIONS</MenuItem></a>
                <MenuItem>
                    <Badge color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar
