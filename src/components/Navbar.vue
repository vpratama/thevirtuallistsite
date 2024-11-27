<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">The Virtuallist</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="submenu" is-nav>
            <b-navbar-nav class="ml-auto">
                <router-link :to="{name: 'home'}" class="nav-item" activeClass="active">Home</router-link>
                <router-link :to="{name: 'aboutme'}" class="nav-item" activeClass="active">About Me</router-link>
                <router-link :to="{name: 'cosplayprojects'}" class="nav-item" activeClass="active">Cosplay Projects</router-link>
                <router-link :to="{name: 'contactme'}" class="nav-item" activeClass="active">Contact Me</router-link>
                <router-link :to="{name: 'newsfromfb'}" class="nav-item" activeClass="active">News From FB</router-link>
                <router-link :to="{name: 'newsfromig'}" class="nav-item" activeClass="active">News From IG</router-link>
            </b-navbar-nav>    
        </b-collapse>
    </b-navbar>
</template>

<style lang="scss" scoped>
    // Navbar Styles
    .navbar {
        &-brand {
            color: #FFFFFF;
            font-weight: bold;
            &:hover {
                color: #FFFFFF;
                font-weight: bold;
            }
        }

        &-toggle {
            background-color: transparent;
            border: none;
            color: #FFFFFF;
        }

        .nav-item {
            margin-left: 5px;
            margin-right: 5px;
            color: #FFFFFF;
            &:hover {
                color: #FFFFFF;
                font-weight: bold;
            }

            &.active {
                color: #FFFFFF;
                font-weight: bold;
            }
        }
    }
</style>