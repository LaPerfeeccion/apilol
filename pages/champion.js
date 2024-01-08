// pages/api/champion.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
 const response = await fetch('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json');
 const champions = await response.json();
 
 res.status(200).json({ champions });
}
