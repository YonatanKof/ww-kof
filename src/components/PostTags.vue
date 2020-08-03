<template>
    <div class="post-tags">
        <g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
            <span>#</span>
            {{ tag.title }}
        </g-link>
    </div>
</template>

<script>
export default {
    props: ["post"]
};
</script>

<style lang="scss">
.post-tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: var(--space-sm);
    &__link {
        margin: var(--space-sm) 0 0 0;
        display: block;
        margin-inline-end: var(--space-sm);
        font-family: var(--font-family--title);
        font-size: 0.8em;
        text-decoration: none;
        background-color: var(--bg-code);
        padding: var(--spacem-md) var(--spacem-xl);
        border-radius: var(--radius);
        transition: box-shadow 0.6s;
        &:hover {
            text-decoration: none;
            box-shadow: var(--shadow-sm);
        }
        span {
            font-family: var(--font-family--body);
        }
    }
}
</style>