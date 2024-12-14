<template>
    <ul class="nav nav-pills">
        <li v-for="(item, index) in items" 
            :key="index" 
            class="nav-item">
            <a 
                class="nav-link" 
                :class="{ active: selectedItem === index }"
                @click="selectItem(item, index)">
                {{ item.name }}
            </a>
        </li>
    </ul>
    <div class="d-flex" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center', height: '89.9vh' }">
        <div class="row description">
            <div class="col-8">
                <h3>{{ selectedItemDesc.name }}</h3>
                <p align="justify">
                    {{ selectedItemDesc.desc }}
                </p>
                <router-link :to="{ 'name': 'cosplaygalery', 'params': { 'name': selectedItemDesc.link }}" class="btn btn-primary">See My Galery...</router-link>
            </div>
        </div>
        <div class="floating-div">
            <img class="img-fluid" :src="selectedItemDesc.icon" />
            <br />
            <img class="img-fluid" :src="selectedItemDesc.logo" />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selectedItemDesc: { name: 'Takina Inoue', backgroundImage: '/img/takina/1.jpg', icon: '/img/takina/icon.jpg', logo: '/img/takina/logo.jpg', link: 'takina', desc: 'Dressed as Takina Inoue from Lycoris Recoil, The Virtuallist brings the disciplined yet endearing Lycoris agent to life with incredible attention to detail. From Takina’s signature navy-blue uniform to her poised demeanor and sharp gaze, every aspect of the cosplay exudes precision and respect for the character. Channeling Takina’s determined and caring nature, The Virtuallist embodies her quiet strength and unwavering loyalty, creating a portrayal that captures both her fierce combat skills and her softer, more relatable side. With every pose, it’s as though Takina has stepped out of the screen and into reality, blending seamlessly with The Virtuallist’s creative energy.' },
            items: [
                { name: 'Takina Inoue', backgroundImage: '/img/takina/1.jpg', icon: '/img/takina/icon.jpg', logo: '/img/takina/logo.jpg',  link: 'takina', desc: 'Dressed as Takina Inoue from Lycoris Recoil, The Virtuallist brings the disciplined yet endearing Lycoris agent to life with incredible attention to detail. From Takina’s signature navy-blue uniform to her poised demeanor and sharp gaze, every aspect of the cosplay exudes precision and respect for the character. Channeling Takina’s determined and caring nature, The Virtuallist embodies her quiet strength and unwavering loyalty, creating a portrayal that captures both her fierce combat skills and her softer, more relatable side. With every pose, it’s as though Takina has stepped out of the screen and into reality, blending seamlessly with The Virtuallist’s creative energy.' },
                { name: 'Mihari Oyama', backgroundImage: '/img/mihari/1.jpg', icon: '/img/mihari/icon.jpg', logo: '/img/mihari/logo.jpg',  link: 'mihari', desc: 'As Mihari Oyama from Onii-chan wa Oshimai!, The Virtuallist channels the quirky brilliance and caring nature of the inventive younger sister. Dressed in Mihari’s casual yet adorable outfit, complete with her iconic lab coat and glasses, The Virtuallist captures her mix of intellect and playful energy. With an expressive pose and a warm, knowing smile, the cosplay brings Mihari’s determination to guide her sibling and her mischievous yet well-meaning personality to life. Every detail, from her hairstyle to her curious aura, reflects The Virtuallist’s knack for portraying characters with authenticity and charm.' }
            ],
            selectedItem: 0, // Set the default active item to the first item (index 0)
            backgroundImage: '/img/takina/1.jpg' // Default background image
        };
    },
    methods: {
        selectItem(item, index) {
            this.selectedItem = index; // Set the selected item
            this.selectedItemDesc = item
            this.backgroundImage = this.items[index].backgroundImage; // Update the background image
            console.log(`Selected item: ${this.items[index].name}`);
        }
    }
};
</script>

<style lang="scss" scoped>

.d-flex {
    position: relative;
}

