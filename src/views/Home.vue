<template>
    <div class="row">
        <div class="col-8 cover">
        </div>
        <div class="col-4">
            <div class="d-flex flex-column justify-content-center h-100">
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
    .row {
        width: 100vw;
        .col-8.cover {
            background-image: url(../../src/assets/photo/back.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            height: 94vh;
            clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
        }
    }
</style>