import React from "react"
import Link from "gatsby-link"

export default () => 
    <div style={{ color: `tomato` }}>
        <h1>Amazing Pandas Eating Things</h1>
        <div>
            <img
                src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                alt="Group of pandas eating bamboo"
            />
        </div>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <div>
            <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
            <p>
                What do I like to do? Lots of course but definitely enjoy building
                websites.
            </p>
        </div>

        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br />

        <div style={{ margin: '3rem auto', maxWidth: 600 }}>
            <h1>Richard Hamming on Luck</h1>
            <div>
                <p>
                    From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                        You and Your Research
        </a>”.
      </p>
                <blockquote>
                    <p>
                        There is indeed an element of luck, and no, there isn’t. The prepared
                        mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
                        <em>
                            The particular thing you do is luck, but that you do something is
                            not.
          </em>
                    </p>
                </blockquote>
            </div>
            <p>Posted April 09, 2011</p>
        </div>
        
        <div>
            <Link to="/page-2/">Link</Link>
        </div>

        <div>
            <Link to="/about-css-modules/">About</Link>
        </div>
    </div>