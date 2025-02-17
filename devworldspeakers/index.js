import fetch from 'node-fetch';

let speakers = null;

async function fetchUrlsArray(arr) {
    const responses = await Promise.all(arr.map(async (url) => await fetch(url)));
    const jsonResponses = await Promise.all(responses.map(response => response.json()));
    return jsonResponses;
}

const data = fetchUrlsArray([
	'https://devworldconference.com/api/page?eventId=5&path=/tracks/future-of-AI',
	'https://devworldconference.com/api/page?eventId=5&path=/tracks/engineering-managers',
	// 'https://devworldconference.com/api/page?eventId=5&path=/tracks/product-managers',
	'https://devworldconference.com/api/page?eventId=5&path=/tracks/devops-and-cloud',
	'https://devworldconference.com/api/page?eventId=5&path=/javascript-world',
	'https://devworldconference.com/api/page?eventId=5&path=/tracks/j-world',
    'https://devworldconference.com/api/page?eventId=5&path=/tracks/web3',
    
])

async function getSpeakers() {
    if(speakers) {
        return speakers;
    }
    const data = await fetch('https://devworldconference.com/api/page?eventId=5&path=/speakers');
    const speakersData = await data.json();
    speakers = speakersData.mainArea.find(item => item.component === 'ComponentNewSpeakerCardList').config.speakers
}

// console.log(await getSpeakers());

data.then((res) => {
    const list = res.map(page => page.mainArea.find(item => item.component === 'ComponentPageSpeakerCards')?.config?.people);
    const [futureOfAi, engineeringManagers, devOps, javascript, backend, web3] = list;
    const allSpeakers = list.flat();
    console.log(`Future of AI: ${futureOfAi?.length}`);
    console.log(`Engineering Managers: ${engineeringManagers?.length}`);
    console.log(`DevOps: ${devOps?.length}`);
    console.log(`JavaScript: ${javascript?.length}`);
    console.log(`Backend: ${backend?.length}`);
    console.log(`Web3: ${web3?.length}`);
    console.log('Total: ', (futureOfAi?.length ?? 0) + (engineeringManagers?.length ?? 0) + (devOps?.length ?? 0) + (javascript?.length ?? 0) + (backend?.length ?? 0) + (web3?.length ?? 0));


    const uniqueSpeakersCount = new Set(allSpeakers.map(speaker => speaker?.id)).size;
    console.log(`All Speakers: ${uniqueSpeakersCount}`);
});