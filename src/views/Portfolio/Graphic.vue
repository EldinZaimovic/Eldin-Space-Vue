<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Graphic</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="image.dialog"
        lazy
        max-width="800"
        v-for="image in images"
        :key="image.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="image.poster"
                height="230"
                :alt="image.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{image.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="image.dialog">
          <v-img :src="image.poster"></v-img>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Graphic Portfolio ",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Eldin Zaimovic's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Eldin' Space" },
      { property: "og:site_name", content: "Eldin' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldin.space" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "Eldin Zaimovic's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      images: [
        {
          dialog: false,
          title: "VilaShirts Logo",
          poster: "https://i.imgur.com/QEnmqcE.png"
        },
        {
          dialog: false,
          title: "BlackBird Property Group Logo",
          poster: "https://i.imgur.com/b37FfUU.jpg"
        },
        {
          dialog: false,
          title: "TeeLock Consulting Logo",
          poster: "https://i.imgur.com/XSo4bmw.jpg"
        },
        {
          dialog: false,
          title: "SEA||WA||MMXI",
          poster: "https://i.imgur.com/thxUnTH.jpg"
        },
        {
          dialog: false,
          title: "Alpine365 Logo",
          poster: "https://i.imgur.com/LOzW21e.jpg"
        },
        {
          dialog: false,
          title: "Josefine Product Pack",
          poster: "https://i.imgur.com/TrthgRN.jpg"
        },
        {
          dialog: false,
          title: "Next Party Flayer",
          poster: "https://i.imgur.com/tYjfL2d.jpg"
        },
        {
          dialog: false,
          title: "VilaShirts T-Shirts",
          poster: "https://i.imgur.com/ULuRuFB.jpg"
        },
        {
          dialog: false,
          title: "BAB Coin",
          poster: "https://i.imgur.com/YU52AVB.jpg"
        }
      ]
    };
  }
};
</script>

<style  scoped>
</style>