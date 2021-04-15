<template>
    <movie-card class="w-screen">
        <div class="flex flex-col justify-center items-center" style="margin-top: 20px;">
            <h1 class="text-white font-extrabold text-3xl tracking-widest">Movies List</h1>
        <ul>
            <movie-list v-for="movie in movies"
            :key="movie.id"
            :movie="movie">
            </movie-list>
        </ul>
        </div>
    </movie-card>
</template>
<script>
    import MovieList from '../components/MovieList.vue'
    export default {
        components: {
            MovieList
        },
        data(){
            return {
                movies: [
                    {
                        name: 'Black Widow',
                        src: 'Black.png'
                    },
                    {
                        name: 'Detective Connan 22',
                        src: 'Conan.png'
                    },
                    {
                        name: 'Courier',
                        src: 'Courier.png'
                    },
                    {
                        name: 'Doraemon, friends forever 2',
                        src: 'Doramon.png'
                    },
                    {
                        name: 'Godzilla VS Kong',
                        src: 'kong.png'
                    },
                    {
                        name: 'Mortal Combat',
                        src: 'Mortal.png'
                    },
                    {
                        name: 'Nobody',
                        src: 'Nobody.png'
                    },
                    {
                        name: 'Raya',
                        src: 'raya.png'
                    },
                    {
                        name: 'Redd',
                        src: 'redd.png'
                    },
                    {
                        name: 'Seobok',
                        src: 'Seobok.png'
                    },
                    {
                        name: 'Violet',
                        src: 'Violet.png'
                    }
                ]
            }
        }
    }
</script>