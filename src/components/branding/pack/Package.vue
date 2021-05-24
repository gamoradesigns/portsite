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
      <div class="col-vert-container">
        <div class="col-vert col-vert-top"></div>
        <div class="pack-container">
          <tabs class="pack-container-div tabHeader-2">
            <tab
              title="Jars "
              class="tabclass tabHeader-2"
              v-scrollfadinganimation
            >
              <div class="package-content">
                <div class="outer-wrapper-package">
                  <div class="wrapper-package">
                    <div class="tabcontent">
                      <div class="package-right-div">
                        <div class="package-right-top">
                          <div class="small-outer-wrapper-content">
                            <div class="small-wrapper-content">
                              <div class="packimg">
   <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[0].img1}`)
                                "
                                alt=""
                              />

                              </div>
                           
                              <div class="col-placeholder-xs"></div>
                               <div class="packimg"> 
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[1].img2}`)
                                "
                                alt=""
                              />
                               </div>
                              <div class="col-placeholder-xs"></div>
                               <div class="packimg">
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[2].img3}`)
                                "
                                alt=""
                              />
                               </div>
                                   <div class="col-placeholder-xs"></div>
                               <div class="packimg">
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[3].img4}`)
                                "
                                alt=""
                              />
                               </div>
                                   <div class="col-placeholder-xs"></div>
                               <div class="packimg">
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[4].img5}`)
                                "
                                alt=""
                              />
                               </div>
                                   <div class="col-placeholder-xs"></div>
                               <div class="packimg">
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[5].img6}`)
                                "
                                alt=""
                              />
                               </div>
                            </div>
                          </div>
                        </div>

                        <div class="package-right-bottom">
                          <div class="package-right-bottom-left">
<div class="package-right-bottom-title">

IN THE WEEDS
</div>
 &middot;
