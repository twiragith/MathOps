<template>
  <div class="text-center">
    <circular-count-down-timer
        :initial-value="5"
        :stroke-width="5"
        :seconds-stroke-color="'#f00'"
        :minutes-stroke-color="'#0ff'"
        :hours-stroke-color="'#0f0'"
        :underneath-stroke-color="'lightgrey'"
        :seconds-fill-color="'#00ffff66'"
        :minutes-fill-color="'#00ff0066'"
        :hours-fill-color="'#ff000066'"
        :size="150"
        :padding="40"
        :hour-label="'hours'"
        :minute-label="'minutes'"
        :second-label="'seconds'"
        :show-second="true"
        :show-minute="true"
        :show-hour="false"
        :show-negatives="false"
        :paused=null
        :notify-every="'minute'"
        @finish="finished"
        @update="updated"
></circular-count-down-timer>

  </div>
</template>

<script>
export default {
  methods: {
    finished: () => {
        console.log('finished');
    },
    updated: (status) => {
        console.log(status);    //{"value": 144, "seconds": 24, "minutes": 2, "hours": 0}
    }
  },
    
}
</script>