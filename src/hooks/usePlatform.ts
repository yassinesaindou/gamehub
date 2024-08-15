import usePlatforms from "./usePlatforms";

function usePlatform(id?: number) {
  // if (!id) return undefined;

  const { data: platforms } = usePlatforms();

  return platforms?.results.find((p) => p.id === id);
}

export default usePlatform;
