<template>
    <Layout :show-logo="true">
        <!-- Author intro -->
        <Author
            :show-title="true"
            :author-title="$static.metadata.siteName"
            :show-bio-text="true"
            author-bio="As a great ape I love helping individuals and organizations getting 💩 done, while keeping it agile and keeping it real. I like to create things from nothing, concepts form talks, products from ideas"
            
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