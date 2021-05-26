<template>
  <div class="outer-wrapper-twoLine">
    <div class="wrapper-twoLine">
      <!-- col - empty-->
      <div class="col-beauty">
        <div class="section">
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
        </div>
      </div>
      <!-- col - photo -->

      <div class="col-photo">
        <div class="section">
          <div class="topSection hideOverflow hover"></div>
          <router-link
            class="linkClass"
            :to="{
              name: 'BrandingMenu',
              params: {
                articleNbr: `A${randomNumber}`,
                titleT: articles[0].titleT,
                titleBtm: articles[0].titleBtm,
                athrName: articles[0].athrName,
                artBodyText: articles[0].artBodyText,
                articleImg: articles[0].articleImg,
              },
            }"
          >
            <div class="middleSection" style="height: 100%">
              <div class="hideOverflow" style="height: 100%">
                <div class="imgDiv3 hideOverflow">
                 <img
                    class="viveImg"
                    src="../assets/img/agile/agilecover.jpg"
                    alt=""
                  />
                </div>
              </div>
                    <transition name="fade">
              <div class="rightText" v-show="!showMenu1">
               
                <div class="doubleWide-look-div-1 " @click="randomNumberFunc()">
                    <div class="paddedBox-1">
                  <div class="navLinkTitle" v-scrollanimation >
                   Branding  <br />
                   
                  </div>
                  <div class="navLinkSubTitle" v-scrollanimation >{{ articles[0].athrName }}</div>
                </div>
                 </div>
              </div>
                    </transition>
                  <transition name="fade">
                <div class="popupMenuContainer" v-show="showMenu1">
                  <div class="hideOverflow popupMenuDiv">
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; collections &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; closer look &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
         <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 1))"
          >
            &middot; {{ showMenu1 ? "explore beauty" : "branding" }} &middot;
          </div>
        </div>
      </div>

      <!-- col - words -->

      <div class="col-words">
        <div class="section">
          <div class="topSection hideOverflow hoverAndLeft"></div>

          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>

      <!-- col - empty -->

      <div class="col-space">
        <div class="section">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>

      <!-- col photo hover words -->

      <div class="col-photo">
        <div class="section">
          <div class="topSection hideOverflow">
            <div class="menuText"></div>
          </div>
          <router-link
            class="linkClass"
            style="overflow: hidden"
            :to="{
              name: 'AltaBrandPageOutline',
              params: {
                articleNbr: `A${randomNumber}`,
                titleT: articles[1].titleT,
                titleBtm: articles[1].titleBtm,
                athrName: articles[1].athrName,
                artBodyText: articles[1].artBodyText,
                articleImg: articles[1].articleImg,
              },
            }"
          >
            <div class="middleSection hideOverflow">
                      <transition name="fade">
              <div class="">
                <div class="imgDiv3">
                 <img
                    class="fabricImg"
                    src="../assets/img/alta/altaBusinessMockup.png"
                    alt=""
                  />
                </div>
                <div class="singleWide-look-div-1 hideOverflow">
                  <div
                 class="paddedBox-2"
                    @click="randomNumberFunc()"
                  >
                    <div class="navLinkTitle" v-scrollanimation >
                      Logos & <br />
                     Colors
                    </div>
                    <div class="navLinkSubTitle" v-scrollanimation >
                      {{ articles[1].athrName }}
                    </div>
                  </div>
                </div>
              </div>
                      </transition>
                          <transition name="fade">
                <div class="popupMenuContainer3" v-show="showMenu2">
                  <div class="hideOverflow popupMenuDiv">
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; collections &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; closer look &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
              <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 2))"
          >
            &middot; {{ showMenu2 ? "explore beauty" : "branding" }} &middot;
          </div>
        </div>
      </div>

      <!-- col -->

      <div class="col-space">
        <div class="section">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col - photo -->

      <div class="col-photo">
        <div class="section">
          <div class="topSection hideOverflow"></div>
          <router-link
            class="linkClass"
            :to="{
              name: 'MagMenu',
        
            }"
          >
            <div class="middleSection" style="height: 100%">
              <div class="hideOverflow" style="height: 100%">
                <div class="imgDiv3 hideOverflow">
               
                </div>
              </div>
               <transition name="fade">
              <div class="rightText" v-show="!showMenu3">
                <div class="doubleWide-look-div-2" @click="randomNumberFunc()">
                      <div class="paddedBox-3">
                  <div class="navLinkTitle" v-scrollanimation >
                    Magazinges & <br />
                  Lookbooks 
                  </div>
                  <div class="navLinkSubTitle" v-scrollanimation >{{ articles[2].athrName }}</div>
                      </div>
                </div>
              </div>
               </transition>
                      <transition name="fade">
                <div class="popupMenuContainer" v-show="showMenu3">
                  <div class="hideOverflow popupMenuDiv">
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; collections &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; closer look &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
                <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 3))"
          >
            &middot; {{ showMenu3 ? "explore beauty" : "branding" }} &middot;
          </div>
        </div>
      </div>
      <!-- col words -->

      <div class="col-words">
        <div class="section">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>

      <!-- col empty -->

      <div class="col-space">
        <div class="section">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col photo hover words-->

      <div class="col-photo">
        <div class="section">
          <div class="topSection hideOverflow"></div>
          <router-link
            class="linkClass"
            style="overflow: hidden"
            :to="{
              name: 'VectorMenu',
              params: {
                articleNbr: `A${randomNumber}`,
                titleT: articles[3].titleT,
                titleBtm: articles[3].titleBtm,
                athrName: articles[3].athrName,
                artBodyText: articles[3].artBodyText,
                articleImg: articles[3].articleImg,
              },
            }"
          >
            <div class="middleSection hideOverflow">
                 <transition name="fade">
              <div class="">
                <div class="imgDiv3">
                
                </div>
                <div class="singleWide-look-div-2 hideOverflow">
                  <div
                      class="paddedBox-4"
                    @click="randomNumberFunc()"
                  >
                    <div class="navLinkTitle" v-scrollanimation >
                     Vectors & <br />
                     Animations
                    </div>
                    <div class="navLinkSubTitle" v-scrollanimation >
                      {{ articles[3].athrName }}
                    </div>
                  </div>
                </div>
              </div>
                 </transition>
                    <transition name="fade">
                <div class="popupMenuContainer3" v-show="showMenu4">
                  <div class="hideOverflow popupMenuDiv">
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; collections &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; closer look &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
            <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 4))"
          >
            &middot; {{ showMenu4 ? "explore beauty" : "branding" }} &middot;
          </div>

          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col -->



      <div class="col-beauty-cap">
        <div class="section">
          <div class="topSection hideOverflow">
            <div class="divTwo div beautyText">
              beauty. <br />
              &middot; <br />
              <div class="spanbeautyText">summer edition</div>
            </div>
          </div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: 5625,
  
        showMenu: false,
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      val: 0,
    };
  },
    computed: {
    articles() {
      return this.$store.getters.articles;
    },
  },
  methods: {
        viewMenu(val) {
      if (val == 1) {
        this.showMenu1 = !this.showMenu1;
      } else if (val == 2) {
        this.showMenu2 = !this.showMenu2;
      } else if (val == 3) {
        this.showMenu3 = !this.showMenu3;
      } else if (val == 4) {
        this.showMenu4 = !this.showMenu4;
      }
    },
    randomNumberFunc() {
      this.randomNumber = Math.ceil(Math.random() * 10200);
    },
  },
};
</script>

