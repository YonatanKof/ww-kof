<template>
    <Layout :show-logo="true">
        <!-- Author intro -->
        <Author
            :show-title="true"
            v-bind:author-title="$static.metadata.siteName"
            :show-bio-text="true"
            author-bio="Life of an ape 🙈🙉🙊"
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
        PostCard,
    },
    metaInfo: {
        title: "Yonatan Ben Knaan",
    },
};
</script>