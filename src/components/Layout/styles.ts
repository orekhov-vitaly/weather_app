import styled from "@emotion/styled";

export const LayoutComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 28px 85px;
    backdrop-filter: blur(18px);
    background: rgba(18, 45, 77, 0.5);
    border-bottom: 1px solid #D2D2D2;
    color: #474747ff;
`;

export const Logo = styled.div`
    flex-shrink: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    cursor: pointer;
`;

export const NavContainer = styled.nav`
    display: flex;
    gap: 16px;
`;

export const Main = styled.main`
    display: flex;
    flex: 1;
`;

export const HeaderLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 200px;
`;