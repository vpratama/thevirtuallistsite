<template>
    <div class="container d-flex justify-content-center align-items-center pt-5">
        <div class="col-md-10 text-center">
            <div class="img-container mb-4">
                <img class="img-fluid img-thumbnail rounded-circle" src="/cover/about.jpg" alt="Profile Picture" />
            </div>
            <h1>The Virtuallist</h1>
            <h3>Contact me on this platform.</h3>
            <div class="social-media mt-3">
                <a href="https://www.facebook.com/steven.adhityawan" target="_blank" class="me-2">
                    <img src="/logo/facebook.svg" alt="Facebook" width="30" />
                </a>
                <a href="https://www.instagram.com/the_virtuallist" target="_blank" class="me-2">
                    <img src="/logo/instagram.svg" alt="Instagram" width="30" />
                </a>
                <a href="https://wa.me/+6289632030762" target="_blank" class="me-2">
                    <img src="/logo/whatsapp.svg" alt="WhatsApp" width="30" />
                </a>
                <a href="https://bsky.app/profile/thevirtuallist1.bsky.social" target="_blank" class="me-2">
                    <img src="/logo/bluesky.svg" alt="Bluesky" width="30" />
                </a>
                <a href="https://www.threads.net/@the_virtuallist" target="_blank" class="me-2">
                    <img src="/logo/threads.svg" alt="Threads" width="30" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .img-container {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        border-radius: 50%; /* Ensures circular shape */
        overflow: hidden; /* Ensures that the image fits within the circle */
        position: relative;
    }

    .img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures the image covers the container */
    }

    .social-media img {
        transition: transform 0.2s;
        padding: 5px 5px 5px 5px;
    }

    .social-media img:hover {
        transform: scale(2);
    }
</style>
