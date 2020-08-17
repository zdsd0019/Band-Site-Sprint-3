let showsList = document.querySelector('.shows__container');

// Following creates "Shows" heading

let mainHeading = [ 'Shows' ];


const MainHeadingContainer = document.createElement('section');
MainHeadingContainer.classList.add('heading__wrap');
showsList.appendChild(MainHeadingContainer);


const createMainHeading = mainHeading => {

	const MainHeadingEl = document.createElement('h2');

	MainHeadingEl.innerText = mainHeading;
    MainHeadingEl.classList.add('main__heading');

	return MainHeadingEl;
};

mainHeading.forEach(mainHeading => {
    const MainHeadingContainerEl = createMainHeading(mainHeading);
    let containers = document.querySelector('.heading__wrap');
	containers.appendChild(MainHeadingContainerEl);
});

// Following creates table heading (Date, Venue, Location)

let showsHeading = [
	{
		when: 'DATE',
		task: 'VENUE',
		where: 'LOCATION'
	}
];


const createShowsHeading = showsHeading => {
    
	const showsHeadingEl = document.createElement('div');
	const showsHeadingWhen = document.createElement('h5');
	const showsHeadingTask = document.createElement('h5');
	const showsHeadingWhere = document.createElement('h5');
    
    showsHeadingEl.classList.add('shows__heading');

	showsHeadingWhen.innerText = showsHeading.when;
	showsHeadingWhen.classList.add('shows__heading-one');
	showsHeadingEl.appendChild(showsHeadingWhen);

	showsHeadingTask.innerText = showsHeading.task;
	showsHeadingTask.classList.add('shows__heading-two');
	showsHeadingEl.appendChild(showsHeadingTask);

	showsHeadingWhere.innerText = showsHeading.where;
	showsHeadingWhere.classList.add('shows__heading-three');
	showsHeadingEl.appendChild(showsHeadingWhere);

    return showsHeadingEl;
};

showsHeading.forEach(showsHeading => {
    const showsHeadingEl = createShowsHeading(showsHeading);
    let containers = document.querySelector('.heading__wrap');
	containers.appendChild(showsHeadingEl);
});

// Following creates info of Date, Venue and Location

let showsInfo = [
    { when: 'DATE',
      date: 'Mon Dec 17 2018',
      task: 'VENUE', 
      venue: 'Ronal Lane',
      where: 'LOCATION',
      location: 'San Francisco',
      buy: 'BUY TICKETS'
   },
  
  { when: 'DATE',
  date: 'Tue Jul 18 2019',
  task: 'VENUE', 
  venue: 'Pier 3 East',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Fri Jul 22 2019',
  task: 'VENUE', 
  venue: 'View Loungue',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Sat Aug 12 2019',
  task: 'VENUE', 
  venue: 'Hyatt Agency',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Fri Sep 05 2019',
  task: 'VENUE', 
  venue: 'Moscow Center',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Wed Aug 11 2019',
  task: 'VENUE', 
  venue: 'Pres Club',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
      
  ];

const createShowsInfoElement = showsInfo => {
    const showsInfoEl = document.createElement('section');
    const showsInfoWhen = document.createElement('h3');
    const showsInfoDate = document.createElement('h3');
    const showsInfoTask = document.createElement('h3');
    const showsInfoVenue = document.createElement('h4');
    const showsInfoWhere = document.createElement('h3')
    const showsInfoLocation = document.createElement('h4');
    const buyTickets = document.createElement('button');

    showsInfoEl.classList.add('info');
    
    showsInfoWhen.innerText = showsInfo.when;
    showsInfoWhen.classList.add('info__time');
    showsInfoEl.appendChild(showsInfoWhen);

    showsInfoDate.innerText = showsInfo.date;
    showsInfoDate.classList.add('info__date');
    showsInfoEl.appendChild(showsInfoDate);


    showsInfoTask.innerText = showsInfo.task;
    showsInfoTask.classList.add('info__task');
    showsInfoEl.appendChild(showsInfoTask);

    showsInfoVenue.innerText = showsInfo.venue;
    showsInfoVenue.classList.add('info__venue');
    showsInfoEl.appendChild(showsInfoVenue);


    showsInfoWhere.innerText = showsInfo.where;
    showsInfoWhere.classList.add('info__where');
    showsInfoEl.appendChild(showsInfoWhere);

    showsInfoLocation.innerText = showsInfo.location;
    showsInfoLocation.classList.add('info__location');
    showsInfoLocation.classList.add('info__location-last')
    showsInfoEl.appendChild(showsInfoLocation);

    buyTickets.innerText = 'BUY TICKETS';
    buyTickets.classList.add('button__buy');
    showsInfoEl.appendChild(buyTickets);

    return showsInfoEl;
};

    showsInfo.forEach(showsInfo => {
    const showsInfoEl = createShowsInfoElement(showsInfo);
    showsList.appendChild(showsInfoEl);

    });
