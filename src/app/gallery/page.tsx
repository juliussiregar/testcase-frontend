"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';
import { images } from './images';

interface ImageData {
  src: string;
  type: 'portrait' | 'landscape';
}

export default function GalleryPage() {
  const [shuffledImages, setShuffledImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const portraitImages = images.filter(img => img.type === 'portrait');
    const landscapeImages = images.filter(img => img.type === 'landscape');

    const shuffledPortraits = portraitImages.sort(() => 0.5 - Math.random());
    let mergedImages: ImageData[] = [];
    let portraitIndex = 0;

    landscapeImages.forEach((image) => {
      if (portraitIndex < shuffledPortraits.length && Math.random() < 0.3) {
        mergedImages.push(shuffledPortraits[portraitIndex]);
        portraitIndex++;
      }
      mergedImages.push(image);
    });

    while (portraitIndex < shuffledPortraits.length) {
      mergedImages.push(shuffledPortraits[portraitIndex]);
      portraitIndex++;
    }

    setShuffledImages(mergedImages);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Galeri Gambar</h1>
      <div className={styles.grid}>
        {shuffledImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.imageWrapper} ${image.type === 'portrait' ? styles.portrait : styles.landscape}`}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
