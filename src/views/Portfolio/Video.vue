<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Video</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="video.dialog"
        lazy
        max-width="800"
        v-for="video in videos"
        :key="video.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="video.poster"
                aspect-ratio="1.7778"
                :alt="video.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
                contain
              ></v-img>
              <v-card-title primary-title class="justify-center">{{video.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="video.dialog">
          <plyr>
            <div class="plyr__video-embed">
              <iframe :src="video.href" allowfullscreen allowtransparency allow="autoplay"></iframe>
            </div>
          </plyr>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { PlyrVideo } from "vue-plyr";

export default {
  metaInfo: {
    title: "Video Portfolio",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Eldin Zaimovic's Services Adobe Premire After Effects Video Ad's Social Media Logo Animation Instagram Facebook Video Editing Advetising"
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
          "Eldin Zaimovic's Services Adobe Premire After Effects Video Ad's Social Media Logo Animation Instagram Facebook Video Editing Advetising"
      }
    ]
  },
  components: { plyr: PlyrVideo },
  data() {
    return {
      dialog: false,
      videos: [
        {
          dialog: false,
          title: "Vila Design Promo video",
          href: "https://www.youtube.com/embed/XP8j7NA_wzc",
          type: "text/html",
          youtube: "XP8j7NA_wzc",
          poster: "https://img.youtube.com/vi/XP8j7NA_wzc/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "Pushartist Promo video",
          href: "https://www.youtube.com/embed/PZnn1fDUb6U",
          type: "text/html",
          youtube: "PZnn1fDUb6U",
          poster: "https://img.youtube.com/vi/PZnn1fDUb6U/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "Unbroken Designs Instagram Promo video",
          href: "https://www.youtube.com/embed/KfxHI3vwALk",
          type: "text/html",
          youtube: "KfxHI3vwALk",
          poster: "https://img.youtube.com/vi/KfxHI3vwALk/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "EEVOY APP Promo",
          href: "https://www.youtube.com/embed/JEhpsP75STk",
          type: "text/html",
          youtube: "JEhpsP75STk",
          poster: "https://i.imgur.com/7CLqR2o.png"
        },
        {
          dialog: false,
          title: "Patty Boland's Party video",
          href: "https://www.youtube.com/embed/5zB4FIkhFHk",
          type: "text/html",
          youtube: "5zB4FIkhFHk",
          poster: "https://img.youtube.com/vi/5zB4FIkhFHk/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "Montenegro Summer 2017",
          href: "https://www.youtube.com/embed/kZahccWTpGc",
          type: "text/html",
          youtube: "kZahccWTpGc",
          poster: "https://i.imgur.com/4yTFAlM.jpg"
        },
        {
          dialog: false,
          title: "VilaShirts Promo video",
          href: "https://www.youtube.com/embed/SZVMKtEORRw",
          type: "text/html",
          youtube: "SZVMKtEORRw",
          poster: "https://i.imgur.com/POCbX1B.jpg"
        },
        {
          dialog: false,
          title: "Albania Durres Summer 2018",
          href: "https://www.youtube.com/embed/jd9pDFaRDKI",
          type: "text/html",
          youtube: "jd9pDFaRDKI",
          poster: "https://img.youtube.com/vi/jd9pDFaRDKI/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "Matricar Instagram Promo video",
          href: "https://www.youtube.com/embed/S-2hNuuwmpY",
          type: "text/html",
          youtube: "S-2hNuuwmpY",
          poster: "https://img.youtube.com/vi/S-2hNuuwmpY/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "Vila Design Glitch Logo Animation",
          href: "https://www.youtube.com/embed/SrX8T2G6bew",
          type: "text/html",
          youtube: "SrX8T2G6bew",
          poster: "https://img.youtube.com/vi/SrX8T2G6bew/maxresdefault.jpg"
        },
        {
          dialog: false,
          title: "Splash logo animation",
          href: "https://www.youtube.com/embed/vBAZpwtq08I",
          type: "text/html",
          youtube: "vBAZpwtq08I",
          poster: "https://i.imgur.com/3jK0rTs.png"
        },
        {
          dialog: false,
          title: "Julie Lindh CBD Infusion Facial",
          href: "https://www.youtube.com/embed/9qFQMV9IJ9I",
          type: "text/html",
          youtube: "9qFQMV9IJ9I",
          poster: "https://img.youtube.com/vi/9qFQMV9IJ9I/maxresdefault.jpg"
        }
      ]
    };
  }
};
</script>

<style  scoped>
@import "../../../node_modules/vue-plyr/dist/vue-plyr.css";
</style>