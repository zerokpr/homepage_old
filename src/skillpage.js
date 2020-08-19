import React from "react";
import './css/skillpage.css';
import cpp_icon from './img/cpp_icon.png';
import c_icon from './img/c_icon.png'
import py_icon from './img/py_icon.png';
import html_icon from './img/html_icon.png';
import js_icon from './img/js_icon.png';

class LangBox extends React.Component {
    renderComment() {
        return (
            <div class="langbox-comment" id={this.props.langname + "-langbox-comment"}>
                {
                    this.props.comment.split("\n").map(
                        (comment) => (
                            <React.Fragment>{comment}<br /></React.Fragment>
                        )
                    )
                }
            </div>
        );
    }

    render() {
        return (
            <div class="langbox" id={this.props.langname+"-langbox"}>
                <img src={this.props.icon} class="lang-icon" id={this.props.langname + "-lang-icon"}/>
                <a class="lang-name" id={this.props.langname}>{this.props.langname}</a>
                {this.renderComment()}
            </div>
        );
    }
}

class CppLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"C++"}
                icon={cpp_icon}
                comment={"主に競技プログラミングに使っています。\nゲームの実装にもDxLibを利用しつつ使っています。"}
            />
        );
    }
}

class CLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"C"}
                icon={c_icon}
                comment={"大学の授業で使うことが多いです。\n最近だと画像処理のプログラムを書きました。\nC++があるのであまりCを使おうという気にはならないので、趣味では使いません。"}
            />
        )
    }
}


class PyLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"Python"}
                icon={py_icon}
                comment={"競技プログラミングでたまに使います。\n最近はDiscord botに興味が湧いて使っています。\n何かと便利な言語なのでもっと使えるようになりたい所です。"}
            />
        );
    }
}

class HtmlCssLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"HTML/CSS"}
                icon={html_icon}
                comment={"あまり使いません。一応使えるぐらいです。\n真面目に使ったのはこのページが初めてです。\nCSSのアイコンが見つからなくて悲しい気持ちになりました。"}
            />
        );
    }
}

class JSLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"JavaScript"}
                icon={js_icon}
                comment={"こちらもあまり使いません。Githubに涙ぐましい練習の跡があると思います。\n重要なので積極的に慣れていきたいところです。\nちなみにこのページはReactで作りました。"}
            />
        )
    }
}

export class SkillPage extends React.Component {
    render() {
        return (
            <div class="skillpage">
                <div class="skillpage-comment">
                    使用可能な言語一覧です。<br />
                    コードは大体Githubに載せてあります。<br />
                </div>
                <CppLangBox />
                <CLangBox />
                <PyLangBox />
                <HtmlCssLangBox />
                <JSLangBox />
            </div>
        );
    }
}