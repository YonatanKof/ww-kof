<template>
  <Layout :show-logo="true" :show-posts="true">
    <section class="about">
      <h1 class="about__title-1">Yonatan <span class="grab-word">Ben Knaan</span></h1>
      <h2 class="about__title-2">Designing Digital Products</h2>
      <div class="about__bio-text">
        <p>
          A <i>product designer</i>, a tech lover, a maker, a
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
.grab-word{
  white-space: nowrap;
}
.about {
  &__title-1 {
    font-size: var(--font-size-9xl);
  }
  &__title-2 {
    font-size: var(--font-size-7xl);
  }
  margin-top: var(--spacem-6xl);
  max-width: var(--content-width-sm);
  display: flex;
  flex-direction: column;

  // @include mQ-max($display-size-md) {
  //   background-color: wheat;
  // }

  // @include mQ-max($display-size-sm) {
  //   background-color: salmon;
  // }

  // @include mQ-max($display-size-xs) {
  //   background-color: aliceblue;
  // }
  &__bio-text {
    max-width: 80%;
    font-size: var(--font-size-3xl);
    @include mQ-max($display-size-sm) {
      max-width: 100%;
      font-size: var(--font-size-4xl);
    }
    @include mQ-max($display-size-xs) {
      font-size: var(--font-size-3xl);
    }
  }
  &__image-cont {
    display: flex;
    flex-direction: row-reverse;
  }
  &__image {
    filter: saturate(0.5) opacity(0.5) hue-rotate(30deg);
    max-width: 50%;
    border-radius: 50%;
    transform: scale(1.35);
    transform-origin: 80% 100%;
  }
}
</style>