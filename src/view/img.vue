<template>
<div>


    <img v-if='sensesData.results[index].photo' :src="sensesData.results[index].photo" alt="img">

</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            index: 0

        }
    },
    computed:{
      ...mapGetters(['sensesData'])
    },
    beforeRouteEnter(to, from, next) {
      // console.log(to.params);
        next(vm => {

            vm.index=Number(to.params.src)
        })
    },

    methods: {

        itemClick(data) {
            this.$router.push(`/detail/${data.id}`)
        }

    }
}
</script>

<style>

</style>