<style scoped >


.popupMenuDiv {
      display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
}
  .before-enter-fade {
    opacity: 0;
    transition: all 1s .2s cubic-bezier(.58,.37,.7,1.48);
  }

  .enter-fade {
    opacity: 1
  }



   .before-enter {
    opacity: 0;
   transform: translateY(50px);
    transition: all 1s .5s cubic-bezier(.58,.37,.7,1.48);
  }
 
  .enter {
    opacity: 1;
    transform: translateY(0px);
  
  }
img.fabricImg {
  height: 116%;
  width: 217%;
  transform: translateX(-300px);
}
img.ideaImg {
    height: 131%;
    width: 231%;
  transform: translateX(-280px);
}
img.viveImg {
  height: 116%;
  width: 217%;
  transform: translateX(-320px);
}

.collectionInfoDivA {
    height: 57% !important;
    width: 20% !important;
    text-align: left;
    padding: 9% 20px 0px 11% !important;
    position: fixed !important;
    top: 192px !important;
    left: 4.2% !important;
    border: 1px solid transparent;
}
.collectionInfoDivA:hover {
   border: 1px solid pink;
}
.collectionInfoDiv10 {
    height: 57% !important;
    width: 20% !important;
    text-align: left;
    padding: 9% 20px 0px 11% !important;
    position: fixed !important;
    top: 192px !important;
    left: 47.8% !important;
    border: 1px solid transparent;
}
.textInsertDiv10 {
    text-align: left;
    padding-top: calc(95%);
    padding-left: 20px;
    padding-bottom: 20%;
    height: 900px;
}

