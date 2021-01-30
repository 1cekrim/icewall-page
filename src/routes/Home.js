import React from 'react';
const public_folder = (url) => process.env.PUBLIC_URL + url

const Home = () => {
    return (
        <section id="main">

        <p id="demo"></p>

        <div id="sponsors">
            <h1 id="headline">SPONSORS</h1>

            <div class="blob">
                <div class="box">
                    <img class="sponsor" src={public_folder("/static/img/sponsors/HYU_initial_kor.svg")} />
                </div>
                <div class="box">
                    <img class="sponsor" src={public_folder("/static/img/sponsors/scv_soft.svg")} />
                </div>
            </div>
        </div>

        </section>

    )
}

export default Home