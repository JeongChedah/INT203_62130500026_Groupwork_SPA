<template>
    <movie-card>
        <template v-slot:text>
            <div class="m-5">
                <li class="grid grid-cols-2 gap-y-6 ml-5">
                    <img class="w-auto h-auto mt-3" 
                    :src="require(`../assets/movies/${movie.src}`)"
                    />
                    <span class="text-white text-xl p-5 m-5">{{movie.name}}</span>
                </li>
            </div>
        </template>
        <template v-slot:wallimg>
            <img src="../assets/background.jpg">
        </template>
    </movie-card>
</template>
<script>
    export default {
        props: ['movie']
    }
</script>