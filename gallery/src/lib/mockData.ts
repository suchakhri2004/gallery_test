const allTags = ["fullstack", "frontend", "backend"];

export const mockImages = Array.from({ length: 60 }).map((_, i) => {
  const tagCount = Math.floor(Math.random() * 3) + 1;

  const tags = allTags.slice(0, tagCount);

  return {
    id: i,
    url: `https://placehold.co/${300 + (i % 5) * 40}x${200 + (i % 4) * 50}`,
    tags,
  };
});
