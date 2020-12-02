<template>
  <div class="container">
    <div>
      <h1>学生のためのe-learning</h1>
      <p class="name">小林 祐介</p>
      <h2>コンセプト</h2>
      <p>『毎日web講義を使う学生にとって、使いやすい』　『必要な情報が揃っている』</p>
    </div>
    <div class="item">
      <h2>背景・動機</h2>
      <p>コロナウイルス流行後、多くの大学で対面講義からオンライン講義にシフトしました。私の通う大学においても例外ではありませんでした。大学は早急にオンライン講義の体勢を用意したのですが、とにかく使いづらいと感じたのが私がこれを作成した動機です。<br>

          授業を探すのに、全てリスト形式の中からタイトルを見つけなければならない。<br>
          授業を見るまでに、ページを幾つもまたぐ必要があり、動画を見る際も外部リンクで別ページに移動する。<br>
          動画再生途中で、ブラウザを閉じてしまうと動画視聴時間が0分と記載され授業を受けたとみなされない。<br>
          このような問題を解決することで、学生の学習をスムーズにサポートし、学習の質を向上できると考えています。
          ここでは、特にフロントエンド,UI/UXに重きをおき構成、機能を考えています。
      </p>
    </div>
    <div class="item">
      <h2>構成</h2>
        <ul>
            <li>フレームワーク:Nuxt</li>
            <li>Nuxt Modules: PWA,Axios </li>
        </ul>
        <h3>Nuxt</h3>
        <p>コンポーネント指向型のwebアプリフレームワークであり、フロントにはVue.jsをバックにはNode.jsを採用している。</p>
        <p>同時のリクエスト処理に強い・MVCでの分担した作業が可能で複数人でのプロジェクト管理がしやすい・SEO向上などのメリットがある。</p>
        <p>*MVC: M(model),V(View),C(controler)。Mは、DBとのデータのやりとりなど。Vは、フロント全般、Cは、リクエストと処理の紐付け。
        </p>
        <h3>Atomicデザイン・コンポーネント</h3>
        <p>ボタンなどの最小要素をAtom(原子)とみなし、原子(button)→分子(divなどの要素)→細胞(component)→組織(layout)→器官(page)→体(webページ全体)と考えます。</p>
        <p>小さい構成物の使い回しが効くなどのメリットがある。</p>
      <p>コードの保守性を高める他、SideBarなどのコンテンツをユーザーが自由にカスタマイズ出来る。非同期コンポーネントの利用。必要な時に必要な分だけ読み込む</p>
      <h3>PWA</h3>
      <p>
        近年、googleが推奨してきたPWAは各種ブラウザの対応によりTwitter、Instagramなど多くのアプリケーションで実装が進んでいる。
      </p>
      <p>
        毎日使用することが想定されるため、パフォーマンス、UI/UXの向上を見込み採用した。
      </p>
      <p>
        特にスマホ・タブレットユーザーをターゲットとしスマホ・タブレットを使うユーザーに対してホーム画面に追加しアプリのように使えることを助長する。
      </p>
      <p>
          pwaの機能:オフラインキャッシュ、プッシュ通知、NativeAppのように振舞う(全画面表示・スプラッシュ画面設定)...<br>
          メリット：ページの読み込み時間削減、PV増加<br>
          デメリット：ブラウザ制限(PWA化はできないが、ブラウザから使用は可能)・現在IOS14でキーボードが出現しないバグ発生<br>
          Android: Chrome, Firefox, Sumsung Internet, UC, Edge, Opera, Brave, Baidu<br>
          IOS: only useing Safari from11.1+<br>
          windows: Chrome70+, Microsoft Edge<br>
          macOS: Chrome 73+, Edge
      </p>
      
    </div>
    <div class="item">
        <h2>機能</h2>
        <ul>
            <li>
                <h3>今日の授業表示機能</h3>
                <p>毎日ユーザーごとに、その日見る動画をピックアップし表示する。</p>
            </li>
            <li>
                <h3>タスク管理・共有機能(例:Chat Work)</h3>
                <p>ユーザーがタスクを作成し保存出来る。また、ユーザー、管理者がユーザーに対してタスクを与えることができる。タスクは、sidebarでも見れるようにする</p>
            </li>
            <li>
                <h3>健康診断機能</h3>
                <p>コロナ流行後、毎日の検温、アンケート提出を義務化する組織が増えている。ユーザーにとって、手間と思わせないようなUI/UXが求められる。ログイン後やsideBarからすぐに送信できるようにする。</p>
            </li>
            <li>
                <h3>(pdf保存機能)</h3>
                <p>ユーザーが、授業スライドなどを保存し管理できるようにする。FEとしての要素が薄いためここでは作成していません。</p>
            </li>
            <li>
                <h3>(チャット機能)</h3>
                <p>学生は、家にいることが多くなり友達同士のコミュニケーションが減っている。授業やテストを受けるまでの時間に学生同士でチャットが出来れば不安を拭える。また、先生や教務への質問にも対応できる。</p>
            </li>
        </ul>
    </div>
    <div class="item">
        <h2>UI/UX</h2>
        <h3>コンセプト『Twitter Like』</h3>
        <h3>初期画面で、情報のキャッチ</h3>
        <p>ユーザーが、ログイン後トップ画面で様々な情報を手に入れられるようにする。SideBarをカスタマイズ出来るようにすることによりユーザーが必要とする情報を手の届くところに置いておける。</p>
        <h3>一つの目的に対し、一つのページ</h3>
        <p>例えば、授業を探して見つけるまでの工程を１つのページで行えるようにする。そのために、授業詳細ページなどは、ページの上に１つ上のレイヤーをレンダリングすることで対処。</p>
        <h3>ユーザーがカスタマイズ可能</h3>
        <p>サイドバーの表示コンテンツの編集。</p>
        <p></p>
    </div>
    <div class="item">
        <h2>その他メモ(未実装)</h2>
        <h3>サムネイルの作成</h3>
        <p>S3などのクラウドストレージor動画投稿サイト→AWS Lambdaで変換する関数実行→S3などのクラウドストレージ</p>
        <h3>検索機能</h3>
        <p>ページ遷移はしない。上のレイヤーにレンダーする。"/search/{パラメータ}"　×で初期化。</p>
        <h3>時間の取得について</h3>
        <p>サーバー側:マシン内部の時間。　NTPサーバー？</p>
        <p>クライアント側:動画視聴やテスト実行時サーバーと連携。ブラウザの意図しない挙動に備える</p>
        <p>date-fns</p>

        <p>cookieはstoreから(js-cookie)</p>
        <p>VueX:複数のコンポーネント間で状態を共有。ログイン状態の保持、APIデータ保存。props,emitの変わり</p>
        <p>VueX: State:{id name loginTime} </p>

        <h3>LightHouse</h3>
        <p>キャッシュ機能実装</p>
        <p>Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption.</p>
    </div>
    <div class="back-btn">
        <nuxt-link to="/">アプリに戻る</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.container {
    width:980px;
    margin:0 auto;
    margin-bottom:100px;
}
h1 {
    font-size:180%;
    font-weight: bold;
    margin:4px 0 12px 0;
}
h2 {
    font-size:130%;
    font-weight: bold;
    margin:4px 0 12px 0;
}
h3 {
    font-size:110%;
    font-weight: bold;
    margin:4px 0 4px 0;
}

p {
    line-height: 1.4;
}
.item {
    margin-top:30px;
    width:100%;
}
.name {
    text-align: right;
}

.back-btn {
    position: fixed;
    bottom:5%;
    right: 5%;
}

</style>