<template>
    <div class="home">
        
        <div class="box box1" v-show="type==1" @click="giveCard(1)" >

        </div>
        <div class="box box2"  v-show="type==2" @click="giveCard(2)">

        </div>
        <div class="box box3" v-show="type==3" @click="giveCard(3)">

        </div>
        <div class="box box4" v-show="type==4" @click="giveCard(4)">

        </div>
        <div @click="type=type-0+1;giveCard(type)">anniu</div>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: '123',
            type: 0,
        }
    },
    methods:{
        giveCard(type){
            this.$router.replace({
                path: '/home',
                query: {
                    type: type
                }
            })
        }
    },
    created(){
        this.type = this.$route.query.type
    }
}
</script>
<style  lang="scss" scoped>
.home {
    display: flex;
    justify-content: space-between;
}
.box {
    width: 50px;
    height: 50px;
}
.box1 {
    background-color: black;

}
.box2 {
    background-color: red;

}
.box3 {
    background-color: green;

}
.box4 {
    background-color: yellow;

}
</style>
