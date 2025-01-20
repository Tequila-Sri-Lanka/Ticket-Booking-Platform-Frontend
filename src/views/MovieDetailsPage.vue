<template>
  <div class="movie-details">
    

    <div class="highlight-title">
      <h2>{{ movie.highlightTitle }}</h2>
    </div>

    <div class="movie-banner">
      <img :src="movie.banner" alt="Movie Banner" class="banner-image" />

    </div>
    <div class="movie-header">
      <img :src="movie.poster" alt="Movie Poster" class="movie-poster" />
      <div class="movie-info">
        <h1>{{ movie.title }}</h1>
        <p class="subtitle">{{ movie.subtitle }}</p>
        <p class="meta">
          <span class="new-tag">.NEW</span> | {{ movie.genre }} | {{ movie.language }} | {{ movie.category }}
        </p>
        <p class="release-date">{{ movie.releaseDate }} | {{ movie.duration }}</p>
      </div>
    </div>

    <div class="description">
      <p v-html="movie.description"></p>
    </div>
  </div>
</template>

<script>
import movieService from '@/service/movieService';
export default {
  name: "MovieDetailsPage",
  data() {
    return {
      movie: {
        poster: "https://picsum.photos/200/300", 
        title: "Sonic the Hedgehog 3 (2024)",
        subtitle: "සිංහල උපසිරැසි සමඟ | CAM COPY",
        genre: "Action, Comedy",
        language: "English",
        category: "Family",
        releaseDate: "Dec. 19, 2024 | United States",
        duration: "110 Min.",
        highlightTitle: "SONIC THE HEDGEHOG 3 (2024) | සොනික් සහ ශැඩෝ ව්‍යාපෘතිය",
        banner: "https://picsum.photos/500/700", 
        description: `
          <span class="phase">සොනික් Phase 1,2,3,4...</span> <br/>
          Sonic ගේ අවසාන නවතම චිත්‍රපටය... Lorem ipsum dolor sit
           amet consectetur adipisicing elit. Qui quas voluptas ipsa accusantium
           libero reiciendis optio distinctioLorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui quas voluptas ipsa accusantium libero reiciendis optio
             distinctio voluptatum dignissimos. Corporis aperiam aut deserunt harum voluptas
              ipsa ad doloribus incidunt. Officiis?Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Qui quas voluptas ipsa accusantium libero reiciendis optio distinctio voluptatum
                dignissimos. Corporis aperiam aut deserunt harum voluptas ipsa ad doloribus incidunt.
                 Officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas voluptas ipsa
                  accusantium libero reiciendis optio distinctio voluptatum dignissimos. Corporis aperiam aut
                  deserunt harum voluptas ipsa ad doloribus incidunt. Officiis?Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Qui quas voluptas ipsa accusantium libero reiciendis optio distinctio voluptatum dignissimos.
                   Corporis aperiam aut deserunt harum voluptas ipsa ad doloribus incidunt. Officiis?Lorem
                   ipsum dolor sit amet consectetur adipisicing elit. Qui quas voluptas ipsa
                    accusantium libero reiciendis optio distinctio voluptatum dignissimos.
                     Corporis aperiam aut deserunt harum voluptas ipsa ad doloribus incidunt.
                     Officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasvoluptas
                      ipsa accusantium libero reiciendis optio distinctio voluptatum dignissimos. Corporisaperiam aut
                       deserunt harum voluptas ipsa ad doloribus incidunt. Officiis? voluptatum dignissimos. Corporis aperiam
                        aut deserunt harum voluptas ipsa ad doloribus incidunt. Officiis?
        `,
      },
    };
    },
    mounted() {
    this.loadMovie();
    }, methods: {
        loadMovie() {
            const movieId = this.$route.params.id;
            console.log("movie id in details page", movieId)

                  try {
        const token = localStorage.getItem('authToken');
        if (token) {
          movieService.setToken(token);
        }
        
            const movie = movieService.getMovieById(movieId).then((data) => {
            console.log("in movie details:",data)
        });

      } catch (error) {
        console.error("Error fetching movie:", error);
      }
         }
    }
};
</script>

<style lang="scss">
.movie-details {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #000;
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;

  .movie-header {
    display: flex;
    align-items: center;
  }

  .movie-poster {
    width: 100px;
    height: 150px;
    border-radius: 5px;
    margin-right: 20px;
  }

  .movie-info {
    h1 {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .subtitle {
    font-size: 16px;
    color: #ddd;
  }

  .meta {
    font-size: 14px;
  }

  .new-tag {
    color: red;
    font-weight: bold;
  }

  .release-date {
    font-size: 14px;
    color: yellow;
  }

  .highlight-title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 10px blue;
  }

  .movie-banner {
    text-align: center;
    margin: 20px 0;

    .banner-image {
      width: 100%;
      max-width: 700px;
      height: 500px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.5;
    color: #ffcc00;
  }

  .phase {
    color: red;
    font-weight: bold;
  }
}

</style>