<div class="package-right-bottom-sub">
Pineapple honey
</div>
                            
                          </div>
                          <div class="package-right-bottom-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate adipisci, unde fugit soluta, sint facili.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab>
     <tab
              title="Mary Jane's Cosmetics"
              class="tabclass tabHeader-2"
              v-scrollfadinganimation
            >
              <div class="package-content">
                <div class="outer-wrapper-package">
                  <div class="wrapper-package">
                    <div class="tabcontent">
                      <div class="package-right-div">
                        <div class="package-right-top">
                          <div class="small-outer-wrapper-content">
                            <div class="small-wrapper-content">
                              
                               <div class="packimg">
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[6].img7}`)
                                "
                                alt=""
                              />
                               </div>
                                   <div class="col-placeholder-xs"></div>
                               <div class="packimg">
                              <img
                                v-bind:src="
                                  require(`../../../assets/img/pack/${getArray[7].img8}`)
                                "
                                alt=""
                              />
                               </div>
                            </div>
                          </div>
                        </div>

                        <div class="package-right-bottom">
                          <div class="package-right-bottom-left">
<div class="package-right-bottom-title">
Mary Jane's Cosmetics
</div>
 &middot;
<div class="package-right-bottom-sub">
Pineapple honey
</div>
                            
                          </div>
                          <div class="package-right-bottom-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate adipisci, unde fugit soluta, sint facili.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab>
          </tabs>
        </div>
        <div class="col-vert"></div>
      </div>

      <!-- col - package left -->
      <!-- <div class="col-package-left">
          <div class="section-content">
            <div class="topSection hideOverflow"></div>
            <div class="middleSection hideOverflow">
              <div class="">
                <div class="hideOverflow packageLeftMenuDiv">
                  <div class="package-menu-sigle menuText2">
                    
                    <tab
                      title="Color pallette"
                      class=""
                      v-scrollfadinganimation
                    >
                      <div class="tabcontent">tab content</div>
                    </tab>
                    <tab
                      title="Color pallette2"
                      class=""
                      v-scrollfadinganimation
                    >
                      <div class="tabcontent">tab content2</div>
                    </tab>
                    <div class="divTwo div beautyText pacage-hover">
                      &middot; honey pot &middot;
                    </div>
                    <div class="package-sub-div">
                      <div class="package-sub-text pacage-hover">pineapple</div>
                      <div class="package-sub-text pacage-hover">pineapple</div>
                      <div class="package-sub-text pacage-hover">pineapple</div>
                    </div>
                  </div>

                  <div class="package-menu-sigle menuText2">
                    <div class="divTwo div beautyText pacage-hover">
                      &middot; honey pot &middot;
                    </div>
                    <div class="package-sub-div">
                      <div class="package-sub-text pacage-hover">pineapple</div>
                      <div class="package-sub-text pacage-hover">pineapple</div>
                      <div class="package-sub-text pacage-hover">pineapple</div>
                    </div>
                  </div>
                  <div class="package-menu-sigle menuText2">
                    <div class="divTwo div beautyText pacage-hover">
                      &middot; honey pot &middot;
                    </div>
                    <div class="package-sub-div">
                      <div class="package-sub-text pacage-hover">pineapple</div>
                      <div class="package-sub-text pacage-hover">pineapple</div>
                      <div class="package-sub-text pacage-hover">pineapple</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottomSection hideOverflow"></div>
          </div>
        </div> -->
      <!-- col - package right -->
      <!-- <div class="col-package-right">
          <div class="section-content">
            <div class="topSection hideOverflow"></div>
            <div class="middleSection hideOverflow">
              <div class="package-right-div">
                <div class="package-right-top">
                  <img
                    v-bind:src="
                      require(`../assets/images/pack/${getArray[0].img1}`)
                    "
                    alt=""
                  />
                </div>
                <div class="package-right-bottom">
                  <div class="package-right-bottom-left">
                    {{ packArray }} \\
                    {{ getArray[0].img1 }}
                  </div>
                  <div class="package-right-bottom-right"></div>
                </div>
              </div>
            </div>
            <div class="bottomSection hideOverflow"></div>
          </div>
        </div> -->

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
    </div>
  </div>
</template>
<script>
import packArray from "../../../store/pack";
import Tab from "../../layout/Tab-doce";
import Tabs from "../../layout/Tabs-doce.vue";

export default {
  components: {
    Tab,
    Tabs,
  },
  data() {
    return {
      packArray: packArray,
    };
  },
  computed: {
    getArray() {
      return this.$store.getters.packs;
    },
  },
};
</script>
<style >
.package-right-bottom-title {
    font-family: 'Montserrat';
    font-weight: 200;
    letter-spacing: 1.5px;
}
.package-right-bottom-sub {
    font-family: 'baskerville-poster-pt';
    text-transform: lowercase;
    font-style: italic;
    letter-spacing: .6px;
}
.package-right-bottom-left {
    border-right: 2px solid #303030;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 30px 5px;
}
.package-right-bottom-right {
    padding: 30px 20px;
    display: flex;
    align-items: flex-end;
    font-family: 'baskerville-poster-pt';
    line-height: 1.2;
}
.packimg {
    width: 80vw;
        overflow: hidden;
}
.col-placeholder-xs {
  height: 64vh;
  width: 8vw;
      /* max-height: 79vh; */

    background: #252525;

}
.small-wrapper-content {
  display: flex;
  flex-direction: row;
  width: 405vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  color: white;
      background: #252525;
}
.small-outer-wrapper-content {
    width: 100vh;
    height: 59vw;
    transform: rotate( 
-90deg
 ) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
}
.outer-wrapper-package {
       width: 58.5vw;
    height: 80vh;
    /* transform: rotate( 
-90deg
 ) translateX(-100vh); */
    /* transform-origin: top left; */
    /* overflow-y: scroll; */
    /* overflow-x: hidden; */
    position: absolute;
    border-left: 3px solid #303030;
    overflow: hidden;
}
.wrapper-package {
  display: flex;
  flex-direction: row;

  color: white;
  height: 100%;
  width: 100%;
}
.col-vert-top {
  border-top: 1px solid #303030;
  height: 9.8vh !important;
}
.col-vert-container {
  background: #252525;
  height: 100%;
}
.col-vert {
  height: 10vh;
  /* border-top: 1px solid #303030; */
  /* outline: 0px solid #303030; */
  /* border-bottom: 1px solid #303030; */
  border-left: 1px solid #303030;
  border-right: 1px solid #303030;
}
.col-vert {
}
.pack-container {
  height: 79.7vh;
  border: 2px solid #303030;
  border-left: 1px solid #303030;
  border-right: 1px solid #303030;
}
.pack-container-div {
  display: flex;
  /* grid-template-columns: 30%; */
  /* grid-template-rows: 81%; */
  width: 84vw;
  flex-direction: row;
  height: 100%;
}

/* package right content */
.package-right-div {
  display: grid;
  height: 100%;
  grid-template-rows: 80% 20%;
}

.package-right-bottom {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  border-top: 2px solid #303030;
}
.package-right-bottom-left {
  border-right: 2px solid #303030;
      display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 30px 5px;
}
/* package left content */
.packageLeftMenuDiv {
  padding-top: 10%;
}
/* package left text */
.pacage-hover {
  transition: all 0.5s;
}
.pacage-hover:hover {
  transform: translateY(-4px);
}
.package-sub-div {
  padding: 20px 20px 0px 20px;
}
.package-sub-text {
  font-size: 0.85rem;
  font-family: "baskerville-poster-pt";
  font-style: italic;
  letter-spacing: 2px;
  padding: 4px 0px 0px;
  text-transform: lowercase;
  color: white !important;
  transition: all 0.5s 0s;
  cursor: pointer;
  text-align: center;
}
</style>