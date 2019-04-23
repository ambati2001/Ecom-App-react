import styled from 'styled-components';

export const ButtonContainer =styled.button`
    text-transform : capitalize;
    background: var(--pinkColor);
    border:0.04rem solid var(--pinkColor);
    font-size: 1.4rem;
    border-radius: 10px;
    color:var(--mainWhite);
    transition:all 0.5s ease-in-out;
    &:hover{
        background:var(--mainWhite);
        color: var(--pinkColor);
        border:0.04rem solid rgba(0,0,0,0.2);
    }
`;
