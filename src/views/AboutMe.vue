<template>
    <div class="row">
        <div class="col-4">
            <div class="d-flex flex-column justify-content-center h-100">
                <h1>About Me</h1>
                <h4>The Virtuallist a.k.a Steven Adithyawan Sonjaya</h4>
                <p class="mt-5 mb-5 scrollable" align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus leo sit amet elementum pharetra. Fusce augue libero, aliquet vitae commodo ut, hendrerit quis sem. Nullam vitae lobortis nisi. Sed gravida lorem vel elit interdum finibus. Nam faucibus suscipit diam at blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed tortor justo. Integer at volutpat magna. Curabitur euismod ex massa, eu hendrerit lectus feugiat sed. Donec elit libero, vulputate id ornare ut, fringilla at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent efficitur dictum mauris, vel varius elit venenatis id. In sit amet libero et neque consectetur pellentesque sit amet id nulla. Aliquam ornare eros non fermentum sodales. Maecenas rutrum sollicitudin nunc et sodales. Praesent aliquet libero sit amet odio semper, ut facilisis nisl ultrices. Cras ut ante odio. Integer imperdiet vulputate quam, eu condimentum risus rhoncus et. Vestibulum pharetra nulla sed rhoncus blandit. Nam nunc lacus, fringilla eu bibendum id, vehicula in diam. Nullam ex elit, gravida ut elit quis, laoreet viverra erat. Morbi vitae porta ipsum. Suspendisse eget faucibus arcu. Etiam scelerisque, nunc ac consequat commodo, mi orci varius tortor, malesuada laoreet felis sem eget magna. Phasellus varius gravida nisi, nec gravida velit iaculis ut. Praesent mauris magna, fermentum ut posuere placerat, tempor ac magna. Pellentesque quis laoreet risus, eget dignissim quam. Aliquam vitae vestibulum dolor. Maecenas consectetur tellus ante, eu tincidunt mauris luctus ut. Donec venenatis, felis sit amet maximus sagittis, massa mi commodo tortor, vitae egestas lorem nunc sit amet sapien. Maecenas imperdiet nisi nibh, et ultrices elit semper consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tortor dolor, iaculis vitae bibendum sit amet, ultrices sed ipsum. Praesent porttitor velit in leo ullamcorper, vel posuere nisi luctus. Cras facilisis imperdiet consequat. Duis porta nunc a tincidunt faucibus. Duis vestibulum maximus tortor quis porttitor.</p>
                <router-link :to="{ name: 'cosplayprojects' }" class="btn btn-primary mb-2">Cosplay projects</router-link>
            </div>
        </div>
        <div class="col-8 cover">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .row {
        width: 100vw;
        margin-left: 0px;
        .col-4 {
            padding-left: 50px;
            padding-right: 0px;

            .scrollable {
                max-height: 500px;
                overflow-y: auto;
                padding-right: 15px;
            }
        }
        .col-8.cover {
            background-image: url(../../src/assets/photo/front.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            height: 94vh;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
            margin: 0 0 0 0;
            padding: 0 0 0 0;
        }
    }
</style>