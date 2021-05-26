<template>
  <div class="">
    <div class="" style="display: flex">
      <!-- col - empty-->
      <div class="col-beauty">
        <div class="section-content">
            <router-link
              class="linkClass"
              :to="{
              name: 'Home',
           
            }">
          <div class="topSection hideOverflow">
            <div class="topLeftBeauty beautyText" v-scrollfadinganimation>
              beauty. <br />
              &middot; <br />
              <div class="spanbeautyText">summer edition</div>
            </div>
          </div>
        <div class="middleSection hideOverflow">
            <div class="beautyText sidebarBeauty" v-scrollfadinganimation>
              beauty
              <div class="middot">&middot;</div>
              <div class="spanbeautyText">summer edition</div>
            </div>
          </div>
          <div class="bottomSection hideOverflow"></div>
          </router-link>
        </div>
      </div>
      <!-- col - ux content -->

      <div class="col-content-ux">
        <div class="section-content">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow content-ux-container">
            <div class="content-img">
              <div class="content-img-content">
                <div
                  class="altaLogo"
                  v-scrollfadinganimation
                  style="transition-delay: 1s !important "
                ></div>

                <div class="content-img-top">
                  <transition name="fade">
                    <div
                      class="ux-content-sub-body-2 mont-font"
                      style="transition-delay: 1.2s !important"
                      v-scrollfadinganimation
                    >
                      ALTA
                    </div>
                  </transition>
                </div>

                <div
                  class="content-view-btn "
                  style="transition-delay: 1.5s !important "
                  v-scrollfadinganimation
                >
                  <button>VIEW BRAND MANUAL</button>
                </div>
              </div>
            </div>
            <div class="content-ux-div">
              <div
                class="branding-title mont-font"
                style="transition-delay: 1.6s !important"
                v-scrollfadinganimation
              >
                ALta's brand basics
              </div>
              <div
                class="ux-content-title-alta ux-content-title p-2010 mont-font"
                style="transition-delay: 1.9s !important"
                v-scrollfadinganimation
              >
                who we are
              </div>
              <div class="ux-content-sub">
                <div
                  class="ux-content-sub-body sub-body-alta mont-font"
                  style="transition-delay: 2.2s !important"
                  v-scrollfadinganimation
                >
                  hello alta, goodbye cash
                </div>
              </div>
              <div
                class="ux-content-title-alta ux-content-title mont-font" 
                style="padding-top: 30px; transition-delay: 2.4s !important"
                
                v-scrollfadinganimation
              >
                values
              </div>

              <div class="ux-content-sub" v-scrollfadinganimation
               style="padding-top: 30px; transition-delay: 2.6s !important">

                <div class="value-content-div value-content-div-alta">
                  <div class="value-single-alta">fast</div>
                  <div class="value-single-alta">easy</div>
                  <div class="value-single-alta">freedom</div>
                  <div class="value-single-alta">safe</div>
                  <div class="value-single-alta">trust</div>
                  <div class="value-single-alta">limitless</div>
                </div>

                <div class="ux-content-sub-body" v-scrollfadinganimation>
                  ALTA is a digital payment club for cash-intensive industries
                  where businesses pay each other using digital tokens instead
                  of cash. As a cash-intensive business, you deserve a partner
                  that understands your unique needs and anticipates the
                  protections you’ll need to operate your business. Alta enables
                  you to receive and make payments 24/7, you can also sell your
                  tokens for dollars which are then deposited into a bank
                  account of your choice, thus empowering your business to reach
                  new heights.
                </div>
              </div>
              <div class="ux-content-title-alta  ux-content-title p-2010 mont-font" v-scrollfadinganimation>
                Voice and Tone
              </div>
              <div class="ux-content-sub">
                <div class="ux-content-sub-body-2 mont-font sub-body-alta-2" v-scrollfadinganimation>
                  Communicating for Clarity
                </div>
                <div class="ux-content-sub-body" v-scrollfadinganimation>
                  Alta’s brand voice is clear, concise, possessive and most of
                  all always positive. The industry that Alta operates in has a
                  lot of misconceptions about it, it’s important the
                  communication stays within these specific parameters. If you
                  stick to these things, you can’t go wrong.
                </div>
              </div>
            </div>
          </div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col - ui content -->
      <div class="col-content-ui">
        <div class="section-content">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow content-ui-container">
            <AltaBrandPageUI></AltaBrandPageUI>
          </div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col - empty-->
      <div class="col-beauty">
        <div class="section-content">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AltaBrandPageUI from "./AltaBrandPageUI";
