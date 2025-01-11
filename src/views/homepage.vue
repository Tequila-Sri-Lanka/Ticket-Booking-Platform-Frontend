<template>
  <div class="homepage">
    <header class="header">
      <input
        type="text"
        placeholder="Search by movie, event or sport"
        class="search-bar"
      />
      <button class="signin-btn">Signin</button>
    </header>

    <nav class="navbar">
      <button class="nav-btn" @click="currentCategory = 'movies'">
        Movies
      </button>
      <button class="nav-btn" @click="currentCategory = 'events'">
        Events
      </button>
      <button class="nav-btn" @click="currentCategory = 'sports'">
        Sports
      </button>
      <button class="nav-btn">Contact</button>
      <button class="nav-btn">Support</button>
    </nav>

    <div class="submenu">
      <a href="#" class="submenu-link">Theater list</a>
      <a href="#" class="submenu-link">Now Playing</a>
      <a href="#" class="submenu-link">Coming soon</a>
    </div>
    <hr>

    <section class="category-items">
      <div class="carousel" ref="carousel">
        <div
          class="item"
          v-for="(item, index) in items[currentCategory]"
          :key="item.id"
          :class="{ highlighted: highlightedIndex === index }"
          ref="carouselItems"
        >
          <img :src="item.image" :alt="item.title" class="item-poster" />
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-details">{{ item.details }}</p>
          <p class="item-date">{{ item.date }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePageVue",
  data() {
    return {
      currentCategory: "movies",
      highlightedIndex: 1,
      items: {
        movies: [
          {
            id: 1,
            title: "Sonic 3",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },
          {
            id: 2,
            title: "Mufasa",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },
          {
            id: 3,
            title: "Gladiator 2",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },
          {
            id: 1,
            title: "Sonic 3",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },
          {
            id: 2,
            title: "Mufasa",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },
          {
            id: 3,
            title: "Gladiator 2",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },
        ],
        events: [
          {
            id: 1,
            title: "Concert Night",
            details: "5 hours",
            date: "10th March 2024",
            image: "path/to/concert.jpg",
          },
          {
            id: 2,
            title: "Art Exhibition",
            details: "All day",
            date: "15th March 2024",
            image: "path/to/art.jpg",
          },
        ],
        sports: [
          {
            id: 1,
            title: "Football Match",
            details: "3 hours",
            date: "20th March 2024",
            image: "path/to/football.jpg",
          },
          {
            id: 2,
            title: "Basketball Finals",
            details: "2 hours",
            date: "25th March 2024",
            image: "path/to/basketball.jpg",
          },
        ],
      },
    };
  },
  mounted() {
    this.setupObserver();
  },
 mounted() {
  this.setupObserver();
},
methods: {
  setupObserver() {
    const options = {
      root: this.$refs.carousel,
      rootMargin: "100px",
      threshold: 0.2,
    };

    let lastScrollPosition = 0; 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Array.from(this.$refs.carouselItems).indexOf(entry.target);

        if (entry.isIntersecting) {

          const currentScrollPosition = this.$refs.carousel.scrollTop;
          const isScrollingDown = index > lastScrollPosition;

          
          lastScrollPosition = index;

          this.highlightedIndex = isScrollingDown ?index-1 :index+1;
        }
      });
    }, options);

    this.$refs.carouselItems.forEach((item) => {
      observer.observe(item);
    });
  },
},

};
</script>

<style scoped>
.item.highlighted {
  transform: scale(1.2); 
  z-index: 1;
}

.homepage {
  font-family: Arial, sans-serif;
  margin-left: 50px;
  margin-right: 50px;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
}

.search-bar {
  width: 60%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signin-btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.navbar {
  display: flex;
 gap: 10px;
  padding: 10px;
  background-color: #e9e9e9;
}

.nav-btn {
  padding: 8px 16px;
  border: none;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
}

.submenu {
    display: flex;
    justify-content: flex-end;
  text-align: center;
  margin: 10px 0;
}

.submenu-link {
  margin: 0 10px;
  color: #007bff;
  text-decoration: none;
}

.category-items {
  padding: 20px;


}

.carousel {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 100px;
 
  margin: 0 auto;
  height:700px ;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.item {
  flex: 0 0 calc((100% - 40px) / 3);
  text-align: center;
  
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 500px;

 
}

.item-poster {
  width: 300px;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.item-title {
  font-size: 18px;
  margin: 10px 0 5px;
}

.item-details,
.item-date {
  font-size: 14px;
  color: gray;
}
</style>