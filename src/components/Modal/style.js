import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

    background-color: rgba(25, 118, 210, 0.7);
    transition: 0.7s;
`;
export const Container = styled.div`
    width: 60%;
    height: 70vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: white;
    position: relative;
    border-radius: 5px;
    padding: 16px;
    box-shadow: 0px 0px 4px 2px rgba(70,70,70,0.4);
`;
export const Content = styled.div`
    width: 100%;
    height: 80%;

    margin-top: 60px;
    @media(max-width: 800px){
        overflow-y: scroll;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    
`;
export const ImgPacient = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: rgba(200,200,200);
    border: 5px solid white;

    position: absolute;
    top: -10%;

    display: flex;
    justify-content: center;
    align-items: center;

    object-fit: cover;
    object-position: center;
    
`;

export const Close = styled.div`
    font-size: 30px;
    color: rgba(200,200,200);
    position: absolute;
    top: 0;
    left: 96%;
    cursor: pointer;
    @media(max-width: 800px){
        left:90%;
    }
`;
export const Item = styled.div`
    width: 50%;
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media(max-width: 800px){
        width: 100%;
        margin-top: 20px;
        align-items: center;
    }
`;
export const Label = styled.p`
    font-size: 10px;
    color: black;
    background-color: rgba(200,200,200, 0.5);
    padding-right: 10px;
`;
export const Txt = styled.h5`
    font-size: 16px;
    color: black;
    font-weight: 100;
`;