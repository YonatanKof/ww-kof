<template>
    <div class="author">
        <IconBase class="author__logo" icon-name="kof-icon" icon-color="var(--link-color)">
            <KofIcon />
        </IconBase>
        <h1 v-if="showTitle" class="author__site-title">{{ authorTitle }}</h1>
        <p v-if="showBioText" class="author__intro">{{ authorBio }}</p>
    </div>
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
import IconBase from "~/components/IconBase.vue";
import KofIcon from "~/components/icons/KofIcon.vue";

export default {
    components: {
        IconBase,
        KofIcon
    },
    props: ["showTitle", "showBioText", "authorTitle", "authorBio"]
};
</script>

<style lang="scss">
.author {
    margin: 0 auto;
    max-width: calc(var(--spacem-8xl) * 6);
    text-align: center;
    padding: var(--spacem-md) var(--content-space);
 
    &__logo {
        width: calc(var(--spacem-7xl) * 2);
        height: calc(var(--spacem-7xl) * 2);
        margin-bottom: var(--spacem-md);
    }
    &__intro {
        font-size: var(--font-size--big);
    }
    &__site-title {
        margin: 0;
    }
}
</style>
