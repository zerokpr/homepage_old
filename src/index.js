import React from 'react';
import ReactDOM from 'react-dom';
import {TopPage} from './toppage.js';
import {AboutPage} from './aboutpage.js';
import {LinkPage} from './linkpage.js';
import {SkillPage} from './skillpage.js';
import {ContactPage} from './contactpage.js';
import './css/index.css';

class Logo extends React.Component {
    render() {
        return (
            <div class="logo">
                <a>Corbeau's display</a>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div class="header">
                <Logo />
                <MenuBar
                    onClick={this.props.onClick}
                    nowPage={this.props.nowPage}
                    pageList={this.props.pageList}
                />
            </div>
        );
    }
}

class MenubarButton extends React.Component{
    render(){
        return (
            <button
                class={this.props.isSelected ? "SelectedButton" : "NotSelectedButton"}
                onClick={() => this.props.onClick(this.props.pageTitle)}
            >
            {this.props.pageTitle}
            </button>
        );
    }
}

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderButton = this.renderButton.bind(this);
    }
    renderButton(pageTitle){
        return (
            <MenubarButton
                pageTitle={pageTitle}
                onClick={this.props.onClick}
                isSelected={this.props.nowPage===pageTitle}
            />
        );
    }
    render(){
        return (
            <div class="menubar">
                {this.props.pageList.map(this.renderButton)}
            </div>
        );
    }
}

class Contents extends React.Component {
    renderContent(){
        switch(this.props.page){
            case "Top":
                return (<TopPage />);
            case "About":
                return (<AboutPage />);
            case "Link":
                return (<LinkPage />);
            case "Skill":
                return (<SkillPage />);
            case "Contact":
                return (<ContactPage />);   
        }
    }
    render(){
        return (
            <div class="content">
                {this.renderContent()}
            </div>
        );
    }
}

class MyPage extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
            pageTitle : "Top",
            pageList : ["Top", "About", "Link", "Skill", "Contact"],
        };
    }

    handleClick(page){
        if (page === this.state.pageTitle) {
            return ;
        }
        this.setState({
            pageTitle : page,
        });
    }
    
    render(){
        return (
            <div class = "page">
                <Header
                    onClick={(page) => this.handleClick(page)}
                    nowPage={this.state.pageTitle}
                    pageList={this.state.pageList}
                />
                <Contents page={this.state.pageTitle}/>
            </div>
        );
    }
}

ReactDOM.render(
    <MyPage />,
    document.getElementById('root')
);