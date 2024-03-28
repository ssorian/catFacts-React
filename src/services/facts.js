const CAT_FACT_API = "https://catfact.ninja/fact";

export const getRandomCatFact = async () => {
  const res = await fetch(CAT_FACT_API);
  const data = await res.json();

  const { fact } = data;

  return fact;
};
