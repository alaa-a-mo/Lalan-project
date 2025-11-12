<template>
  <form class="mb-0" @submit.prevent="submitContact">
    <div class="form-group">
      <label for="contact-name">Your Name*</label>
      <input
        type="text"
        class="form-control"
        id="contact-name"
        v-model="form.name"
        required
      />
    </div>

    <div class="form-group">
      <label for="contact-email">Email Address*</label>
      <input
        type="email"
        class="form-control"
        id="contact-email"
        v-model="form.email"
        required
      />
    </div>

    <div class="form-group">
      <label for="contact-phone">Phone Number</label>
      <input
        type="text"
        class="form-control"
        id="contact-phone"
        v-model="form.phone"
        placeholder="(optional)"
      />
    </div>

    <div class="form-group">
      <label for="message">Message*</label>
      <textarea
        class="form-control"
        id="message"
        rows="2"
        v-model="form.message"
        placeholder="(optional)"
      ></textarea>
    </div>

    <input
      type="submit"
      value="Send Request"
      class="btn btn--primary btn--block"
    />
  </form>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitContact = () => {
  console.log('Contact form submitted:', form)
    alert('Form submitted!')

}
</script>
