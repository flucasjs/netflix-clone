import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

const Header = styled.div``;

const Body = styled.div``;

const Frame = styled.div``;

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
  Frame,
  Title,
};
