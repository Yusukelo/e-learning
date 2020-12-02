<template>
    <div>
        <h3>健康管理</h3>
        <div>
            <span>体温:</span><input type="number" aria-label="体温"><span>度</span>
        </div>
        <div>
            <span>健康状態</span>
            <p>
                <input type="radio" aria-label="good">良好
                <input type="radio" aria-label="bad">不良
            </p>
        </div>
        <div class="send__btn">
            <button>送信</button>
        </div>
    </div>
</template>

<style scoped>
.send__btn {
    text-align: right;
}

</style>