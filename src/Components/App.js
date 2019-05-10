import React, { useState } from 'react';
import Carousel from './Carousel'
import './app.css'
import Button from './Button';
import imagesURLS from '../data/imagesURLS'

class App extends React.Component {
    componentDidMount() {
        this.setState({
            bullets: imagesURLS.map((element, index) => {
                const cl = index === 0 ? "bullet bullet-selected" : "bullet"
                return < a className={cl} ref={this.setInputRef}></a>;


            })
        });
    }
    state = {
        currentImage: 0, leftArrowClicked: false,
        rightArrowClicked: false, bullets: []
    };
    inputs = [];

    leftArrowHandler = () => {
        this.state.currentImage > 0 ? this.setState({ currentImage: --this.state.currentImage })
            : clearInterval(this.autoLeftTimer);
        this.inputs[this.state.currentImage].style.boxShadow = "inset 0 0 0 2px #12171b";
        this.inputs[this.state.currentImage].style.backgroundColor = "#0072bc";
        this.inputs[this.state.currentImage + 1].style.boxShadow = "inset 0 0 0 2px white";
        this.inputs[this.state.currentImage + 1].style.backgroundColor = "white";

    }
    rightArrowHandler = () => {
        console.log(this.state.currentImage)
        this.state.currentImage < imagesURLS.length - 1 ? this.setState({ currentImage: ++this.state.currentImage })
            : clearInterval(this.autoRightTimer);
        this.inputs[this.state.currentImage].style.boxShadow = "inset 0 0 0 2px #12171b";
        this.inputs[this.state.currentImage].style.backgroundColor = "#0072bc";
        this.inputs[this.state.currentImage - 1].style.boxShadow = "inset 0 0 0 2px white";
        this.inputs[this.state.currentImage - 1].style.backgroundColor = "white";


    }

    autoRightSlide = () => {
        if (this.autoLeftTimer) {
            clearInterval(this.autoLeftTimer)
        }
        this.autoRightTimer = setInterval(this.rightArrowHandler, 1000)
    };

    autoLeftSlide = () => {
        if (this.autoRightTimer) {
            clearInterval(this.autoRightTimer)
        }
        this.autoLeftTimer = setInterval(this.leftArrowHandler, 1000)
    };
    stopAutoSlide = () => {
        clearInterval(this.autoLeftTimer)
        clearInterval(this.autoRightTimer)
    };
    setInputRef = (input) => {
        this.inputs.push(input);
    };
    render() {
        return (
            <section>
                <div id="carousel" class="carousel">
                    <div class="carousel__arrows-container">
                        <a id="js-left-arrow" onClick={this.leftArrowHandler} class="arrows-container__left-arrow">&#10094;</a>
                        <a id="js-right-arrow" onClick={this.rightArrowHandler} class="arrows-container__right-arrow">&#10095;</a>
                    </div>
                    <Carousel imageSrc={imagesURLS[this.state.currentImage]} />

                </div>
                <div id="js-bullet-container" class="bullet-container">
                    {
                        this.state.bullets
                    }
                </div>
                <div className="btn-container">
                    <Button onClick={this.autoLeftSlide}
                        className="btn" title="Auto backward" />
                    <Button onClick={this.stopAutoSlide}
                        className="btn" title="Stop" />
                    <Button onClick={this.autoRightSlide}
                        className="btn" title="Auto Forward" />
                </div>
            </section>
        );
    }
};




export default App;