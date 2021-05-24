<template>
    <div>
    <ul class='tabs-header'>
    <li v-for='(tab, index) in tabs' :key='tab.title' @click='selectTab(index)'
     :class='{"tabs-selected": (index == selectedIndex)}'>
        {{ tab.title }}
</li>
    </ul>

      <slot></slot>

    
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [],        // all of the tabs
    }
  },
  created () {
    this.tabs = this.$children
},
mounted () {
    this.selectTab(0)
},
methods: {
    selectTab (i) {
      this.selectedIndex = i
      
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
 }
}
</script>
<style >
ul.tabs-header li {
  color: #b7b7b7;
  transition: all .5s;
  padding-left: 50px;
}
ul.tabs-header li:hover {
  color: white;
  font-size: .92rem;
  letter-spacing: 2.2px;
}
.tabs-selected {
  color: white !important;
}
.tabs-header {
   width: 30% !important;
  display: flex;
  justify-content: space-between;
  font-family: proxima-nova, sans-serif;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 0.9rem;
     flex-direction: column;
    height: 50%;
    padding-top: 60px;
}
.tabs-header:hover {
  color: gold;
}
</style>