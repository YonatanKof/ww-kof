<template>
    <Layout>
        <Author
            :show-title="true"
            v-bind:author-title="$page.post.title"
            :show-bio-text="true"
            v-bind:author-bio="$page.post.description"
        />
        <div class="post-title">
            <!-- <h2 class="post-title__text">{{ $page.post.title }}</h2> -->
            <PostMeta :post="$page.post" />
        </div>
        <div class="post content-box">
            <div class="post__header">
                <g-image
                    v-if="$page.post.cover_image"
                    :src="$page.post.cover_image"
                    :alt="$page.post.cover_caption"
                />
            </div>
            <div class="post__content" v-html="$page.post.content" />
            <div class="post__footer">
                <PostTags :post="$page.post" />
            </div>
        </div>
        <div class="post-comments">
            <!-- Add comment widgets here -->
        </div>
    </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
    components: {
        Author,
        PostMeta,
        PostTags
    },
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                {
                    name: this.$page.post.author_name,
                    content: this.$page.post.description
                }
            ]
        };
    }
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    author_name
    path
    date (format: "MMM D, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
    cover_caption
    urlname
  }
}
</page-query>

<style lang="scss">
.post-title {
    padding-bottom: var(--space-xl);
    text-align: center;
}

.post {
    margin-bottom: var(--space-xl);
    &__header {
        /* width: calc(100% + var(--space) * 2); */
        margin-left: calc(var(--space-2xl) * -1);
        margin-right: calc(var(--space-2xl) * -1);
        margin-bottom: var(--space-md);
        margin-top: calc(var(--space-2xl) * -1);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;
        @media screen and (max-width: 480px) {
            // Remove border-radius on small screens
            border-radius: 0;
        }
        img {
            width: 100%;
        }
        &:empty {
            display: none;
        }
    }
    &__content {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin-top: var(--spacem-md);
        }
        :is(h1, h2, h3, h4, h5, h6):first-child {
            margin-top: 0;
        }
        img {
            width: calc(100% + var(--content-space) * 2);
            margin-left: calc(var(--content-space) * -1);
            display: block;
            max-width: none;
        }
    }
}
.post-comments {
    padding: calc(var(--content-space) / 2);
    &:empty {
        display: none;
    }
}
.post-author {
    margin-top: calc(var(--content-space) / 2);
}
</style>
