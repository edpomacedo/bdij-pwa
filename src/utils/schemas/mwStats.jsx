// mwStats.jsx
const mwStats = (statistics) => [
  { id: 1, name: "Entidades mapeadas", value: statistics?.pages || "N/A" },
  { id: 2, name: "Registros efetuados", value: statistics?.edits || "N/A" },
  {
    id: 3,
    name: "Palavras indexadas",
    value: statistics?.["cirrussearch-article-words"] || "N/A",
  },
];

export default mwStats;