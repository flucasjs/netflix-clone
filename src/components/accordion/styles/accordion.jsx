import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  margin: auto;
  max-width: calc( 66.66666666666666% - 6rem );
`;

const Item = styled.div`
  color: white;
  margin: 0 0 0.5rem 0;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.5rem;
  font-weight: normal;
  background: #303030;
  padding: 1.5rem;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
      font-size: 16px;
    }
`;

const Body = styled.div`
  max-height: ${({ toggleShow }) => (toggleShow ? '75rem' : '0')};
  overflow: hidden;
  visibility: ${({ toggleShow }) => (toggleShow ? 'visible' : 'collapse')};
  transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: ${({ toggleShow }) => (toggleShow ? '1.5rem' : '0 1.5rem')};
  white-space: pre-wrap;
  user-select: none;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export {
  Container,
  Inner,
  Item,
  Header,
  Body,
  Title,
};
