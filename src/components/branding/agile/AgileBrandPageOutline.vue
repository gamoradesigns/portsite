<template>
  <div class="">
    <div class="" style="display: flex">
      <!-- col - empty-->
      <div class="col-beauty">
        <div class="section-content">
          <div class="topSection hideOverflow">
            <div class="beautyText topLeftBeauty" v-scrollfadinganimation>
              beauty. <br />

              <div class="spanbeautyText">
                &middot; <br />
                summer edition
              </div>
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
        </div>
      </div>
      <!-- col - ux content -->

      <div class="col-content-ux">
        <div class="section-content">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow content-ux-container">
            <div class="content-img" v-scrollfadinganimation>
              <div class="content-img-content">
                <div class="agileLogo"
                v-scrollfadinganimation
                  style="transition-delay: 1s !important "></div>

                <div class="content-img-top">
                   <transition name="fade">
                  <div class="ux-content-sub-body-2"
                     style="transition-delay: 1.2s !important"
                      v-scrollfadinganimation>
                    Your Tailored Fitness Journey!
                  </div>
                   </transition>
                </div>

                <div class="content-view-btn"
                          style="transition-delay: 1.5s !important "
                  v-scrollfadinganimation>
                  <button>VIEW BRAND MANUAL</button>
                </div>
              </div>
            </div>
            <div class="content-ux-div">
              <div class="branding-title"
               style="transition-delay: 1.6s !important"
                v-scrollfadinganimation
                >agile fitness brand basics</div>
              <div class="ux-content-title p-2010"
              style="transition-delay: 1.9s !important"
                v-scrollfadinganimation
                >who we are</div>
              <div class="ux-content-sub" style="transition-delay: 2.2s !important"
                  v-scrollfadinganimation>
                <div class="ux-content-sub-body ux-content-sub-body-agile">
                  Agile Fitness is a tailor fitness journey. We believe physical
                  activity should complement your lifestyle not impede it.
                  Fitness plans should be flexible, agile, mirroring your own
                  life. All too often most people shy away from incorporating
                  fitness activities in their own lives because of the demand,
                  stress and failure cycle. We seek to change that. fitness in
                  any capacity should add to your overall wellbeing and instill
                  a sense of confidence, strength, and agility.
                </div>
              </div>
              <div class="ux-content-title"  style="padding-top: 30px; transition-delay: 2.4s !important"
                
                v-scrollfadinganimation>
                values
              </div>

              <div class="ux-content-sub">
                <div class="value-content-div value-content-div-alta">
                  <div class="value-single-alta">Health</div>
                  <div class="value-single-alta">Education</div>
                  <div class="value-single-alta">Quality</div>
                  <div class="value-single-alta">Agility</div>
                  <div class="value-single-alta">Happiness</div>
                </div>

                <div class="ux-content-sub-body ux-content-sub-body-agile">
                  Agile Fitness promises to tailor your fitness journey. Agile
                  by definition means able to move quickly and easily. that is
                  the promise. At every twist and turn agile’s educated
                  passionate fitness consultants will be there to tailor your
                  fitness jorney, goal and path.
                </div>
              </div>
              <div class="ux-content-title p-2010">mission</div>
              <div class="ux-content-sub">
                <div class="ux-content-sub-body-2">
                  Your Tailored Fitness Journey!
                </div>
                <div class="ux-content-sub-body ux-content-sub-body-agile">
                  Our mission is to tailor your fitness journey that complients
                  your lifestyles needs, desire and demands. Fitness is an
                  enjoyable experience for everyone. Wheather it is
                  powerlifting, yoga, zuba, crossfit, swimming, rock climbing
                  and everything in between there is something for everyone. Our
                  dedicated team of consultants and personal trainers are here
                  with you on journey every step of the way!
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
            <AgileBrandPageUI></AgileBrandPageUI>
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
import AgileBrandPageUI from "../agile/AgileBrandPageUI";
export default {
  components: {
    AgileBrandPageUI,
  },
};
</script>
<style scoped>
.agileLogo {
  background-image: url(../../../assets/img/agile/agileWhiteLogo.png);
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
.ux-content-sub-body-agile {
  padding: 10px 0px 0px 0px;
  font-weight: 100;

  font-size: 0.9rem;
  line-height: 1.2;
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