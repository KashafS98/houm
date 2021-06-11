import React from 'react'
import styled from 'styled-components';
import Button from '../components/Button';
import { red } from '../utils/colors';
import { headingOne } from '../utils/fonts';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;
    .header-btn {
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        width: 60%;
        padding: 5% 0;
        h1{
            text-transform: uppercase;
            ${headingOne};
            text-align: left;
            span {
                color: ${red};
            }
            margin-bottom: 5%;
        }
    }
    .content-section{
        width: 40%;
        padding: 3% 0% 3% 6%;
        p{
            font-size: 24px;
            text-align: left;
            width: 80%;
            line-height: 40px;
        }
    }
`

export default function HoumMain() {
    return (
        <Wrapper>
            <div className="header-btn">
                <h1>What’s <span>privacy</span> without being private?</h1>
                <Button>Build Your Houm</Button>
            </div>
            <div className="content-section">
                <p>
                It’s time to start treating data like your property. We are Houm, the privacy experts, and we’re here to tell you all about your data.
                </p>
            </div>
        </Wrapper>
    )
}
