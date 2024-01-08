import fetch from 'node-fetch';

export async function getServerSideProps(context) {
 const res = await fetch('https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json');
 const data = await res.json();

 if (!data) {
  return {
    notFound: true,
  }
 }

 return {
  props: { data }, // will be passed to the page component as props
 }
}

export default function Home({ data }) {
 return (
  <div>
    <h1>Lista de Campeones</h1>
    <ul>
      {Object.keys(data.data).map((championKey) => (
        <li key={championKey}>{data.data[championKey].name}</li>
      ))}
    </ul>
  </div>
 )
}
