<template>
  <section class="bg-white min-h-screen pb-10 text-gray-800">
    <div class="container max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
      <h1
        class="
          text-2xl
          md:text-4xl
          text-center
          font-medium
          tracking-wide
          pt-5
          sm:pt-10
          pb-3
        "
      >
        TERMS & CONDITIONS
      </h1>

      <p class="text-sm">Last Updated: March 2021</p>
      <h1
        class="
          text-2xl
          md:text-4xl
          text-center
          font-medium
          tracking-wide
          pt-5
          sm:pt-10
          pb-3
        "
      >
        PRIVACY NOTICE
      </h1>

      <div class="mb-10 flex flex-col space-y-2">
        <button
          v-for="(q, qx) in questions"
          :key="qx"
          class="
            text-left
            font-semibold
            text-blue-500
            max-w-max
            focus:outline-none
          "
          @click="window.location.hash = `${q.id}`"
        >
          {{ q.question }}
        </button>
      </div>

      <div class="flex flex-col space-y-5">
        <div v-for="(a, ax) in answers" :id="`${a.id}`" :key="ax">
          <p class="mb-3 text-lg font-semibold">
            {{ ax + 1 }}. {{ a.question }}
          </p>

          <p v-html="a.answer"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { question: 'Who we are' },
        { question: 'What is a privacy notice?' },
        { question: 'What personal data do we collect and when?' },
        { question: 'How do we use your personal data?' },
        {
          question:
            'Why are we allowed to handle and store your personal data?',
        },
        { question: 'How do we protect your personal data?' },
        { question: 'How long do we keep your personal data for?' },
        { question: 'Who else sees your personal data?' },
        { question: 'Where is your data stored?' },
        { question: "Do we process children's data?" },
        {
          question:
            'What rights do you have over the data we store and how can you ask us to stop storing it?',
        },
        {
          question:
            'What can you do if you are unhappy with how we handle your data?',
        },
        {
          question:
            'Special Provisions for California Residents under The California Consumer Privacy Act (CCPA)',
        },
        { question: 'Privacy Notice updates' },
      ],

      answers: [
        {
          id: 'q1',
          question: 'Who we are',
          answer: `
          <div class="space-y-3">
          <p>We are River Island Clothing Co. Limited ("us/we") and we control the River Island website and all of our stores (except for certain international franchised stores). We are wholly owned by River Island Holdings Limited.</p>

          <p>We are an English company with registered company number: 00636095 and our registered office is at Chelsea House, Westgate, London W5 1DR. We are the data controller responsible for your personal information and we are registered at the UK Information Commissioner's Office with registration number Z6555707.</p>

          <p>The following laws will apply to the protection of your personal data when you shop on our website or stores:</p>

          <ul class="space-y-3 list-decimal list-inside">
          <li>If you are a resident of the United Kingdom, the UK GDPR as defined in the Data Protection, Privacy and Electronic Communications (Amendments etc) (EU Exit) Regulations 2019, the Data Protection Act 2018 and the Privacy and Electronic Communications (EC Directive) Regulations 2003;</li>

          <li class="space-y-3">
          <p>If you are a resident of the European Union, the Regulation (EU) 2016/679 (General Data Protection Regulation) and any applicable local laws, statutes and regulatory guidance. As a resident of the European Union, you can direct your data protection queries to our European Representative:</p>

          <p>
          <span>River Island</span>
          <span>3rd Floor</span>
          <span>Kilmore House</span>
          <span>Park Lane</span>
          <span>Spencer Dock</span>
          <span>Dublin 1k</span>
          <span>Ireland</span>
          </p>
          </li>

          <li>If you are a California resident, the California Consumer Privacy Act (CCPA);</li>

          <li>If you reside in any other country, the applicable data protection laws and regulations in your country of residence.</li>
          </ul>
          </div>
          `,
        },

        {
          question: 'What is a privacy notice',

          answer: `This Privacy Notice contains our obligations and promises to you about the different types of personal data we might collect about you when you shop, make contact, or browse with us. It explains how we'll store, handle and protect that data.`,
        },

        {
          question: 'What personal data do we collect and when?',

          answer: `
          <div>
          <p class="mb-3">We collect the following information about you:</p>

          <ul class="mb-3 list-disc ml-10 list-oulside">
          <li>Title</li>
          <li>Name and Surname</li>
          <li>Email address</li>
          <li>Date of Birth</li>
          <li>Gender</li>
          <li>Contact phone number(s)</li>
          <li>Purchase information</li>
          <li>Interactions with us e.g. contacting our Customer Services Team (we may record your calls), or visits to our stores/website/app</li>
          <li>Personal information you put on social media</li>
          <li>Information you provide in your reviews of us, or survey responses</li>
          <li>Delivery address(s)</li>
          <li>Billing address</li>
          <li>Attendance at events (and travel preferences)</li>
          <li>Preferred store, categories, brands and budget information</li>
          <li>IP address</li>
          <li>Information from cookies, including information on the devices you may use to make a purchase - please see our separate <a href="#" class="text-blue-500 font-semibold">Cookies Policy</a></li>
          <li>Images of you (including CCTV footage from our stores)</li>
          <li>Certain physical appearance data which you may disclose to us when booking an appointment with our Style Studio (such as your height and your eyes colour)</li>
          <li>Clothing and shoes size</li>
          <li>Reasons for cancelling or returning your order</li>
          </ul>

          <p class="mb-3">We collect the information in the following circumstances:</p>

          <ul class="list-disc ml-10 list-oulside">
          <li>When you register to or use our website</li>
          <li>When you register to or use our in-store WIFI (in any of our stores)</li>
          <li>When you register to or use our app</li>
          <li>When you allow social media sites to provide your data to us</li>
          <li>When you contact us by telephone or email</li>
          <li>When you register or use our Style Studio services</li>
          <li>When you enter any event, prize draws or competitions run by us</li>
          <li>When completing any of our surveys or leaving us a review</li>
          <li>When completing any forms for transactional, employment or other purposes</li>
          <li>When you buy products or gift cards/vouchers</li>
          <li>When you've given a third party permission to share with us the information they hold about you</li>
          <li>When you shop in our stores we may capture your image on our CCTV cameras</li>
          <li>When you choose to cancel or return an order</li>
          </ul>

          </div>
          `,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
