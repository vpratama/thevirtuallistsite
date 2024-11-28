<template>
    <div class="container d-flex justify-content-center align-items-center pt-5">
        <div class="col-md-10 text-center">
            <img class="img-fluid img-thumbnail rounded-circle mb-4" width="300px" height="300px" src="https://cdn.rafled.com/anime-icons/images/FW3qvq0rolDDnECKfAQ4zqJlH1Wm2fBn.jpg" alt="Profile Picture" />
            <h1>The Virtuallist</h1>
            <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
            <div class="social-media mt-3">
                <a href="https://www.facebook.com/steven.adhityawan" target="_blank" class="me-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="30" />
                </a>
                <a href="https://www.instagram.com/the_virtuallist" target="_blank" class="me-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="30" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .rounded-circle {
        border-radius: 50%; /* Ensures circular shape */
        overflow: hidden; /* Ensures that the image fits within the circle */
    }

    .social-media img {
        transition: transform 0.2s;
        padding: 5px 5px 5px 5px;
    }

    .social-media img:hover {
        transform: scale(2);
    }

    /* hp panjang */
    @media (min-width: 280px) and (max-width: 320px) {
        
    }

    /* hp */
    @media (min-width: 321px) and (max-width: 480px) {
        
    }

    /* tablet mini */
    @media (min-width: 481px) and (max-width: 768px) {
        
    }

    /* tablet / desktop layar kecil */
    @media (min-width: 769px) and (max-width: 1024px) {

    }

    /* tablet / desktop layar besar */
    @media (min-width: 1025px) and (max-width: 1200px) {
        
    }

    /* tablet / desktop layar extra besar */
    @media (min-width: 1201px) {
        
    }
</style>