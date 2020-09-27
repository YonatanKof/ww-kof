<template>
  <Layout :show-logo="true" :show-posts="true">
    <section class="about">
      <h1 class="about__title-1">Yonatan Ben Knaan</h1>
      <h2 class="about__title-2">Designing digital products</h2>
      <div class="about__bio-text">
        <p>
          A <i>product designer</i>, a tech lover, a <i>maker</i>, a
          <i>creative director</i> and an alright dude.
        </p>
        <p>
          My passion -> Creating a space where people, business, ideas and
          commerce, gain and give value.
        </p>
        <p>
          Specialty -> <i>Design systems</i>; simplifying complexity, optimizing
          products and their production.
        </p>
      </div>
      <div class="about__image-cont">
        <g-image
          class="about__image"
          src="~/assets/images/Yonatan_Ben-Knaan-Squere.jpg"
          alt="Yonatan Ben-Knaan at his home in TLV"
          quality="90"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  metaInfo: {
    title: "About Yonatan Ben Knaan",
  },
};
</script>

<style lang="scss">
@import "../assets/style/index";

.about {
  max-width: var(--content-width-sm);
  display: flex;
  flex-direction: column;

  @include mQ-max($display-size-md) {
    // background-color: wheat;
  }

  @include mQ-max($display-size-xs) {
    background-color: aliceblue;
  }
  &__bio-text {
    max-width: 80%;
    font-size: var(--font-size-3xl);
  }
  &__image-cont {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    top: calc(var(--spacem-6xl) * -1);
      z-index: 10;
  }
  &__image {
    filter: saturate(0.25) opacity(0.5);
    max-width: 40%;
    border-radius: 50%;
    @include animtion-ctrl(filter, 0.35s, ease-in);
    &:hover {
      filter: saturate(0.5) opacity(1);
    }
  }
  @include mQ-max($display-size-sm) {
    background-color: salmon;
    &__image {
      grid-row: 5 / span 6;
    }
  }
}
</style>