<template>
    <movie-card>
        <li class="grid grid-cols-6 gap-4">
            <img class="w-auto h-auto mt-3" 
            :src="require(`../assets/movies/${movie.src}`)"
            />
        <span class="text-white text-lg p-5">{{movie.name}}</span>
        </li>
    </movie-card>
</template>
<script>
    export default {
        props: ['movie']
    }
</script>