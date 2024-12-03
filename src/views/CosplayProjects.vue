<template>
    <div class="d-flex" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'top center', height: '94vh' }">
        <b-list-group>
            <b-list-group-item 
                v-for="(item, index) in items" 
                :key="index" 
                class="custom-list-item" 
                :class="{ active: selectedItem === index }"
                @click="selectItem(item, index)">
                {{ item.name }}
            </b-list-group-item>
        </b-list-group>
        <div class="row description">
            <div class="col-8">
                <h3>{{ selectedItemDesc.name }}</h3>
                <p align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim sem, ullamcorper vitae vestibulum non, efficitur ut odio. Suspendisse vel eleifend diam.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import takinaImage from '../../src/assets/cosu/takina.png';
import mihariImage from '../../src/assets/cosu/mihari.jpg';

export default {
    data() {
        return {
            selectedItemDesc: { name: 'Takina Inoue', backgroundImage: takinaImage },
            items: [
                { name: 'Takina Inoue', backgroundImage: takinaImage },
                { name: 'Mihari Oyama', backgroundImage: mihariImage }
            ],
            selectedItem: 0, // Set the default active item to the first item (index 0)
            backgroundImage: takinaImage // Default background image
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

/* Responsive styles (if needed) */
@media (min-width: 280px) and (max-width: 320px) {
    .d-flex {
        .custom-list-item {
        &.active {
            font-weight: bold; /* Make font bolder when active */
        }
    }
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-end; /* Align content to the right */
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
            }
        }
    }
}
@media (min-width: 321px) and (max-width: 480px) {
    .d-flex {
        .custom-list-item {
        &.active {
            font-weight: bold; /* Make font bolder when active */
        }
    }
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-end; /* Align content to the right */
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
            }
        }
    }
}
@media (min-width: 481px) and (max-width: 768px) {
    .d-flex {
        .custom-list-item {
        &.active {
            font-weight: bold; /* Make font bolder when active */
        }
    }
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-end; /* Align content to the right */
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
                font-size: 20px;
            }
        }
    }
}
@media (min-width: 769px) and (max-width: 1024px) {
    .d-flex {
        .custom-list-item {
        &.active {
            font-weight: bold; /* Make font bolder when active */
        }
    }
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-end; /* Align content to the right */
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
                font-size: 20px;
            }
        }
    }
}
@media (min-width: 1025px) and (max-width: 1200px) {
    .d-flex {
        .custom-list-item {
        &.active {
            font-weight: bold; /* Make font bolder when active */
        }
    }
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-end; /* Align content to the right */
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
                font-size: 30px;
            }
        }
    }
}
@media (min-width: 1201px) {
    .d-flex {
        .custom-list-item {
        &.active {
            font-weight: bold; /* Make font bolder when active */
        }
    }
        .row.description {
            display: flex; /* Enable flexbox for this row */
            justify-content: flex-end; /* Align content to the right */
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
                font-size: 40px;
            }
        }
    }
}
</style>