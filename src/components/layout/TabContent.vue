<template lang="html">
  <div class="content-upper-container">
    <tabs>
      <tab title="Color pallette" class='callpallette'>
        <div class="color-array-div">
          <div class="color-title">Emerald Green</div>
          <div class="content-color-div">
            <div class="content-color-left">
              <div class="color-codes">
                <div class="">HEX : 54487</div>
                <div class="">RGBA : 54 87 24 1</div>
                <div class="">HSA : 7% 22% 4% 0%</div>
              </div>
            </div>
            <div class="content-color-right">
              <div class="content-color-colors-1"></div>
            </div>
          </div>
        </div>
        <div class="color-array-div">
          <div class="color-title">Emerald Green</div>
          <div class="content-color-div">
            <div class="content-color-left">
              <div class="color-codes">
                <div class="">HEX : 54487</div>
                <div class="">RGBA : 54 87 24 1</div>
                <div class="">HSA : 7% 22% 4% 0%</div>
              </div>
            </div>
            <div class="content-color-right">
              <div class="content-color-colors-1"></div>
            </div>
          </div>
        </div>
        <div class="color-array-div">
          <div class="color-title">Emerald Green</div>
          <div class="content-color-div">
            <div class="content-color-left">
              <div class="color-codes">
                <div class="">HEX : 54487</div>
                <div class="">RGBA : 54 87 24 1</div>
                <div class="">HSA : 7% 22% 4% 0%</div>
              </div>
            </div>
            <div class="content-color-right">
              <div class="content-color-colors-1"></div>
            </div>
          </div>
        </div>
        <div class="color-array-div">
          <div class="color-title">Emerald Green</div>
          <div class="content-color-div">
            <div class="content-color-left">
              <div class="color-codes">
                <div class="">HEX : 54487</div>
                <div class="">RGBA : 54 87 24 1</div>
                <div class="">HSA : 7% 22% 4% 0%</div>
              </div>
            </div>
            <div class="content-color-right">
              <div class="content-color-colors-1"></div>
            </div>
          </div>
        </div>
        <div class="color-array-div">
          <div class="color-title">Emerald Green</div>
          <div class="content-color-div">
            <div class="content-color-left">
              <div class="color-codes">
                <div class="">HEX : 54487</div>
                <div class="">RGBA : 54 87 24 1</div>
                <div class="">HSA : 7% 22% 4% 0%</div>
              </div>
            </div>
            <div class="content-color-right">
              <div class="content-color-colors-1"></div>
            </div>
          </div>
        </div>
        <div class="color-array-div">
          <div class="color-title">Emerald Green</div>
          <div class="content-color-div">
            <div class="content-color-left">
              <div class="color-codes">
                <div class="">HEX : 54487</div>
                <div class="">RGBA : 54 87 24 1</div>
                <div class="">HSA : 7% 22% 4% 0%</div>
              </div>
            </div>
            <div class="content-color-right">
              <div class="content-color-colors-1"></div>
            </div>
          </div>
        </div>
      </tab>
      <tab  class="type-container" title="Typography" style="text-transformation: lowercase"
        >
        <div class="type-info-div">  
          <div class="type-info-title">NAME OF MANE</div>
           <div class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eum est recusandae impedit maiores nesciunt eveniet modi aut rerum? Blanditiis architecto officia quae. Blanditiis sequi aut fugiat qui nulla animi!</div>
     </div>
         <div class="text-example-div"> 
           <div class="abText">Aa</div>
        <div class="aphlaText">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijlmnopqrstvuwxyz `~!@#$%^?,./:"{}[]*()_+-=
        </div></div>
      
       
      
        </tab
      >
      <tab title="Logo">Hello From Tab 3</tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
  },
};
</script>
<style>
.callpallette {
  overflow: scroll;
  margin-top: 80px;
}
.color-title {
  font-family: proxima-nova, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 0.9rem;
}
.type-info-title {
  margin-bottom: auto;
}
.type-info-div {
  display: flex;
  flex-direction: column;
}
.type-container {
  display: flex;
}
.text-example-div {
  margin-left: 44px;
}
.abText {
  font-size: 66px;
  letter-spacing: 4px;
}
.aphlaText {
}
.content-upper-container {
  font-family: proxima-nova, sans-serif;
  /* text-transform: uppercase; */
  font-weight: 100;
  letter-spacing: 1px;
}
.content-ui-div {
  display: flex;
  justify-content: space-around;
}

.content-color-colors-1 {
  height: 100%;
  width: 60px;
}
.content-color-div {
  display: flex;
  margin: 10px 0px;
  width: 500px;
  justify-content: space-between;
}
.tabs__selected {
    color: white;
}
.tabs__header {
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-family: proxima-nova, sans-serif;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: #ffffff73;
  /* font-family: baskerville-poster-pt, serif;
     text-transform: lowercase;
        font-style: italic; */
}
</style>
