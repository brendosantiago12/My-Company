import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../../components/Modal/Modal'
import { VscLoading } from 'react-icons/vsc'
import {  Wrapper, Content, HeadTable,
          Text, Select, Table, RowTitle, 
          RowBody,Row, HeadRow, BodyRow, View  } from './style';

import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getFemaleUsers, getMaleUsers } from '../../redux/actions/usersAction'
import { getUser } from '../../redux/actions/userAction'

const Home = ()=>{
    const [ select, setSelect ] = useState('')
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(0)
    
    const dispatch = useDispatch()

    const { items, loading } = useSelector((state) => {
        switch(select){
            case 'female':
                return state.femaleUsers
            case 'male':
                return state.maleUsers
            default:
                return state.allUsers
        }
    })
    useEffect(()=>{
        switch(select){
            case 'female':
                dispatch(getFemaleUsers(page,select))
            case 'male':
                dispatch(getMaleUsers(page,select))
            default:
                dispatch(getAllUsers(page))
        }
    },[page,select])

    useEffect(()=>{
        const interserction = new IntersectionObserver((entries)=>{
            if(entries.some((entry) => entry.isIntersecting)){
                setPage((pageInsideState) => pageInsideState + 1 )
            }
        })
        interserction.observe(document.querySelector('#loadingMore'))
        return ()=> interserction.disconnect()
    },[])

    const modalOpen = (user)=>{
        dispatch(getUser(user))
        setOpen(true)
    }
    
    return(
        <Wrapper>
            <Content>
                <HeadTable>
                    <Text >Opus igitur est dicere possit dura omni specie, "Tu autem in specie, non videntur, nec omnino res est." El examine ab eis praecepta eius quae habes, et primo et principaliter</Text>
                    <Select value={select} onChange={(event) => setSelect(event.target.value)}>
                        <option value="all" hidden>Todos</option>
                        <option value="female">Mulheres</option>
                        <option value="male">Homens</option>
                    </Select>
                </HeadTable>
                <Table>
                    <RowTitle>
                        <Row>
                            <HeadRow>Name</HeadRow>
                            <HeadRow>Gender</HeadRow>
                            <HeadRow>Birth</HeadRow>
                            <HeadRow>Actions</HeadRow>
                        </Row>
                    </RowTitle>
                    <RowBody>
                    {!loading ? (
                            items.map((user, index)=>(
                                <Row key={index}>
                                    <BodyRow>{user.name.first}</BodyRow>
                                    <BodyRow>{user.gender}</BodyRow>
                                    <BodyRow>{user.registered.date}</BodyRow>
                                    <BodyRow> 
                                        <Link to={`/${user.id.value}`}>
                                            <View onClick={ ()=> modalOpen(user)} >Vizualizar</View>
                                        </Link> 
                                    </BodyRow>
                                </Row>
                            ))
                        ) : <span>carregando...</span>}
                    </RowBody>
                </Table>
               
                <span id="loadingMore"> <VscLoading/> Loading More...</span>
                { open && ( <Modal setOpen={setOpen}/> ) }
            </Content>
        </Wrapper>
    )
}
export default Home;

