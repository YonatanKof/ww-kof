<template>
    <Layout :show-logo="false">
        <!-- Author intro -->
        <Author 
            :show-title="true" v-bind:author-title="$static.metadata.siteName"
            :show-bio-text="true" v-bind:author-bio="$static.metadata.siteDescription" 
        />
    </Layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
    components: {
        Author,
        PostCard
    },
    metaInfo: {
        title: "Hello, world!"
    }
};
</script>