.textOverImgDiv {
    position: relative;
    top: -50vw !important;
    z-index: 200;
}

  /* /////////////////// TABLES   */
  /* tables  1024×1366 IPAD PRO */
    @media only screen and (min-device-width: 1366px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
img.viveImg[data-v-344f1dd2] {

    width: 278%;
    transform: translateX(-320px);
}
img.ideaImg[data-v-344f1dd2] {

    width: 299%;

}
img.fabricImg[data-v-344f1dd2] {
    
    width: 304%;

}
img.ART4 {
    width: 135%;
    transform: translateX(-110px);
}
.footer-text {
    padding: 13% 0px 0px;
    font-size: 1.2rem;

    letter-spacing: 4px;

}
  }
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    .beautyText {
    font-size: 1.7rem !important;
    padding: 42px 17px;
}
.spanbeautyText {
  
    font-size: 1.3rem;
   
}
  }

/* IPAD 768X1024 */
@media only screen and (max-device-width: 1024px) and (min-device-width: 1000px) and (max-device-height: 768px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {

img.ART4 {
    width: 103%;
}
.footer-text {
    padding: 8% 0px 0px;
}

}
@media only screen and (max-device-width: 768px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)

{
img.fabricImg[data-v-344f1dd2] {
    width: 232%;
    transform: translateX(-250px) translateY(-10px);
}
img.ART4 {
    filter: brightness(0.9) !important;
    width: 118%;
    transform: translateX(-50px) translateY(-10px);
}

}


/* PIXEL 2 XL 411x823 */
@media only screen and (max-device-width: 823px) and (max-device-height: 411px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
img.ART4 {
    width: 104%;
}
.footer-text {
    padding: 4% 0px 0px;
}
}
@media only screen and (max-device-width: 411px) and (max-device-height: 823px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)

{
img.viveImg[data-v-344f1dd2] {
    height: 116%;
    width: 293%;
    transform: translateX(-350px);
}
img.ART4 {
    filter: brightness(0.9) !important;
    background-size: cover;
    height: 100%;
    width: 139%;
    transform: translateX(-103px);
}
img.fabricImg[data-v-344f1dd2] {
    height: 116%;
    width: 313%;

}
img.ideaImg[data-v-344f1dd2] {
    height: 131%;
    width: 314%;
    transform: translateX(-280px);
}
}
/* IPHONE X 375X812 */
@media only screen and (max-device-width: 812px) and (max-device-height: 375px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
.footer-text[data-v-344f1dd2] {
    padding: 3% 0px 0px;
}
}
 
@media only screen and (max-device-width: 375px) and (min-device-width: 300px) and (max-device-height: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)
{
img {
    width: 368% !important;
    transform: translateX(-418px);
}
img.ART4[data-v-344f1dd2] {
      width: 164% !important;
    transform: translateX(-154px);
}

}



@media only screen and (max-device-width: 414px) and (min-device-width: 400px) and (max-device-height: 736px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
img {
    width: 284% !important;
    transform: translateX(-50px);
}

img.ART4[data-v-344f1dd2] {
    width: 127% !important;
    transform: translateX(-67px);
}
img.viveImg[data-v-344f1dd2] {

    width: 217%;
    transform: translateX(-332px);
}
}
/* GALAXY FOLD 280x653 */
@media only screen and (max-device-width: 654px) and (max-device-height: 281px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {

img.viveImg[data-v-344f1dd2] {
    height: 116%;
    width: 217%;
    transform: translateX(-220px) translateY(-32px);
}
img.fabricImg[data-v-344f1dd2] {
 
    transform: translateX(-70px);
}
img.ideaImg[data-v-344f1dd2] {
   
    transform: translateX(-120px);
}


img.ART4 {
    width: 102% !important;
    transform: translateY(-2px);
}
} 
@media only screen and (max-device-width: 281px) and (max-device-height: 654px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {

img {
    width: 396% !important;
    transform: translateX(-50px);
}

img.ART4 {
    width: 177% !important;
    transform: translateX(-150px);
}
} 
/* IPHONE 5 568x320 */
@media only screen and (max-device-width: 568px) and (max-device-height: 320px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
img.viveImg[data-v-344f1dd2] {

    width: 238%;
    transform: translateX(-243px);
}

img.fabricImg[data-v-344f1dd2] {
   
    transform: translateX(-274px);
}
img.ideaImg[data-v-344f1dd2] {

    transform: translateX(-122px);
}
img.ART4 {
    width: 100%;
}
.footer-text[data-v-344f1dd2][data-v-344f1dd2] {
    padding: 4% 0px 0px;
}

}


  /* moblie size MOTO AND GALAXY 375×640 */
  
  @media only screen and (min-device-width: 640px) and (max-device-height: 375px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) { 
.footer-text[data-v-344f1dd2][data-v-344f1dd2] {
    padding: 4% 0px 0px;
}
  }
  
</style>
