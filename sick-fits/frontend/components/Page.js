import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next' ;
    src: url( '/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal ;
    font-style: normal ;
  }

  html {
    --red: #ff000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 (0,0,0,0.09);
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit ;
  }

  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin: 0;
    padding: 0;
    line-height: 2;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none ;
    color: var(--black);

    &:hover {
      text-decoration:underline ;
    }
  }

  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    <InnerStyles> {children}</InnerStyles>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
