import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
);

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
    <g.Div
        margin={`0 auto`}
        maxWidth={700}
        padding={rhythm(2)}
        paddingTop={rhythm(1.5)}
    >
        <Link to='/'>
            <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
                {data.site.siteMetadata.title}
            </g.H3>
        </Link>
        <ul className={linkStyle}>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/about-panda">About Pandas</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </ul>
        {children()}
    </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;