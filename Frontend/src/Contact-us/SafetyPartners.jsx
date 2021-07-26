import React from 'react';
import styled from 'styled-components';

const SafetyContainer = styled.div`
    text-align: center;
    padding: 1% 3%;

    & .head {
        font-weight: 700;
        border-bottom: 1px solid lightgray;
    }

    & > .partners {
        display: grid;
        padding: 2% 0;
        grid-template-columns: 33.33% 33.33% 33.33%;

        & > .imageContainer {
            margin: 2%;
        }

        & > .imageContainer > img {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 1050px) {
            grid-template-columns: 100%;

            & > .imageContainer > img {
                width: 100%;
                height: 25em;
            }
        }

        @media (max-width: 750px) {
            grid-template-columns: 100%;

            & > .imageContainer > img {
                width: 100%;
                height: 20em;
            }
        }

        @media (max-width: 550px) {

            & > .imageContainer > img {
                width: 100%;
                height: 10em;
            }
        }
    }
`;

const SafetyPartners = () => {
    return (
        <SafetyContainer>

            {/* HEAD */}
            <div className="head">
                <h3>OUR SAFETY PARTNERS</h3>
            </div>

            {/* PARTNERS CONTAINER */}
            <div className="partners">

                {/* IMAGE 1 */}
                <div className="imageContainer">
                    <img src="/Contact-Us/1hdfc.gif" alt="parter1_hdfc" />
                </div>

                {/* IMAGE 2 */}
                <div className="imageContainer">
                    <img src="/Contact-Us/2libertyvideocon.png" alt="parter2_liberty" />
                </div>

                {/* IMAGE 3 */}
                <div className="imageContainer">
                    <img src="/Contact-Us/3Edelweisse.jpg" alt="parter3_edelweise" />
                </div>
            </div>

        </SafetyContainer>
    )
}

export default SafetyPartners
