import Link from "next/link";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../styles/Layout.module.css";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export default function Layout({ children }) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
  });

  const [interval, setIntervalId] = useState(null);
  const [content, setContent] = useState(null); // Contentful에서 가져온 정보를 저장할 상태 변수

  useEffect(() => {
    if (sliderRef.current) {
      const intervalId = setInterval(() => {
        sliderRef.current.next();
      }, 5000);
      setIntervalId(intervalId);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [sliderRef]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await client.getEntries();
        setContent(res.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className="layout">
      <header>
        <Link href="/">
          <div>
            <h2>
              <span>initiative 로고</span>
            </h2>
          </div>
        </Link>
        <Navbar />
      </header>
  
      <div className="page-content">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="slide 1"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://source.unsplash.com/random/800x601"
              alt="slide 2"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://source.unsplash.com/random/800x602"
              alt="slide 3"
            />
          </div>
        </div>
  
        {/* Contentful에서 가져온 정보를 이용해 페이지 내용 출력 */}
        {content && content.map((item) => <p key={item.sys.id}>{item.fields.title}</p>)}
      </div>
      <footer>
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
  
}
