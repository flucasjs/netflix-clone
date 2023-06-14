import styled from 'styled-components/macro';

const Container = styled.div`
  padding: 0 4%;
  margin: 70px auto 0;
  max-width: 980px;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  font-size: 13px;
  padding: 0;
  margin-bottom: 14px;
`;

const Item = styled.li`
  flex: 0 0 50%;
  margin-bottom: 16px;
  list-style-type: none;

  @media (min-width: 800px) {
    flex-basis: 25%;
  }
`;

const Link = styled.a`
  color: #757575;
  text-decoration: none;
`;

const Title = styled.p`
  color: #757575;
  font-size: 15px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: #757575;
  font-size: 13px;
  margin-bottom: 40px;
`;

export {
  Container,
  List,
  Item,
  Link,
  Title,
  Text,
};
