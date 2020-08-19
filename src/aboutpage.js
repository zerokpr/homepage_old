import React from 'react';
import './css/aboutpage.css'
import my_icon from "./img/my_icon.jpg"

export class AboutPage extends React.Component {
    render(){
        return (
            <div class="aboutpage">
                <h1 class="abouttitle">About Me</h1>
                <img src={my_icon} class="my-icon"/>
                <div class="self-introduction">
                    こんにちは。私はこるぼーといいます。<br />
                    何とか大学非情報系学部情報系専攻3年です。<br />
                    プログラミング未経験で友人(@saba_kpr)に競プロを布教され、口車に乗せられるままに始めて早1年半、特に面白いものは作れていません（´・ω・｀）<br />
                    AtCoder水色、その他実績特になし。（かなしい）<br />
                    始めた当初は天才プログラマーになる予定だったはずですが、何やら雲行きが怪しくなってきました。やべーぞ！<br />
                    <br />
                    絶賛就活中です。
                    このまま留年などがなければ2022卒になる予定です。<br />
                    プログラミングに関わる分野なら基本何でも興味があります。<br />
                    とても真面目に働くので是非雇ってください。<br />
                    <br />
                    またアルバイトなども探しています。一人暮らしで金欠なので、良かったら雇ってください。<br />
                </div>
            </div>
        );
    }
}
