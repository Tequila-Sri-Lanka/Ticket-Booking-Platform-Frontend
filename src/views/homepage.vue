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
          @click="currentCategory === 'movies' ? goToMovieDetails(item.id) : null"  
        >
          <img :src="item.image" :alt="item.image" class="item-poster" />
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-details">{{ item.description }}</p>
          <p class="item-date">{{ item.rating }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import movieService from '@/service/movieService';

export default {
  name: "HomePageVue",
  data() {
    return {
      currentCategory: "movies",
      highlightedIndex: 1,
      items: {
        movies: [ {
            id: 1,
            title: "Sonic 3",
            details: "2 hours 30 minutes",
            date: "23rd February 2024",
            image: "src/assets/loginbgr.jpg",
          },],
        events: [],
        sports: [],
      },
    };
  },

  mounted() {
  this.fetchMovies();
   this.setupObserver();
},
  methods: {
   async fetchMovies() {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          movieService.setToken(token);
        }

//orginal

        // const movies = await movieService.getAllMovies();
        // if (movies) {
        //   this.items.movies = movies;
        //   console.log("in homepage:",movies)
        // }


//dummy images
const movies = await movieService.getAllMovies();
if (movies) {
  // Set the image URL for each movie
  this.items.movies = movies.map(movie => ({
    ...movie,
    image: "https://picsum.photos/200/300"
  }));

  console.log("in homepage:", this.items.movies);
}
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    goToMovieDetails(movieId) {
      if (this.currentCategory === 'movies') {
      console.log(movieId)
      this.$router.push({ name: 'MovieDetails', params: { id: movieId } });
    }
  },
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