<template>
  <div class="homepage">
    <header class="header">
      <input type="text" placeholder="Search by movie, event or sport" class="search-bar" />
      <button class="signin-btn">Signin</button>
    </header>

    <nav class="navbar">
      <button class="nav-btn" @click="currentCategory = 'movies'">Movies</button>
      <button class="nav-btn" @click="currentCategory = 'events'">Events</button>
      <button class="nav-btn" @click="currentCategory = 'sports'">Sports</button>
      <button class="nav-btn">Contact</button>
      <button class="nav-btn">Support</button>
    </nav>

    <div class="submenu">
      <a href="#" class="submenu-link">Theater list</a>
      <a href="#" class="submenu-link">Now Playing</a>
      <a href="#" class="submenu-link">Coming soon</a>
    </div>

    <section class="category-items">
      <div class="carousel">
        <div class="item" v-for="item in items[currentCategory]" :key="item.id">
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
      currentCategory: 'movies',
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
          }, {
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
    const carousel = this.$refs.carousel;

    const handleScroll = () => {
      const cards = carousel.querySelectorAll(".item");
      const carouselRect = carousel.getBoundingClientRect();

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        const distance = Math.abs(carouselCenter - cardCenter);
        const scale = Math.max(1, 1.5 - distance / 300);

        card.style.transform = `scale(${scale})`;
        card.style.transition = "transform 0.2s";
      });
    };

  },
};
</script>

<style scoped>
.homepage {
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
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
  justify-content: center;
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
  overflow: hidden;
}

.carousel {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
gap: 20px;
  max-width: 650px;
  margin: 0 auto;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.item {

   flex: 0 0 calc((100% - 40px) / 3);
  text-align: center;
  max-width: 200px;
  scroll-snap-align: start;
}

.item-poster {
  width: 100%;
  height: 400px;
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
