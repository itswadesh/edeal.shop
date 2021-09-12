<template>
  <section class="bg-white min-h-screen pb-10 text-gray-800">
    <div
      class="
        w-full
        flex flex-col
        items-center
        justify-center
        text-center
        max-w-4xl
        mx-auto
        px-3
      "
    >
      <h1
        class="
          text-3xl
          md:text-4xl
          font-medium
          tracking-wide
          pt-5
          sm:pt-10
          pb-3
        "
      >
        GIFT CARD
      </h1>

      <p class="mb-7 sm:mb-14 text-lg font-medium">
        An RI Card makes the perfect present for any occasion
      </p>

      <div
        class="
          mb-7
          sm:mb-14
          flex flex-col
          lg:flex-row
          items-center
          justify-center
          space-y-10
          md:space-y-20
          lg:space-y-0 lg:space-x-20
        "
      >
        <div>
          <div
            class="
              mb-5
              lg:mb-0
              bg-gray-200
              flex
              items-center
              justify-center
              p-5
            "
          >
            <img
              src="/island/gift-card/gift-card1.png"
              alt="gift card"
              class="h-60 w-full"
            />
          </div>

          <div>
            <h1
              class="
                text-3xl
                md:text-4xl
                font-medium
                tracking-wide
                sm:pt-10
                pb-3
              "
            >
              Digital Gift Card
            </h1>

            <h2 class="hover:underline">BUY NOW</h2>
          </div>
        </div>

        <div>
          <div
            class="
              mb-5
              lg:mb-0
              bg-gray-200
              flex
              items-center
              justify-center
              p-5
            "
          >
            <img
              src="/island/gift-card/gift-card2.png"
              alt="gift card"
              class="h-60 w-full"
            />
          </div>

          <div>
            <h1
              class="
                text-3xl
                md:text-4xl
                font-medium
                tracking-wide
                sm:pt-10
                pb-3
              "
            >
              Gift Card
            </h1>

            <h2 class="hover:underline">BUY NOW</h2>
          </div>
        </div>
      </div>

      <div class="mb-7 space-y-5">
        <p>
          Not sure what to get them but know they love RI? Then treat them to
          one of our gift cards! Send it to them via email, or we can post it
          straight to their door. With plenty of designs to choose from, load up
          the gift card with any amount from £2/€2 upwards.
        </p>

        <p>
          Gift Cards can be redeemed online and in-store in the UK, the Republic
          of Ireland and the Isle of Man.Gift Cards can be redeemed online and
          in-store in the UK, the Republic of Ireland and the Isle of Man.
        </p>

        <p>
          Heading out? You can also buy our gift cards in selected Tesco,
          Sainsbury’s, Asda, Morrison’s, Boots, WHSmith, Clinton, Wilko and The
          Card Factory stores.
        </p>
      </div>

      <h6 class="mb-5 text-lg font-medium">More information</h6>

      <p class="mb-7 text-sm">More information and full Gift Card Ts & Cs.</p>

      <a href="#" class="mb-5 sm:mb-10 text-lg font-medium hover:underline"
        >FIND OUT MORE</a
      >
    </div>

    <WantMore />
  </section>
</template>

<script>
import WantMore from '~/components/Island/WantMore.vue'

export default {
  components: {
    WantMore,
  },
}
</script>

<style scoped></style>
