<template>
  <movie-card>
    <template v-slot:wallimg>
      <img src="../assets/background.jpg">
    </template>
    <template v-slot:text>
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-white font-extrabold text-3xl tracking-widest">-Page not found -</h1>
        </div>
    </template>
  </movie-card>
</template>
