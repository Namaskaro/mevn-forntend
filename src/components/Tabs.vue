<template>
  <div class="container">
    <div class="tabs">
      <input type="radio" id="radio-1" name="tabs" checked />
      <label class="tab" for="radio-1">Upcoming</label>
      <input type="radio" id="radio-2" name="tabs" />
      <label class="tab" for="radio-2">Development</label>
      <input type="radio" id="radio-3" name="tabs" />
      <label class="tab" for="radio-3">Completed</label>
      <span class="glider"></span>
    </div>

    <!-- <Tab :tabs="tabs" :selectedTab="tabs[0]"> </Tab>
    <FirstTab /> -->
  </div>
</template>

<script>
import FirstTab from './TabsComponents/FirstTab'
import SecondTab from './TabsComponents/SecondTab'
import ThirdTab from './TabsComponents/ThirdTab'
import Tab from './Tab'
export default {
  components: {
    Tab,
    FirstTab,
    SecondTab,
    ThirdTab
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
:root {
  --primary-color: #185ee0;
  --secondary-color: #e6eef9;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
  padding: 0.75rem;
  border-radius: 99px; // just a high number to create pill effect
  * {
    z-index: 2;
  }
}

input[type='radio'] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px; // just a high number to create pill effect
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: #185ee0;
  transition: 0.15s ease-in;
}

input[type='radio'] {
  &:checked {
    & + label {
      color: #185ee0;
      & > .notification {
        background-color: #185ee0;
        color: #fff;
      }
    }
  }
}

input[id='radio-1'] {
  &:checked {
    & ~ .glider {
      transform: translateX(0);
    }
  }
}

input[id='radio-2'] {
  &:checked {
    & ~ .glider {
      transform: translateX(100%);
    }
  }
}

input[id='radio-3'] {
  &:checked {
    & ~ .glider {
      transform: translateX(200%);
    }
  }
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: #e6eef9;
  z-index: 1;
  border-radius: 99px; // just a high number to create pill effect
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}
</style>
