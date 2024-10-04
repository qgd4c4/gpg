<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <td style="width: 20%">닉네임</td>
          <td style="width: 70%">플레이리스트</td>
          <td style="width: 10%">Likes</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center">사삼칠</td>
          <td style="padding-left: 10px">
            <a href="https://youtube.com/@437composer/playlists" target="_blank"
              >[사삼칠]의 플리</a
            >
          </td>
          <td style="text-align: center">❤️</td>
        </tr>
        <tr>
          <td style="text-align: center">Pianissimo</td>
          <td style="padding-left: 10px">
            <a
              href="https://youtube.com/playlist?list=PL6bQhXpiO6laSHR_Ax90Way9Ogu3yqtNV&si=BDJBWRQ16W8w77qQ"
              target="_blank"
              >[Pianissimo]의 플리</a
            >
          </td>
          <td style="text-align: center">❤️</td>
        </tr>
        <tr>
          <td style="text-align: center">피에그</td>
          <td style="padding-left: 10px">
            <a
              href="https://youtube.com/playlist?list=PLK4OyA4AGbc-ilvQ4drUVEHgnGu5H9Os9&si=p02nT15zVG-bLuAp"
              target="_blank"
              >[피에그]의 플리</a
            >
          </td>
          <td style="text-align: center">❤️</td>
        </tr>
        <tr>
          <td style="text-align: center">셀레기</td>
          <td style="padding-left: 10px">
            <a
              href="https://youtube.com/playlist?list=PLdT8AZTFB1qGpfLHnYGCQLpAQJXuuhbsQ&si=C-fSsHfSsWNMarlg"
              target="_blank"
              >[셀레기]의 플리</a
            >
          </td>
          <td style="text-align: center">❤️</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="footer">
    <code>Powered by GrandPiano_Gallery by NanEarny</code>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
:link,
:visited {
  color: black;
  text-decoration: none;
}
.container {
  position: relative;
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 12px;
  width: 400px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
}
table {
  width: 100%;
}
thead {
  text-align: center;
}
tbody > td {
  text-align: left;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer {
  position: fixed;
  left: 50%;
  translate: -50%;
  bottom: 10px;
  user-select: none;
}
</style>
