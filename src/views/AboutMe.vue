<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="container d-flex flex-column justify-content-center h-100">
                <h1>About Me</h1>
                <h4>The Virtuallist</h4>
                <p class="mt-5 mb-5 scrollable" align="justify">
                    Welcome to The Virtuallist! I’m a dreamer, a doer, and a storyteller at heart, embodying the essence of an INFP—a personality fueled by imagination, empathy, and an unyielding curiosity for life. Each day offers a canvas to explore my passions, whether it’s crafting delicious pastries, steering life’s journeys as a driver, creating welcoming spaces as a hotelier, stepping into vibrant characters as a cosplayer, or capturing life’s fleeting moments through photography. Every endeavor is a piece of my evolving story, blending creativity and authenticity.
                    <br />
                    <br />
                    As a baker, I find joy in transforming simple ingredients into delightful creations that bring smiles to faces and comfort to hearts. My time behind the wheel offers a unique perspective on the rhythm of life, while my work in hospitality allows me to extend warmth and care to people from all walks of life. Cosplay ignites my love for fantasy and self-expression, giving me the freedom to embrace different personas, while photography lets me immortalize the beauty and wonder of the world around me.
                    <br />
                    <br />
                    At the core of it all is a desire to inspire and connect. Through these diverse roles, I hope to share stories, spark joy, and leave a meaningful mark. Whether I’m baking a batch of cookies, dressing as a favorite character, or snapping a candid shot, I strive to create moments that resonate with the soul—celebrating the extraordinary in the everyday. Let’s embark on this creative journey together!</p>
                <router-link :to="{ name: 'cosplayprojects' }" class="btn btn-primary mb-2">Cosplay projects</router-link>
            </div>
        </div>
        <div class="col-lg-8 cover">
            
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
            .col-lg-4 {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                z-index: 99;
                .container {
                    h1 {
                        font-size: 30px;
                        color: white;
                        mix-blend-mode: difference;
                    }
                    h4 {
                        font-size: 20px;
                        color: white;
                        mix-blend-mode: difference;
                    }

                    p.scrollable {
                        max-height: 350px;
                        overflow-y: auto;
                        padding-right: 15px;
                        font-size: 10px;
                        color: white;
                    }

                }
            }
            .col-lg-8.cover {
                background-image: url(/cover/about.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }
        }
    }

    /* hp */
    @media (min-width: 321px) and (max-width: 480px) {
        .row {
            width: 100vw;
            margin-right: 0;
            margin-left: 0;
            .col-lg-4 {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                z-index: 99;
                .container {
                    h1 {
                        font-size: 30px;
                        color: white;
                        mix-blend-mode: difference;
                    }
                    h4 {
                        font-size: 20px;
                        color: white;
                        mix-blend-mode: difference;
                    }

                    p.scrollable {
                        max-height: 350px;
                        overflow-y: auto;
                        padding-right: 15px;
                        font-size: 15px;
                        color: white;
                    }

                }
            }
            .col-lg-8.cover {
                background-image: url(/cover/about.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }
        }
    }

    /* tablet mini */
    @media (min-width: 481px) and (max-width: 768px) {
        .row {
            width: 100vw;
            margin-right: 0;
            margin-left: 0;
            .col-lg-4 {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                z-index: 99;
                .container {
                    h1 {
                        font-size: 30px;
                    }
                    h4 {
                        font-size: 20px;
                    }
                    p {
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                        font-size: 10px;
                    }
                }
            }
            .col-lg-8.cover {
                background-image: url(/cover/about.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }
        }
    }

    /* tablet / desktop layar kecil */
    @media (min-width: 769px) and (max-width: 1024px) {
        .row {
            width: 100vw;
            .col-lg-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 350px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }
                }
            }
            .col-lg-8.cover {
                background-image: url(/cover/about.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }
        }
    }

    /* tablet / desktop layar besar */
    @media (min-width: 1025px) and (max-width: 1200px) {
        .row {
            width: 100vw;
            .col-lg-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 350px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }
                }
            }
            .col-lg-8.cover {
                background-image: url(/cover/about.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }
        }
    }

    /* tablet / desktop layar extra besar */
    @media (min-width: 1201px) {
        .row {
            width: 100vw;
            .col-lg-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 350px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }
                }
            }
            .col-lg-8.cover {
                background-image: url(/cover/about.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 94vh;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }
        }
    }    
</style>