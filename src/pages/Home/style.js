import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 80%;
    max-width: 800px;
    min-height: 100vh;
    padding-top: 120px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const HeadTable = styled.div`
    width: 100%;
    height: 20vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 14px;
`
export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 28px;
`;
export const Select = styled.select`
    width: 100%;
    height: 36px;
    margin-bottom: 20px;
    padding: 8px;

    option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }

    ::placeholder {
    color: black;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.5;
  }
`;
export const ContentTable = styled.div`
    overflow-x: auto;
    
`;
export const Table = styled.table`
    min-width: 100%;
    min-height: 70vh;

    border: 1px solid black;
    border-collapse: collapse;
    margin-bottom: 80px;
    @media(max-width: 800px){
        overflow-x: auto;
    }
    
`;
export const Row = styled.tr`
    &:nth-child(even){
        background-color: #F5F5F5;
    }
`;

export const RowTitle = styled.thead``;
export const RowBody = styled.tbody``;

export const HeadRow = styled.th`
    border: 1px solid black;
    border-collapse: collapse;
    background-color: #1976D2;
    color: white;
    padding: 10px;
`;
export const BodyRow = styled.td`
    
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px 20px;
`;
export const View = styled.button`
    background-color: #1976D2;
    padding: 5px 15px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3s;
    &:hover{
        opacity: 1;
    }
`;