<template>
    <div class="post-meta">
        Written by <em>{{ post.author_name }}</em> • Posted {{ post.date }} •
        <template v-if="post.timeToRead">
            <em>{{ post.timeToRead }} min read.</em>
        </template>
    </div>
</template>

<script>
export default {
    props: ["post"]
};
</script>

<style lang="scss">
.post-meta {
    font-size: 0.8em;
    opacity: 0.8;
}
</style>