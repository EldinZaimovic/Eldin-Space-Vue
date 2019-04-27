<template>
  <v-flex xs12 sm6 md4 lg4 xl4>
    <v-card :to="'/blog/'+id" hover>
      <v-img :src="thumbnailImage" aspect-ratio="2.75" height="230" :alt="title"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{title}}</h3>
          <div>
            <p class="green--text font-weight-medium">{{excerpt}}</p>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>