import React from 'react';
import './css/linkpage.css';
import github_icon from './img/github_icon.png';
import twitter_icon from './img/twitter_icon.png';
import atcoder_icon from './img/atcoder_icon.png';
import hatenablog_icon from './img/hatenablog_icon.png';

class IconLink extends React.Component {
    render() {
        return (
            <a href={this.props.url} class="iconlink"><img src={this.props.icon} /></a>
        );
    }
}

class IconLinkToGithub extends React.Component {
    render() {
        return (
            <IconLink pagename="github" url="https://github.com/zerokpr" icon={github_icon} />
        );
    }
}

class IconLinkToTwitter extends React.Component {
    render() {
        return (
            <IconLink pagename="twitter" url="https://twitter.com/zero_kpr" icon={twitter_icon} />
        );
    }
}

class IconLinkToAtCoder extends React.Component {
    render() {
        return (
            <IconLink pagename="AtCoder" url="https://atcoder.jp/users/zero_kpr" icon={atcoder_icon} />
        );
    }
}

class IconLinkToHatenaBlog extends React.Component {
    render() {
        return (
            <IconLink pagename="hatenablog" url="https://zero-kpr.hatenablog.com/" icon={hatenablog_icon} />
        );
    }
}

export class LinkPage extends React.Component {
    render() {
        return (
            <div class="linkpage">
                <div class="link_head">You can find me on these web-sites.</div>
                <ul class="icons">
                    <li><IconLinkToGithub /></li>
                    <li><IconLinkToTwitter /></li>
                    <li><IconLinkToHatenaBlog /></li>
                </ul>
            </div>
        );
    }
}