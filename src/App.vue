<template>
  <div id="nav" class=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-800  h-20">
    <div class="flex justify-start p-3 ">
      <img class="block h-16 w-auto p-1" src="./assets/f155d4e8e3d9e4392e81c92622306fdb.png">
      <img class="block h-12 w-auto p-1 mt-3 ml-0.1" src="./assets/CHEDAHCINEMA.png">
      <div class="w-full pt-5 pr-20 mt-auto mb-1 flex ml-12 justify-between" >
        <div class="flex space-x-4 text-xl ">
          <router-link to="/">Home</router-link>
          <router-link to="/movies">Movies</router-link>
          <router-link to="/cenima">Cenima</router-link>  
        </div>
        <div class="flex justify-end text-xl pl-14">
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>

  #nav a {
    font-weight: 400;
    color: #ffffff;
    
  }
  #nav :hover{
  color: #000000;
  font-weight: bold;
  
}

#nav a.router-link-exact-active {
  color: #ffffff;
  font-weight: bold;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  background-color: Black;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 7px;
   
}

</style>
