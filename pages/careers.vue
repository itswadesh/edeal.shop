<template>
  <section class="text-gray-800 bg-white min-h-screen">
    <div class="mb-20 relative">
      <img
        src="/island/career/career.jpg"
        alt=""
        class="h-rem object-cover object-top w-full"
      />

      <div
        class="
          absolute
          inset-0
          bg-black bg-opacity-20
          flex
          justify-center
          items-center
        "
      >
        <h1
          class="
            m-4
            bg-black
            p-4
            lg:px-20
            text-white text-4xl
            md:text-7xl
            font-medium
            tracking-wide
            text-center
            max-w-max
          "
        >
          Join the RI Family
        </h1>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-3">
      <div class="mb-20 text-center flex flex-col space-y-5">
        <h1 class="font-medium text-4xl">Join the Island</h1>

        <p>
          With an amazing history and an exciting future, everything we do is
          embedded in strong family values. We work collaboratively and cheer
          each other on, constantly driven to achieve a shared goal. We don’t
          take ourselves too seriously, but we know fashion can be better and do
          better. Our workplace is inclusive, energetic, and united where
          everyone is welcome!
        </p>

        <p>
          And it’s not just us that think so, our Islanders do too! We’ve
          recently been ranked as the UK’s 15th best big company to work for and
          the 10th best retailer to work for by Best Companies, based purely on
          employee feedback. Plus, our CEO Will Kernan has made the Top 50 CEOs
          in the UK in Glassdoor’s 2021 Employees’ Choice Awards, with a 94%
          approval rating from our Islanders. We are united as one team and
          achieving amazing things together.
        </p>

        <p>We are one team. We are the difference. We are River Islanders.</p>

        <p>Ready to become an Islander?</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-3">
      <div class="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="flex flex-col items-center justify-center space-y-5">
          <img
            src="/island/career/hero1.jpg"
            alt="head office"
            class="h-60 w-full"
          />

          <button
            class="
              py-3
              px-9
              rounded
              font-semibold
              tracking-wide
              text-white
              bg-black
              hover:opacity-80
              transition
              duration-300
            "
          >
            HEAD OFFICE
          </button>
        </div>
        <div class="flex flex-col items-center justify-center space-y-5">
          <img
            src="/island/career/hero2.jpg"
            alt="sales advisor"
            class="h-60 w-full"
          />

          <button
            class="
              py-3
              px-9
              rounded
              font-semibold
              tracking-wide
              text-white
              bg-black
              hover:opacity-80
              transition
              duration-300
            "
          >
            SALES ADVISOR
          </button>
        </div>
        <div class="flex flex-col items-center justify-center space-y-5">
          <img
            src="/island/career/hero3.jpg"
            alt="store management"
            class="h-60 w-full"
          />

          <button
            class="
              py-3
              px-9
              rounded
              font-semibold
              tracking-wide
              text-white
              bg-black
              hover:opacity-80
              transition
              duration-300
            "
          >
            STORE MANAGEMENT
          </button>
        </div>
      </div>

      <div
        class="
          pb-20
          flex flex-col
          md:flex-row
          items-center
          justify-between
          space-y-5
          md:space-y-0 md:space-x-28
        "
      >
        <img
          src="/island/career/avtar.jpg"
          alt="head office"
          class="h-40 md:h-60 md:w-96"
        />

        <div class="w-full font-medium">
          <q class="text-xl md:text-2xl tracking-wider"
            >River Island has fast become the designer brand of the high street,
            with over 300 stores and a thriving digital business. River Island
            has and always will be an exciting, innovative, and fun company.
            You’ll be glad you joined us.</q
          >

          <h6 class="mt-3 md:mt-5 text-base md:text-lg">WILL KERNAN, CEO</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
@media (max-width: 768px) {
  .h-rem {
    height: 20rem;
  }
}
@media (min-width: 768px) {
  .h-rem {
    height: 38rem;
  }
}
</style>
