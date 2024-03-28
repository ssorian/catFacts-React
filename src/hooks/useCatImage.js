import { useEffect, useState } from "react";

const CAT_PREFIX_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const treeFirstWords = fact.split(" ", 1);

    fetch(`https://cataas.com/cat?json=true`)
      .then((res) => res.json())
      .then(() => {
        const url = `/cat/gif/says/${treeFirstWords}?fontColor=orange&fontSize=30`;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` };
}