.row.description {
    position: relative;
    padding: 1rem;
    color: white;
}

.floating-div {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    z-index: 10;
    color: white;
}


/* Responsive styles (if needed) */
@media (min-width: 280px) and (max-width: 320px) {
    .floating-div {
        .img-fluid {
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
    }
    .d-flex {
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-start; /* Align content to the right */
            align-items: flex-end; /* Align content to the bottom */
            margin-top: auto; /* Push this row to the bottom */
            padding: 1rem; /* Add some padding for aesthetics */
            width: 100%; /* Ensure it takes full width */
            position: relative; /* Positioning context for absolute children if needed */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            h3 {
                color: white;
            }

            p {
                color: white;
                font-size: 5px;
            }
        }
    }
}
@media (min-width: 321px) and (max-width: 480px) {
    .floating-div {
        .img-fluid {
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
    }
    .d-flex {
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-start; /* Align content to the right */
            align-items: flex-end; /* Align content to the bottom */
            margin-top: auto; /* Push this row to the bottom */
            padding: 1rem; /* Add some padding for aesthetics */
            width: 100%; /* Ensure it takes full width */
            position: relative; /* Positioning context for absolute children if needed */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            h3 {
                color: white;
            }

            p {
                color: white;
                font-size: 10px;
            }
        }
    }
}
@media (min-width: 481px) and (max-width: 768px) {
    .floating-div {
        .img-fluid {
            width: 70px;
            height: 70px;
            object-fit: contain;
        }
    }
    .d-flex {
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-start; /* Align content to the right */
            align-items: flex-end; /* Align content to the bottom */
            margin-top: auto; /* Push this row to the bottom */
            padding: 1rem; /* Add some padding for aesthetics */
            width: 100%; /* Ensure it takes full width */
            position: relative; /* Positioning context for absolute children if needed */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            h3 {
                color: white;
                font-size: 40px;
            }

            p {
                color: white;
                font-size: 10px;
            }
        }
    }
}
@media (min-width: 769px) and (max-width: 1024px) {
    .floating-div {
        .img-fluid {
            width: 70px;
            height: 70px;
            object-fit: contain;
        }
    }
    .d-flex {
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-start; /* Align content to the right */
            align-items: flex-end; /* Align content to the bottom */
            margin-top: auto; /* Push this row to the bottom */
            padding: 1rem; /* Add some padding for aesthetics */
            width: 100%; /* Ensure it takes full width */
            position: relative; /* Positioning context for absolute children if needed */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            h3 {
                color: white;
                font-size: 40px;
            }

            p {
                color: white;
                font-size: 10px;
            }
        }
    }
}
@media (min-width: 1025px) and (max-width: 1200px) {
    .floating-div {
        .img-fluid {
            width: 100px;
            height: 100px;
            object-fit: contain;
        }
    }
    .d-flex {
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-start; /* Align content to the right */
            align-items: flex-end; /* Align content to the bottom */
            margin-top: auto; /* Push this row to the bottom */
            padding: 1rem; /* Add some padding for aesthetics */
            width: 100%; /* Ensure it takes full width */
            position: relative; /* Positioning context for absolute children if needed */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            h3 {
                color: white;
                font-size: 50px;
            }

            p {
                color: white;
                font-size: 15px;
            }
        }
    }
}
@media (min-width: 1201px) {
    .floating-div {
        .img-fluid {
            width: 100px;
            height: 100px;
            object-fit: contain;
        }
    }
    .d-flex {
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-start; /* Align content to the right */
            align-items: flex-end; /* Align content to the bottom */
            margin-top: auto; /* Push this row to the bottom */
            padding: 1rem; /* Add some padding for aesthetics */
            width: 100%; /* Ensure it takes full width */
            position: relative; /* Positioning context for absolute children if needed */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            h3 {
                color: white;
                font-size: 70px;
            }

            p {
                color: white;
                font-size: 20px;
            }
        }
    }
}
</style>