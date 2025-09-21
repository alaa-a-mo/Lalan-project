<template>
    <header
      id="navbar-spy"
      class="header header-1 header-transparent header-fixed" :class="variantClass"
    >
      <nav id="primary-menu" class="navbar navbar-fixed-top" :class="{ affix: isAffixed }">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <NuxtLink class="logo" to="/">
              <img
                class="logo-light"
                src="/images/logo/logo-light.png"
                alt="Land Logo"
              />
              <img
                class="logo-dark"
                src="/images/logo/logo-dark.png"
                alt="Land Logo"
              />
            </NuxtLink>
            
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div
            class="collapse navbar-collapse pull-right"
            id="navbar-collapse-1"
          >
            <ul class="nav navbar-nav nav-pos-center navbar-left">
              <!-- Home Menu -->
              <li class="has-dropdown active">
                <NuxtLink to="#" data-toggle="dropdown"
                  class="dropdown-toggle menu-item">home</NuxtLink>
                <ul class="dropdown-menu">
                  <li><NuxtLink to="/">home search</NuxtLink></li>
                  <li><NuxtLink to="/home-map">home map</NuxtLink></li>
                  <li>
                    <NuxtLink to="#">home property</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#">home splash</NuxtLink>
                  </li>
                </ul>
              </li>
              <!-- li end -->

              <!-- Pages Menu-->
              <li class="has-dropdown">
                <NuxtLink
                  data-toggle="dropdown"
                  class="dropdown-toggle menu-item"
                  to="#"
                  >Pages</NuxtLink
                >
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <NuxtLink
                      to="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      >agents</NuxtLink
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="#">All Agents</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="#">agent profile</NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown-submenu">
                    <NuxtLink
                      to="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      >agencies</NuxtLink
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="#">all agencies</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="#">agency profile</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <NuxtLink
                      to="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      >blog</NuxtLink
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="#">blog Grid</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="#"
                          >blog Grid Right</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="#"
                          >blog Grid Left</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="#">blog single</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="/about">page about</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#">page contact</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#">page FAQ</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#">page 404</NuxtLink>
                  </li>
                </ul>
              </li>
              <!-- li end -->

              <!-- Profile Menu-->
              <li class="has-dropdown">
                <NuxtLink
                  to="#"
                  data-toggle="dropdown"
                  class="dropdown-toggle menu-item"
                  >Profile</NuxtLink
                >
                <ul class="dropdown-menu">
                  <li>
                    <NuxtLink to="#">user profile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#">social profile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#">my properties</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#"
                      >favourite properties</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="#">add property</NuxtLink>
                  </li>
                </ul>
              </li>
              <!-- li end -->

              <!-- Properties Menu-->
              <li class="has-dropdown">
                <NuxtLink
                  to="#"
                  data-toggle="dropdown"
                  class="dropdown-toggle menu-item"
                  >Properties</NuxtLink
                >
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <NuxtLink
                      to="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      >Properties grid</NuxtLink
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="#">properties grid</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="#"
                          >properties grid split</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <NuxtLink
                      to="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      >properties list</NuxtLink
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="/properties"
                          >properties list</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="#"
                          >properties list split</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <NuxtLink
                      to="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      >properties single</NuxtLink
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="#"
                          >single gallery</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="#"
                          >single slider</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <!-- li end -->

              <li>
                <NuxtLink to="#">contact</NuxtLink>
              </li>
            </ul>
            <!-- Module Signup  -->
            <div class="module module-login pull-left">
              <NuxtLink
                class="btn-popup"
                data-toggle="modal"
                data-target="#signupModule"
                >Login</NuxtLink
              >
              <div
                class="modal register-login-modal fade"
                tabindex="-1"
                role="dialog"
                id="signupModule"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="row">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs">
                          <li class="active">
                            <NuxtLink to="#login" data-toggle="tab"
                              >login</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="#signup" data-toggle="tab"
                              >signup</NuxtLink
                            >
                          </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                          <div class="tab-pane fade in active" id="login">
                            <div class="signup-form-container text-center">
                              <form class="mb-0">
                                <NuxtLink
                                  to="#"
                                  class="btn btn--facebook btn--block"
                                  ><i class="fa fa-facebook-square"></i>Login
                                  with Facebook</NuxtLink
                                >

                                <div class="or-text">
                                  <span>or</span>
                                </div>
                                <div class="form-group">
                                  <input
                                    type="email"
                                    class="form-control"
                                    name="login-email"
                                    id="login-email"
                                    placeholder="Email Address"
                                  />
                                </div>
                                <!-- .form-group end -->
                                <div class="form-group">
                                  <input
                                    type="password"
                                    class="form-control"
                                    name="login-password"
                                    id="login-password"
                                    placeholder="Password"
                                  />
                                </div>
                                <!-- .form-group end -->
                                <div class="input-checkbox">
                                  <label class="label-checkbox">
                                    <span>Remember Me</span>
                                    <input type="checkbox" />
                                    <span class="check-indicator"></span>
                                  </label>
                                </div>
                                <input
                                  type="submit"
                                  class="btn btn--primary btn--block"
                                  value="Sign In"
                                />
                                <NuxtLink to="#" class="forget-password"
                                  >Forget your password?</NuxtLink
                                >
                              </form>
                              <!-- form  end -->
                            </div>
                            <!-- .signup-form end -->
                          </div>
                          <div class="tab-pane" id="signup">
                            <form class="mb-0">
                              <NuxtLink to="#"
                                class="btn btn--facebook btn--block" ><i
                                  class="fa fa-facebook-square"
                                ></i
                                >Register with Facebook</NuxtLink
                              >
                              <div class="or-text">
                                <span>or</span>
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="full-name"
                                  id="full-name"
                                  placeholder="Full Name"
                                />
                              </div>
                              <!-- .form-group end -->
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  name="register-email"
                                  id="register-email"
                                  placeholder="Email Address"
                                />
                              </div>
                              <!-- .form-group end -->
                              <div class="form-group">
                                <input
                                  type="password"
                                  class="form-control"
                                  name="register-password"
                                  id="register-password"
                                  placeholder="Password"
                                />
                              </div>
                              <!-- .form-group end -->
                              <div class="input-checkbox">
                                <label class="label-checkbox">
                                  <span
                                    >I agree with all
                                    <NuxtLink to="#"
                                      >Terms & Conditions</NuxtLink
                                    >
                                  </span>
                                  <input type="checkbox" />
                                  <span class="check-indicator"></span>
                                </label>
                              </div>
                              <input
                                type="submit"
                                class="btn btn--primary btn--block"
                                value="Register"
                              />
                            </form>
                            <!-- form  end -->
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content -->
                  </div>
                  <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->
              </div>
            </div>
            <!-- Module Consultation  -->
            <div class="module module-property pull-left">
              <NuxtLink to="#" target="_blank" class="btn"
                ><i class="fa fa-plus"></i> add property</NuxtLink
              >
            </div>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isAffixed = ref(false)
const props = defineProps({
  variant: {
    type: String,
    default: 'transparent'
  }
})
function handleScroll() {
  isAffixed.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const variantClass = computed(() =>
  props.variant === 'light' ? 'header-light' : 'header-transparent'
)

</script>