<template>
    <div class="row">
        <div class="col-sm-8 cover">
        </div>
        <div class="col-sm-4">
            <div class="container">
                <h1>The Virtuallist.</h1>
                <h4>INFP | Baker, Driver, Hotelier, Cosplayer, Photographer</h4>
                <p class="mt-5 mb-5" align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio metus, condimentum in ipsum sit amet, iaculis placerat leo. Nullam gravida, sapien ac pulvinar aliquam, nulla tortor vulputate ante, in consectetur tellus massa ut sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Ut nibh magna, porta quis nibh eget, viverra auctor arcu. Ut dolor elit, rutrum vitae varius in, tincidunt sit amet turpis. Aenean consectetur varius sapien, sed rutrum quam ultrices a.</p>
                <router-link :to="{ name: 'aboutme' }" class="btn btn-primary mb-2">Want to know about me?</router-link>
                <router-link :to="{ name: 'contactme' }" class="btn btn-outline-primary">Contact me?</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    /* hp panjang */
    @media (min-width: 280px) and (max-width: 320px) {
        .row {
            width: 100vw;
            margin-right: 0;
            margin-left: 0;
            display: flex;
            flex-direction: row;
            .col-sm-8.cover {
                background-image: url(../../src/assets/photo/back.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
            }
            .col-sm-4 {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    justify-content: center;
                    padding-right: 50px;

                    h1 {
                        font-size: 30px;
                        color: white;
                        
                    }
                    h4 {
                        font-size: 20px;
                        color: white;
                    }
                    p {
                        font-size: 10px;
                        color: white;
                    }
                }
            }
        }
    }

    /* hp */
    @media (min-width: 321px) and (max-width: 480px) {
        .row {
            width: 100vw;
            margin-right: 0;
            margin-left: 0;
            display: flex;
            flex-direction: row;
            .col-sm-8.cover {
                background-image: url(../../src/assets/photo/back.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
            }
            .col-sm-4 {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    justify-content: center;
                    padding-right: 50px;

                    h1 {
                        font-size: 30px;
                        color: white;
                        
                    }
                    h4 {
                        font-size: 20px;
                        color: white;
                    }
                    p {
                        font-size: 10px;
                        color: white;
                    }
                }
            }
        }
    }

    /* tablet mini */
    @media (min-width: 481px) and (max-width: 768px) {
        .row {
            width: 100vw;
            padding-right: 0px;
            display: flex;
            flex-direction: row;
            .col-sm-8.cover {
                background-image: url(../../src/assets/photo/back.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
            }
            .col-sm-4 {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    justify-content: center;
                    padding-right: 50px;

                    h1 {
                        font-size: 30px;
                    }
                    h4 {
                        font-size: 20px;
                    }
                    p {
                        font-size: 10px;
                    }
                }
            }
        }
    }

    /* tablet / desktop layar kecil */
    @media (min-width: 769px) and (max-width: 1024px) {
        .row {
            width: 99vw;
            padding-right: 0px;
            .col-sm-8.cover {
                background-image: url(../../src/assets/photo/back.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 95.8vh;
                clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
            }
            .col-sm-4 {
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 95.8vh;
                    justify-content: center;
                    padding-right: 50px;
                }
            }
        }
    }

    /* tablet / desktop layar besar */
    @media (min-width: 1025px) and (max-width: 1200px) {
        .row {
            width: 99vw;
            padding-right: 0px;
            .col-sm-8.cover {
                background-image: url(../../src/assets/photo/back.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
            }
            .col-sm-4 {
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 94vh;
                    justify-content: center;
                    padding-right: 50px;
                }
            }
        }
    }

    /* tablet / desktop layar extra besar */
    @media (min-width: 1201px) {
        .row {
            width: 99vw;
            padding-right: 0px;
            .col-sm-8.cover {
                background-image: url(../../src/assets/photo/back.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                height: 94vh;
                clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
            }
            .col-sm-4 {
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 94vh;
                    justify-content: center;
                    padding-right: 50px;
                }
            }
        }
    }
</style>