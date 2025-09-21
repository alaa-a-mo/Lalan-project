<template>
  <form id="post-comment" class="mb-0" @submit.prevent="submitReview">
    <div class="row">
      <div class="col-xs-12 col-sm-4 col-md-4">
        <div class="form-group">
          <label for="review-name">Your Name*</label>
          <input
            type="text"
            class="form-control"
            id="review-name"
            v-model="form.name"
            required
          />
        </div>
      </div>

      <div class="col-xs-12 col-sm-4 col-md-4">
        <div class="form-group">
          <label for="review-email">Your Email*</label>
          <input
            type="email"
            class="form-control"
            id="review-email"
            v-model="form.email"
            required
          />
        </div>
      </div>

      <div class="col-xs-12 col-sm-4 col-md-4">
        <div class="form-group">
          <label>Rating*</label>
          <div class="property-rating">
            <i
              v-for="star in 5"
              :key="star"
              class="fa"
              :class="star <= form.rating ? 'fa-star' : 'fa-star-o'"
              @click="form.rating = star"
              style="cursor:pointer"
            ></i>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <label for="review-comment">Review*</label>
          <textarea
            class="form-control"
            id="review-comment"
            rows="2"
            v-model="form.comment"
            required
          ></textarea>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-12">
        <button type="submit" class="btn btn--primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  rating: 0,
  comment: ''
})

const submitReview = () => {
  console.log('Review form submitted:', form)  
  alert('Form submitted!')

}
</script>