export default {
  components: {
    AltaBrandPageUI,
  },
};
</script>
<style >
.value-content-div-alta {
  display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: .5rem;
}

.value-single-alta {
      text-transform: uppercase;
    font-family: 'Montserrat';
}

.sub-body-alta-2 {
      padding: 16px 0px;
    /* font-size: 1.2rem; */
    /* letter-spacing: 1.5px; */
    text-transform: uppercase;
    font-weight: 100;
}
.sub-body-alta {
  text-transform: uppercase;
    letter-spacing: 1.5px;
}
.mont-font {
  font-family: 'Montserrat', sans-serif !important;
}
.before-enter-fall {
  opacity: 0;
  transform: translateY(-30px);
  transition: all 1s cubic-bezier(0.17, 0.67, 0.39, 1.16);
}

.enter-fall {
  opacity: 1;
  transform: translateY(0px);
}

.before-enter-fade {
  opacity: 0;
  transition: all 1s 0.2s cubic-bezier(0.58, 0.37, 0.7, 1.48);
}

.enter-fade {
  opacity: 1;
}

.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s 0.5s cubic-bezier(0.58, 0.37, 0.7, 1.48);
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
.agileLogo {
  /* background-image: url(../assets/images/agile/agileWhiteLogo.png); */
  height: 201px;
  width: 123px;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position-x: -100px; */
  position: relative;
  top: -45px;
  left: -159px;
}
.altaLogo {
  background-image: url(../../../assets/img/alta/altalogowhite.png);
  height: 201px;
  width: 123px;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position-x: -100px; */
  position: relative;
  top: -45px;
  left: -159px;
}
.content-img {
  overflow: hidden;
  background-image: url(../../../assets/img/agile/agile3.jpg);
  background-size: cover;
  height: 100%;
  width: 157%;
  background-position-x: -114px;
  background-position-y: -41px;
}
.branding-img {
  height: 130%;
  width: 130%;
  background-size: cover;
  background-position-y: 12px;
  background-position-x: -14px;
}
.branding-title,
.ux-content-title,
.ux-content-sub-body-2 {
  font-family: "Covered By Your Grace", cursive;
}
.p-2010 {
  padding: 20px 0px 10px 0px;
}
.content-ux-div {
  margin: 30px;
  overflow: scroll;
}
.ux-content-sub-body {
  padding: 10px 0px 0px 0px;
  font-weight: 100;

  font-family: proxima-nova, sans-serif;
}


.ux-content-sub-body-2 {
  padding: 16px 0px;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.value-content-div {
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: "proxima-nova";
  font-size: 0.8em;
  font-weight: 300;
  padding: 24px 0px;
}
.branding-title {
  padding: 0px 0px 20px 0px;
}

.ux-content-title-alta {
    font-size: .9rem !important;
}
.branding-title,
.ux-content-title {
  /* font-family: "baskerville-poster-pt";
      font-style: italic; */
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.ux-content-sub {
  font-family: proxima-nova, sans-serif;
}
.content-ux-container,
.content-img-content {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.content-img-content {
  height: 65%;
  width: 49%;
  margin: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.content-img {
  border-bottom: 2px solid #303030;
  /*  
  padding: 60px 60px 60px 60px; */
}

.content-view-btn {
  margin-top: auto;
}
button {
  height: 40px;
  width: 200px;
  background: transparent;
  border: 1px solid;
  letter-spacing: 1px;
}

.content-ui-container {
  padding: 30px 60px;
}
</style>