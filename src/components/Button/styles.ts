import styled from "@emotion/styled"

interface ButtonStyledProps {
  isDanger?: boolean
}

export const ButtonComponent = styled.button<ButtonStyledProps>`
  padding: 12px 40px;
  background: linear-gradient(0deg, #3678b4, #3678b4);
  font-size: 20px;
  font-family: inter;
  font-weight: 300;
  line-height: 1;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:disabled):hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
