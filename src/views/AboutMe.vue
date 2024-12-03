<template>
    <div class="row">
        <div class="col-md-4">
            <div class="container d-flex flex-column justify-content-center h-100">
                <h1>About Me</h1>
                <h4>The Virtuallist</h4>
                <p class="mt-5 mb-5 scrollable" align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus leo sit amet elementum pharetra. Fusce augue libero, aliquet vitae commodo ut, hendrerit quis sem. Nullam vitae lobortis nisi. Sed gravida lorem vel elit interdum finibus. Nam faucibus suscipit diam at blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed tortor justo. Integer at volutpat magna. Curabitur euismod ex massa, eu hendrerit lectus feugiat sed. Donec elit libero, vulputate id ornare ut, fringilla at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent efficitur dictum mauris, vel varius elit venenatis id. In sit amet libero et neque consectetur pellentesque sit amet id nulla. Aliquam ornare eros non fermentum sodales. Maecenas rutrum sollicitudin nunc et sodales. Praesent aliquet libero sit amet odio semper, ut facilisis nisl ultrices. Cras ut ante odio. Integer imperdiet vulputate quam, eu condimentum risus rhoncus et. Vestibulum pharetra nulla sed rhoncus blandit. Nam nunc lacus, fringilla eu bibendum id, vehicula in diam. Nullam ex elit, gravida ut elit quis, laoreet viverra erat. Morbi vitae porta ipsum. Suspendisse eget faucibus arcu. Etiam scelerisque, nunc ac consequat commodo, mi orci varius tortor, malesuada laoreet felis sem eget magna. Phasellus varius gravida nisi, nec gravida velit iaculis ut. Praesent mauris magna, fermentum ut posuere placerat, tempor ac magna. Pellentesque quis laoreet risus, eget dignissim quam. Aliquam vitae vestibulum dolor. Maecenas consectetur tellus ante, eu tincidunt mauris luctus ut. Donec venenatis, felis sit amet maximus sagittis, massa mi commodo tortor, vitae egestas lorem nunc sit amet sapien. Maecenas imperdiet nisi nibh, et ultrices elit semper consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tortor dolor, iaculis vitae bibendum sit amet, ultrices sed ipsum. Praesent porttitor velit in leo ullamcorper, vel posuere nisi luctus. Cras facilisis imperdiet consequat. Duis porta nunc a tincidunt faucibus. Duis vestibulum maximus tortor quis porttitor.</p>
                <router-link :to="{ name: 'cosplayprojects' }" class="btn btn-primary mb-2">Cosplay projects</router-link>
            </div>
        </div>
        <div class="col-md-8 cover">
            
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
            .col-md-4 {
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
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                        font-size: 10px;
                        color: white;
                    }

                }
            }
            .col-md-8.cover {
                background-image: url(../../src/assets/photo/front.jpg);
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
            .col-md-4 {
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
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                        font-size: 15px;
                        color: white;
                    }

                }
            }
            .col-md-8.cover {
                background-image: url(../../src/assets/photo/front.jpg);
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
            .col-md-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }

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
            .col-md-8.cover {
                background-image: url(../../src/assets/photo/front.jpg);
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

    /* tablet / desktop layar kecil */
    @media (min-width: 769px) and (max-width: 1024px) {
        .row {
            width: 100vw;
            .col-md-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }
                }
            }
            .col-md-8.cover {
                background-image: url(../../src/assets/photo/front.jpg);
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
            .col-md-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }
                }
            }
            .col-md-8.cover {
                background-image: url(../../src/assets/photo/front.jpg);
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
            .col-md-4 {
                .container {
                    padding-left: 50px;
                    .scrollable {
                        max-height: 500px;
                        overflow-y: auto;
                        padding-right: 15px;
                    }
                }
            }
            .col-md-8.cover {
                background-image: url(../../src/assets/photo/front.jpg);
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