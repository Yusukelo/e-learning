<template>
    <div class="forYou">
        <div class="you-ttl-wrap">
            <h3 class="you-ttl">あなたの本日の講義</h3>
        </div>
        <div class="classMov-wrap flex">
            <div class="classMov" v-on:click="showDetailClicked">
                <div class="sumbnail-wrap"><img src="~/assets/img/classMov.png" alt="" class="sumbnail"></div>
                <div class="class-wrap">
                    <h3 class="class-name">ClassName</h3>
                    <p>Teacher: name</p>
                    <p>00月00日　0曜・1限　第00回</p>
                </div>
            </div>
            <div class="classMov" v-on:click="showDetailClicked">
                <div class="sumbnail-wrap"><img src="~/assets/img/classMov.png" alt="" class="sumbnail"></div>
                <div class="class-wrap">
                    <h3 class="class-name">ClassName</h3>
                    <p>Teacher: name</p>
                    <p>00月00日　0曜・2限　第00回</p>
                </div>
            </div>
            <div class="classMov" v-on:click="showDetailClicked">
                <div class="sumbnail-wrap"><img src="~/assets/img/classMov.png" alt="" class="sumbnail"></div>
                <div class="class-wrap">
                    <h3 class="class-name">ClassName</h3>
                    <p>Teacher: name</p>
                    <p>00月00日　0曜・3限　第00回</p>
                </div>
            </div>
            <div class="classMov" v-on:click="showDetailClicked">
                <div class="sumbnail-wrap"><img src="~/assets/img/classMov.png" alt="" class="sumbnail"></div>
                <div class="class-wrap">
                    <h3 class="class-name">ClassName</h3>
                    <p>Teacher: name</p>
                    <p>00月00日　0曜・4限　第00回</p>
                </div>
            </div>
            <div class="classMov" v-on:click="showDetailClicked">
                <div class="sumbnail-wrap"><img src="~/assets/img/classMov.png" alt="" class="sumbnail"></div>
                <div class="class-wrap">
                    <h3 class="class-name">ClassName</h3>
                    <p>Teacher: name</p>
                    <p>00月00日　0曜・5限　第00回</p>
                </div>
            </div>
            <div class="classMov" v-on:click="showDetailClicked">
                <div class="sumbnail-wrap"><img src="~/assets/img/classMov.png" alt="" class="sumbnail"></div>
                <div class="class-wrap">
                    <h3 class="class-name">ClassName</h3>
                    <p>Teacher: name</p>
                    <p>00月00日　0曜・6限　第00回</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    },
    methods: {
        showDetailClicked: function () {
            this.$emit('showDetail')
        }
    }
}
</script>

<style scoped>

.forYou {
    margin-top:30px;
}
.you-ttl {
    
    font-weight: 600;
}
.classMov-wrap {
    padding:10px;
    flex-wrap: wrap;
    justify-content: space-around;
    cursor: pointer;
}

.classMov {
    width:30%;
}

.class-wrap {
    padding:12px 10px;
}
.class-wrap p {
    line-height: 1.5;
}
.class-name {
    margin-bottom: 4px;

}

.sumbnail {
    width:100%;
}


</style>