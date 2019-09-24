<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="green--text">Services</span>
        </h2>
      </v-flex>
      <v-flex v-for="service in services" :key="service.src" xs6 sm3 md3 lg3 xl3>
        <v-card hover flat color="transparent" :style="{'cursor':'context-menu'}">
          <v-card-title></v-card-title>
          <v-img
            :src="service.src"
            height="100"
            aspect-ratio="2.75"
            :alt="'Eldin do '+service.title"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
          <v-card-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{service.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="green--text">Clients</span>
        </h2>
      </v-flex>

      <v-flex v-for="client in clients" :key="client.src" xs6 sm4 md3 lg2 xl2>
        <v-card flat :href="client.href" target="_blank" color="transparent">
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              :src="client.src"
              :alt="client.name+' logo'"
              lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              height="100"
              width="160"
              aspect-ratio="2.75"
              contain
            >
              <v-expand-transition>
                <div
                  v-if="!hover"
                  class="transition-fast-in-fast-out green v-img--reveal"
                  style="height: 100%;"
                ></div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Services",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Eldin Zaimovic's Services Web Development Video Editing Graphic Design Front-End Advetising"
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
          "Eldin Zaimovic's Services Web Development Video Editing Graphic Design Front-End Advetising"
      }
    ]
  },
  data() {
    return {
      clients: [
        {
          name: "Brandly",
          src: "https://i.imgur.com/BLJ16wb.png",
          href: "https://www.brandly.com/"
        },
        {
          name: "EEVOY",
          src: "https://i.imgur.com/lIJePVb.png",
          href: "https://www.eevoy.com/"
        },
        {
          name: "Riders Share",
          src: "https://i.imgur.com/pgkY80b.png",
          href: "https://www.riders-share.com/"
        },
        {
          name: "Esthetician Connection",
          src:
            "https://estheticianconnection.com/wp-content/uploads/2019/01/EC-logo.png",
          href: "https://estheticianconnection.com/"
        },
        {
          name: "Goldentimepieces",
          src: "https://i.imgur.com/sEybxZ5.png",
          href: "https://goldentimepieces.com/"
        },
        {
          name: "MFS-EMMAUS",
          src: "https://i.imgur.com/33xPmQ8.png",
          href: "https://mfs-emmaus.ba/"
        },
        {
          name: "Scanlister",
          src: "https://i.imgur.com/5K7h7c4.png",
          href: "https://www.scanlister.com/"
        },
        {
          name: "Unbroken Designs",
          src: "https://i.imgur.com/kDLRh64.png",
          href: "https://www.unbrokendesigns.com/"
        },
        {
          name: "VilaShirts",
          src: "https://i.imgur.com/Fg26T32.png",
          href: "https://www.instagram.com/_vilashirts_/"
        }
      ],
      services: [
        {
          src: "https://i.imgur.com/GvTt5GG.png",
          title: "Web Development"
        },
        {
          src: "https://i.imgur.com/g74mGuU.png",
          title: "Web Design"
        },

        {
          src: "https://i.imgur.com/wXLtLKy.png",
          title: "Video Editing"
        },
        {
          src: "https://i.imgur.com/tcZnDep.png",
          title: "Advertising"
        }
      ]
    };
  }
};
</script>
<style >
.v-img--reveal {
  opacity: 0.3;
}
</style>