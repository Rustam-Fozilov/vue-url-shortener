<template>
  <div style="height: 100vh;">
    <div class="container">

      <div class="title">
        <h1>Shortly</h1>
        <p>Url shortener app using Options API in Vue.js Framework</p>
      </div>

      <div class="form-control">
        <div class="form-input">
          <form action="" @submit.prevent="getShortUrl">
            <input v-model="urlInput" type="text" name="urlName" placeholder="Enter your url...">

            <button type="submit" class="btn-submit">Get link</button>
          </form>
        </div>
        <div v-if="result" class="result">Your url:
          <span>
          {{ shortUrl }}

            <svg @click="copyToClipboard" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3529 3.8C10.8706 3.8 11.3136 3.98588 11.6819 4.35765C12.0508 4.73005 12.2353 5.1775 12.2353 5.7L12.2353 17.1C12.2353 17.6225 12.0508 18.07 11.6819 18.4424C11.3136 18.8141 10.8706 19 10.3529 19L1.88235 19C1.36471 19 0.921413 18.8141 0.552472 18.4424C0.184158 18.07 1.78692e-06 17.6225 1.74125e-06 17.1L7.44626e-07 5.7C6.98947e-07 5.1775 0.184157 4.73005 0.552471 4.35765C0.921412 3.98588 1.36471 3.8 1.88235 3.8L10.3529 3.8ZM10.3529 5.7L1.88235 5.7L1.88235 17.1L10.3529 17.1L10.3529 5.7ZM14.1176 -1.74279e-06C14.6353 -1.78804e-06 15.0786 0.185881 15.4475 0.557648C15.8158 0.930048 16 1.3775 16 1.9L16 14.25C16 14.5192 15.9096 14.7449 15.7289 14.9273C15.5489 15.1091 15.3255 15.2 15.0588 15.2C14.7922 15.2 14.5685 15.1091 14.3878 14.9273C14.2077 14.7449 14.1176 14.5192 14.1176 14.25L14.1176 1.9L4.70588 1.9C4.43922 1.9 4.21553 1.8088 4.03482 1.6264C3.85474 1.44463 3.76471 1.21916 3.76471 0.95C3.76471 0.680833 3.85474 0.455365 4.03482 0.273599C4.21553 0.091199 4.43922 -8.96673e-07 4.70588 -9.19986e-07L14.1176 -1.74279e-06Z" fill="black"/>
            </svg>

          </span>
        </div>
        <div v-if="error" class="error">{{ errorText }}</div>
      </div>

      <div class="footer">
        <a href="https://github.com/rustam-fozilov" target="_blank">Developer: Rustam Fozilov</a>
      </div>

    </div>
  </div>
</template>

<script>
import '@/assets/style.css'
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      error: false,
      result: false,
      shortUrl: '',
      urlInput: '',
      errorText: '',
    }
  },

  methods: {
    getShortUrl() {
      axios
        .post('https://t.ly/api/v1/link/shorten', {
          api_token: 'Clo0A8CI9AF6PooLuaBdWc5yIf1uwF3WKBBXqONmY9MwqbXSzfD2wgsOwMBm',
          long_url: this.urlInput,
          domain: 'https://t.ly/',
          include_qr_code: false
        })
        .then(res => {
          this.result = true;
          this.error = false;

          this.shortUrl = res.data.short_url;
          this.urlInput = ''
        })
        .catch(e => {
          this.error = true;
          this.result = false;
          this.errorText = 'Please enter correct url !'
        })
    },

    copyToClipboard() {
      navigator.clipboard.writeText(this.shortUrl).then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
      },() => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
      });
    }
  },
}
</script>

<style>
</style>
