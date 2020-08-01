<template>
    <Layout :show-logo="true" :show-posts="false">
        <Author 
          :show-title="true" author-title="Posts" 
          :show-bio-text="true" author-bio="Some writing by the kof himself" 
        />
        <!-- List posts -->
        <div class="posts">
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
        <!-- Author intro -->
    </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        urlname
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import IconBase from "~/components/IconBase.vue";
import KofIcon from "~/components/icons/KofIcon.vue";

export default {
    components: {
        Author,
        PostCard,
        IconBase,
        KofIcon
    },
    metaInfo: {
        title: "Hello, world!"
    }
};
</script>

<style lang="scss">
.logoooo {
    margin: 0 auto;
    width: calc(var(--space-7xl) * 2);
    height: calc(var(--space-7xl) * 2);
    margin-bottom: var(--space-md);
}
.title {
    text-align: center;
}
</style>

