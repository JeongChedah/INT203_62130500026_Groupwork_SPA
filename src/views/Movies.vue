<template>
    <!-- Add Movie-->
    <div class="flex">
        <span class="mr-auto ml-auto text-white text-3xl font-semibold mt-8">Movie Management</span>
    </div>
    <div class="max-w-full border-2  rounded-md  ml-10 mr-10 mt-8 bg-orange border-orange">
        <form @submit.prevent="submitForm">
            <div class="max-w-full bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg ml-5 mr-5 mt-5 mb-5">
                <div id="header" class="flex"> 
                    <div id="body" class="flex flex-col ml-5 w-5/12">
                        <div class="flex cursor-pointer px-4 py-2 text-lg text-grey-darkest border-solid border-orange " style="border-left: 4px solid #FF5313 !important;">    
                            <div class="pl-2"> Movie name :</div>
                        </div>
                        <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-t-0 border-r-0 border-l-0 mb-5">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Movie name here."
                            v-model="name">
                        </div>
                        <div class="flex cursor-pointer px-4 py-2 text-lg text-grey-darkest border-solid border-orange " style="border-left: 4px solid #FF5313 !important;">
                            <div class="pl-2"> Movie length :</div>
                        </div>
                        <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-t-0 border-r-0 border-l-0 mb-5" style="margin-bottom: 10px;">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Movie length." v-model="hour">
                        </div>
                        <div class="flex cursor-pointer px-4 py-2 text-lg text-grey-darkest border-solid border-orange " style="border-left: 4px solid #FF5313 !important;">
                            <div class="pl-2"> Movie Catagory :</div>
                        </div>
                        <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-t-0 border-r-0 border-l-0 mb-5" style="margin-bottom: 10px;">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Movie Catagory" v-model="type">
                        </div>
                        <div class="flex cursor-pointer px-4 py-2 text-lg text-grey-darkest border-solid border-orange" style="border-left: 4px solid #FF5313 !important;">
                            <div class="pl-2"> Release Date</div>
                        </div>
                        <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-t-0 border-r-0 border-l-0" style="margin-bottom: 10px;">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Release Date." v-model="date">
                        </div>
                    </div>
                    <div id="body" class="flex flex-col ml-5 w-7/12">
                        <div class="flex cursor-pointer px-4 py-2 text-lg text-grey-darkest border-solid border-orange" style="border-left: 4px solid #FF5313 !important;">
                            <div class="pl-2">Title</div>
                        </div>
                        <textarea name="" id="" cols="8" rows="11" placeholder="Enter your title for describe this movie." class="border rounded-md border-red-300 p-2 mt-3 w-full" v-model="title"></textarea>
                        <div class="flex mt-3 py-1 px-5">
                            <button class="border rounded-full py-2 px-12 font-bold text-white bg-pinklight " style="font-size: large; margin-left: auto; margin-right: 10px;" @click="clearMovie">CLEAR</button>
                            <button class="border rounded-full py-2 px-12 font-bold text-white bg-bluelight" style="font-size: large; margin-left: 10px; margin-right: 0px;">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <movie-card>
        <template v-slot:text>
        <div class="flex flex-col justify-center items-center" style="margin-top: 20px;">
            <h1 class="text-white font-extrabold text-5xl tracking-widest">Movies List</h1>
        <ul>
            <div class="grid grid-cols-2 gap-3">
            <movie-list @delete-movie="deleteMovieList" @show-movie="showMovieList" v-for="movie in movies"
            :key="movie.id"
            :movie="movie">
            </movie-list>

            </div> 
        </ul>
    </div> 
    </template>
    <template v-slot:wallimg>
        <img src="../assets/bgbg.jpg">
    </template>
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
                editId: '',
                isEdit: false,
                name:"",
                hour:"",
                type:"",
                date:"",
                title:"",
                photo:"movieinsert.png",
                img:"",
                invalidName: false,
                invalidHour: false,
                invalidType: false,
                invalidDate: false,
                invalidTitle: false,
                url: "http://localhost:5000/movies",
                movies: []
            }
        },
        methods:{
            submitForm(){
               this.invalidName = this.name === '' ? true : false
               this.invalidHour = this.hour === '' ? true : false
               this.invalidType = this.type === '' ? true : false
               this.invalidDate = this.date === '' ? true : false
               this.invalidTitle = this.title === '' ? true : false
           
               if(!this.invalidName && !this.invalidHour && !this.invalidType && !this.invalidDate && !this.invalidTitle){
                   if(this.isEdit){
                       this.editMovieList({
                        id: this.editId,
                       name: this.name,
                       hour: this.hour,
                       type: this.type,
                       date: this.date,
                       title: this.title,
                       photo: this.img
                       })
                }else {
                    this.addMovie({
                       name: this.name,
                       hour: this.hour,
                       type: this.type,
                       date: this.date,
                       title: this.title,
                       photo: this.photo
                    })
                }   
               }
            },
            // Get method
           async getMovie(){
            try {
                const res = await fetch(this.url);
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(`Could not get movie! ${error}`);
            }  
           },
           async addMovie(newMovie){
               try{
                   const res = await fetch(this.url,{
                       method: "POST",
                       headers: {
                           "content-type": "application/json"
                       },
                    body: JSON.stringify({
                        name: newMovie.name,
                        hour: newMovie.hour,
                        type: newMovie.type,
                        date: newMovie.date,
                        title: newMovie.title,
                        photo: newMovie.photo
                    })
                   })
                   const data = await res.json()
                   this.movies = [...this.movies, data]
                   this.name = ""
                   this.hour = ""
                   this.type =""
                   this.date =""
                   this.title =""
               }catch(error){
                   console.log(`Could not add new movie! ${error}`)
                }
           },
           async deleteMovieList(movieId){
            try{
                
                await fetch(`${this.url}/${movieId}`,{
                    method: 'DELETE'
                })
                    this.movies = this.movies.filter(movie => movie.id !== movieId)
                }catch(error){
                    console.log(`Could not delete movie! ${error}`)
                }    
            },
             showMovieList(moviedata){
                this.isEdit = true
                this.editId = moviedata.id
                this.name = moviedata.name
                this.hour = moviedata.hour
                this.type = moviedata.type
                this.date= moviedata.date
                this.title = moviedata.title
                this.img = moviedata.photo
            },
            clearMovie(){
                this.name = ""
                   this.hour = ""
                   this.type =""
                   this.date =""
                   this.title =""
            },
            async editMovieList(editMovie) {
                try{
                    const res = await fetch(`${this.url}/${editMovie.id}`,{
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: editMovie.name,
                            hour: editMovie.hour,
                            type: editMovie.type,
                            date: editMovie.date,
                            title: editMovie.title,
                            photo: editMovie.photo
                        }) 
                    })
                    const data = await res.json()
                    this.movies = this.movies.map((movie) => movie.id === editMovie.id
                    ? {...movie, name: data.name, hour:data.hour, type:data.type, date:data.date, title:data.title, photo:data.photo} : movie)
                    this.isEdit = false
                    this.editId = ''
                    this.name = ''
                    this.hour = ''
                    this.type = ''
                    this.date= ''
                    this.title = ''
                    this.img = ''
                } catch (error) {
                    console.log(`Could not editing! ${error}`)
                }
            }

        },
        async created(){
        this.movies = await this.getMovie()
        }
    }
</script>