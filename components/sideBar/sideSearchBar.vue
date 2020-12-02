<template>
    <div class="search flex">
        <div class="border-input">
            <input type="text" class="search-input" placeholder="Search:授業名・講師名" aria-label="Search">
        </div>
    </div>
</template>

<style scoped>
.search {
    height: 56px;
    align-items: center;
}
.border-input {
    width: 100%;
    background: #edf2f7;
    border-radius: 9999px;
}
.search-input {
    font-size:90%;
    color:#2f495e;
    width: 100%;
    border: none;
    border-radius: 9999px;
    padding:10px 0;
}

</style>