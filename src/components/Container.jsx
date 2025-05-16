import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: left;
`;

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}