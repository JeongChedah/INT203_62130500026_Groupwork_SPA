<template>
        <body-card> 
            <div id="header" class="flex">
                <img class="w-45 h-full" 
                :src="require(`../assets/movies/${movie.photo}`)"
                />
                <div id="body" class="flex flex-col ml-5">
                    <h1 class="text-2xl font-semibold mb-2">{{movie.name}}</h1>
                    <p class="text-black-800 mt-2">{{movie.hour}}</p>
                    <p class="text-black-800 mt-2">{{movie.type}}</p>
                    <p class="text-black-800 mt-2">{{movie.date}}</p>
                    <p class="text-red-800 mt-2 ">Synopsis:</p>
                    <span class="text-black-100">{{movie.title}}</span>
                    <div class="flex mt-10 py-3 px-5">
                        <a href="#"> <button @click="showMovie(movie)"  class="border rounded-full py-2 px-6 font-bold text-white" style="font-size: large; margin-left: auto; margin-right: auto; background-color: #44C1F0;">EDIT</button></a>
                        <button @click="deleteMovie(movie.id)" class="border rounded-full py-2 px-6 font-bold text-white" style="font-size: large; margin-left: auto; margin-right: auto; background-color: #FF5757;">DELETE</button>
                    </div>
                </div>
            </div>
        </body-card>
</template>
<script>
    export default {
        emits:['delete-movie','show-movie'],
        props: ['movie'],
        data(){
            return {
                url: "http://localhost:5000/movies"
            }
        },
        methods: {
            deleteMovie(id){
                
                this.$emit('delete-movie',id)
            },
            showMovie(moviedata){
                this.$emit('show-movie',moviedata)
            }
        }
    }
    
</script>