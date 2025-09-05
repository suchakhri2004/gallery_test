"use client";

import "./gallery.scss";
import { useState, useEffect } from "react";
import { mockImages } from "@/lib/mockData";

export default function Gallery() {
  const [visible, setVisible] = useState(12);
  const [filter, setFilter] = useState<string | null>(null);

  const images = filter
    ? mockImages.filter((img) => img.tags.includes(filter))
    : mockImages;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setVisible((prev) => prev + 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="gallery">
        {images.slice(0, visible).map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.url}/>
            <div className="tags">
              {img.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag"
                  onClick={() => setFilter(filter === tag ? null : tag)}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {filter && (
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <button className="tag" onClick={() => setFilter(null)}>
            Clear Filter
          </button>
        </div>
      )}
    </>
  );
}
