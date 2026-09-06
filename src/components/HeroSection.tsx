'use client';

import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const [displayText, setDisplayText] = useState("");
    const fullText = "안녕하세요 프론트엔드 개발자 홍현주입니다.";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i <= fullText.length) {
            setDisplayText(fullText.substring(0, i));
            i++;
          } else {
            clearInterval(typingInterval);
          }
        }, 100);
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <header className="hero">
            <div className="stars"></div>

            <div className="code-window">
                <div className="window-header">
                    <div className="action-buttons">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="file-tab">about_me.js</div>
                </div>

                <div className="code-body">
                <div className="line-numbers">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                    <div className="code-content">
                        <pre>
                        <code>
                            <span className="keyword">const</span>{" "}
                            <span className="variable">developer</span> = {"{"} <br />
                            &nbsp;&nbsp;name: <span className="string">'홍현주'</span>, <br />
                            &nbsp;&nbsp;role:{" "}
                            <span className="string">'Frontend Developer'</span>, <br />
                            &nbsp;&nbsp;focus:{" "}
                            <span className="string">'User Experience'</span> <br />
                            {"}"};
                        </code>
                        </pre>
                        <h2 className="typing-title">
                        {displayText}
                        <span className="cursor"></span>
                        </h2>
                        <p className="hero-subtitle">
                        안녕하세요 사용자가 오래 머무르고 싶은 웹사이트를 제작하는{" "}
                        <br /> 프론트엔드 개발자 홍현주입니다.
                        <br />
                        변화를 두려워하지 않고 끊임없이 학습하여 서비스의 완성도를 높일
                        수 있는 <br /> 개발자가 되고 싶습니다.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}