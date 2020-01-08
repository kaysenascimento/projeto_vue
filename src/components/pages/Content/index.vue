<template>
  <div class="content">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <!-- <v-img
          v-bind:key="foto"
          v-for="foto in fotos"
          :src="foto.url"
          :alt="foto.titulo"
          ></v-img>-->
          <v-img
            :src="require('@/assets/img/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-col>

        <v-col cols="12" align="center">
          <h1 class="display-2 font-weight-bold mb-3">Página Content</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./Content.js" />
