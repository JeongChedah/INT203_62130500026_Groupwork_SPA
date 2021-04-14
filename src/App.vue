<template>
  <nav class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-12 w-auto" src="./assets/f155d4e8e3d9e4392e81c92622306fdb.png">
            <img class="hidden lg:block h-8 w-auto" src="./assets/CHEDAHCINEMA.png">
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/">Home</router-link>
              <router-link to="/movies">Movies</router-link>
              <router-link to="/cenima">Cenima</router-link>  
            </div> 
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
 

</template>
