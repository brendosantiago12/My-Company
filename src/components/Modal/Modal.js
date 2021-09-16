import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RiCloseLine } from 'react-icons/ri'
import { Wrapper,Container, Close, Content, ImgPacient, Item, Label, Txt } from './style'

const Modal = ({setOpen})=>{
    const user = useSelector(state => state.singleUser)
    
    const history = useHistory()

    const clickClose = ()=>{
        setOpen(false)
        history.push("/")
    }

    return(
        <Wrapper>
            <Container>
                <ImgPacient src={user.picture.medium} alt={user.name.first}/>
                
                <Content>
                    <Close onClick={()=>{ clickClose() }}> <RiCloseLine/> </Close>
                    <Item>
                        <Label>Nome:</Label>
                        <Txt>{user.name.first} {user.name.last}</Txt>
                    </Item>
                    <Item>
                        <Label>Id Paciente:</Label>
                        <Txt>{user.id.value}</Txt>
                    </Item>
                    <Item>
                        <Label>Genero:</Label>
                        <Txt>{user.gender}</Txt>
                    </Item>
                    <Item>
                        <Label>Nascimento:</Label>
                        <Txt>{user.dob.date}</Txt>
                    </Item>
                    <Item>
                        <Label>Email:</Label>
                        <Txt>{user.email}</Txt>
                    </Item>
                    <Item>
                        <Label>Telefone:</Label>
                        <Txt>{user.phone}</Txt>
                    </Item>
                    <Item>
                        <Label>Nacionalidade:</Label>
                        <Txt>{user.location.country}</Txt>
                    </Item>
                    <Item>
                        <Label>Endereço:</Label>
                        <Txt>Rua {user.location.street.name}, número: {user.location.street.number} </Txt>
                    </Item>
                </Content>
            </Container>
        </Wrapper>
    )
}
export default Modal;