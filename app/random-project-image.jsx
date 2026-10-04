"use client";

import Image from "next/image";

export default function RandomProjectImage({ hrefs }) {
  function chooseRandomProject(event) {
    const href = hrefs[Math.floor(Math.random() * hrefs.length)];
    event.currentTarget.href = href;
  }

  return (
    <a
      className="hero-art-link"
      href={hrefs[0]}
      target="_blank"
      rel="noreferrer"
      onClick={chooseRandomProject}
      aria-label="Apri un progetto casuale in una nuova scheda"
    >
      <Image
        src="/dado.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 42vw, 280px"
      />
    </a>
  );
}
