

<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>

export default {};
</script>

<style>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}


body {
  line-height: 1;
  background: #fff;
  color: #000;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.flex {
  display: flex;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* my style */
.page {
  max-width: 1540px;
  margin: 0 auto;
}
.chat {
  width: 200px;
}
.main {
  flex: 1;
}
.nav {
  width: 100%;
  max-width: 1020px;
  top: 0%;
}
.myPage {
  overflow-y: scroll;
  height: calc(100vh - 58px);
}

.sideBar {
  overflow-y: scroll;
  height: 100vh;
}

.blk-curtain {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  z-index: 0;
}
</style>
