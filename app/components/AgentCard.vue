<template>
  <div>
    <div class="col-xs-12 col-sm-4 col-md-4">
      <div class="agent">
        <div class="agent--img">
          <img :src="image" :alt="name" />
          <div class="agent--details">
            <p>
              {{ description }}
            </p>
            <div class="agent--social-links">
              <a v-if="social.facebook" :href="social.facebook"
                ><i class="fa fa-facebook"></i
              ></a>
              <a v-if="social.twitter" :href="social.twitter"
                ><i class="fa fa-twitter"></i
              ></a>
              <a v-if="social.dribbble" :href="social.dribbble"
                ><i class="fa fa-dribbble"></i
              ></a>
              <a v-if="social.linkedin" :href="social.linkedin"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- .agent-img end -->
        <div class="agent--info">
          <h5 class="agent--title">{{ name }}</h5>
          <h6 class="agent--position">{{ position }}</h6>
        </div>
        <!-- .agent-info end -->
      </div>
      <!-- .agent end -->
    </div>
  </div>
</template>
<script>
export default {
  name: "AgentCard",
  props: {
    name: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    social: {
      type: Object, 
      default: () => ({
        facebook: null,
        twitter: null,
        dribbble: null,
        linkedin: null,
      }),
    },
  },
};
</script>
