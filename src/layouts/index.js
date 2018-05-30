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
    >
        <header style={{ backgroundColor: `#FFA500` }}>
            <div style={{ margin: 'auto', maxWidth: 800, lineHeight: 5 }}>
                <Link to='/'>
                    <g.H3 display={`inline-block`}>
                        {data.site.siteMetadata.title}
                    </g.H3>
                </Link>
                <ul className={linkStyle}>
                    <ListLink to="/about">About</ListLink>
                    <ListLink to="/blog">Blog</ListLink>
                    <ListLink to="/about-panda">About Pandas</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                    <ListLink to="/my-files">Source Files</ListLink>
                </ul>
            </div>
        </header>
        <div style={{ margin: '3rem auto', maxWidth: 600 }}>
            {children()}
        </div>
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