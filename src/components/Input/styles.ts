import styled from "@emotion/styled";

export const InputElement = styled.input`
    flex: 1;
    padding: 11px 19px;
    font-size: 20px;
    line-height: 1;
    border: 1px solid #fff;
    border-radius: 50px;
    background: transparent;
    color: #fff;
    outline: outset 0 rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
    backdrop-filter: blur(16px);

    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
`;