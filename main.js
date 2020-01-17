const politician = {
    name: 'Elizabeth Sanger',
    district: '37206 Nashville, Tennesee',
    platforms: {
        taxes: 'Low-taxes',
        jobs: 'more jobs',
        infrastructure: 'more bridges',
        healthcare: 'universal',
        'crimeAndEnforcement': 'pay police to protect'
    },
    website: 'www.ElizabethSanger.com',
    donationSite: 'www.ElizabethSanger.come/donate',
    calender: {
        upcomingEvents: {
            march05: 'Donation Gala',
            march06: 'Kiss Babies',
            march07: 'Pretzel Day',
            april11: 'debate'
        },
        meetAndGreets: {
            feb2: 'Pals at the Park',
            feb3: 'Taco Tuesday',
            feb4: 'Febuary Fourth Party'
        }
    }, volunteerList: [],
    biography: 'BLAH BLAH BLAH SENATE CONGRES STATE STUFF',
    images: {
        headshots: "src/img/headshot.jpeg",
        family: 'src/img/fam-photo.jpeg',
        constituents: 'src/img/constits.png'
    },
    missionStatement: 'I plan to help all who want it!',
    registerToVoteURL: 'www.votehere.come'

}

const volunteer = {
    name: 'Oliver Klosov',
    email: 'OK123@yahoo.com',
    address: '123 Road lane',
    phoneNumber: '(555)555-5555',
    availability: {
        febuary: ['2','4','6', '12'],
        march: ['2','3','4','5','17']
        },
    activities: ['planning', 'painting', 'partying']
    }
const newImage = "url-link to new image";


const logVolunteer = (objOne, objTwo) => {
    objTwo.volunteerList.push(objOne.name);
    console.log(objTwo.volunteerList)
}
logVolunteer(volunteer, politician);

const addPlatform = (topic, platform) => {
    politician.platforms[topic] = platform;
}
const changeBio = (bio) => {
    politician.biography = bio;
    console.log(politician.biography)
}
const newPlatform = "public transit";
addPlatform('transit', newPlatform);
console.log(politician.platforms);

const newBio = "HERE YE HERE YE I DO DECLARE IT IS PARTY TIME YO!!!";
changeBio(newBio);

