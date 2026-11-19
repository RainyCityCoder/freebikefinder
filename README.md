# freebikefinder

This full-stack app is a re-launch of the app built as the final project for the Full Stack Development with JavaScript course sequence I took. Built originally with a team o

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Design](#design)
   1. [Front-End](#front-end)
   2. [Back-end](#back-end)
3. [Deployed Front-end](#deployed-front-end)
4. [Data API](#data-api)
   1. [Accessing Shops](#accessing-shops)
   2. [Accessing Organizations that provide free helmets](#accessing-organizations-that-provide-free-helmets)
   3. [Accessing Organizations that connect people with free/low-cost bikes ](#accessing-organizations-that-connect-people-with-freelow-cost-bikes)
5. [For Developers](#for-developers)
6. [Tech Stack](#tech-stack)
7. [Credits](#original-project-credits)

## Problem Statement

1. **Scope:** Access to reliable transportation is an issue affecting many individuals. Owning a car is costly and access to public transportation requires money and proximity access points. According to the American Public Transportation Association, [45% of Americans have no access to public transportation](https://www.apta.com/news-publications/public-transportation-facts/). According the 2020 census data, [over 11% (over 37 million) of US citizens are living in poverty](https://www.prb.org/resources/how-poverty-in-the-united-states-is-measured-and-why-it-matters/). In 2022, 1634 counties in the U.S. were considered "rural" or "underserved" by the [Consumer Financial Protection Bureau](https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/rural-and-underserved-counties-list/).
2. **Impact:** Without access to reliable transportation, it is difficult to get to important appointments (health, career, education), access publicly available assets (public transportation, libraries, parks, housing / shelter, meals), and to get valuable exercise. Additionally, finding a bike shop who will accept a bike donation can feel like a hassle when it requires searching and contacting bike shops.
3. **Causes:** There is no centralized website to discover free bike or bike donation options in a community. Individuals are left to guess at likely Google search queries ("where can I get a free bike") or check all bike shops discovered through a Google Maps search. The discovery process is slow and depends on luck or internet research skills.
4. **Other solutions:** Search engines and maps applications. In both cases, search results are littered with bike shops that do not offer free bike options and do not accept donations. A lot of wasted time can be spent checking the results shop by shop. Additionally, know the best search query can be tricky ("bike collective" or "nonprofit bike shop", for example). Bikes can always be donated to community resources like Goodwill or The Salvation Army, but such options lack the necessary resources to ensure the bike is functioning well and has been reviewed for safety and long-term reliability. Moreover, bike shops are better suited to offer safety instructions, set the bike up for the rider, teach the rider about basic maintenance, and provide necessary safety equipment. Bike Collectives Wiki's [Community Bicycle Organizations](https://www.bikecollectives.org/wiki/Community_Bicycle_Organizations) resource is a good staring place with a large list of organizations and shops, but lacks granular search options such as discovering which shops do or don't offer earn-a-bike programs, or offer open-repair hours. In addition, this page is not up-to-date.

## Design

### **Front-End:**

An approachable, straighforward, mobile-friendly (some underserved individuals may not have easy access to a full computer) search function that allows at least partial selection of search criteria, including (but not limited to):

- Location
- Contact information

### **Back-End:**

A MongoDB collection, one-document-per-organization organization with the following endpoint(s):

| Request Type | Endpoint                         | Expected results                                                              |
| ------------ | -------------------------------- | ----------------------------------------------------------------------------- |
| GET          | /shops/:\_id                     | Retrieves single shop via document's ObjectId()                               |
| GET          | /shops                           | Retrieves all shops                                                           |
| GET          | /shops?state=<state_abbr.>       | Retrieves all shops with state field matching <state_abbr.>.                  |
| POST         | /shops                           | Adds a new shop document                                                      |
| PUT          | /shop/:\_id                      | Updates single shop document via document's ObjectID()                        |
| DELETE       | /business/:\_id                  | Removes single shop document via document's ObjectId()                        |
| GET          | /helmets                         | Retrieves all non-profits that offer free helmets                             |
| GET          | /helmets/:\_id                   | Retrieves free-helmet-non-profit via document's ObjectId                      |
| GET          | /helmets?state=<state_abbr.>     | Retrieves all free-helmet-non-profits with state field matching <state_abbr.> |
| POST         | /helmets                         | Adds a new non-profit that offers free helmets                                |
| PUT          | /shop/:\_id                      | Updates single free-helmet-non-profit document via document's ObjectID        |
| DELETE       | /business/:\_id                  | Removes single free-helmet-non-profit document via document's ObjectId        |
| GET          | /non-profits                     | Retrieves all non-profits that offer free bikes                               |
| GET          | /non-profits/:\_id               | Retrieves free-bike-non-profit via document's ObjectId                        |
| GET          | /non-profits?state=<state_abbr.> | Retrieves all free-helmet-non-profits with state field matching <state_abbr.> |
| POST         | /non-profits                     | Adds a new non-profit that offers free bike                                   |
| PUT          | /non-profits/:\_id               | Updates single free-bike-non-profit document via document's ObjectID          |
| DELETE       | /non-profits/:\_id               | Removes single free-bike-non-profit document via document's ObjectId          |

**Note:** <state_abbr.> represents the postal two-letter abbreviation for each state, including "DC" for Washington DC.

**Note:** POST, PUT, and DELETE routes are protected and accessible only via administrator credentials, to ensure data integrity.

## Deployed Front-End

### https://freebikefinder.vercel.app/

**_Please be aware that the site is hosted with free-tier accounts. On occasion the back end and/or database will be paused or "fall asleep" with lack of calls, and the user will experience some delays._**

_Addresses consisting of "1234 Main Street Anytown, NC 12345" are temporary placeholders that are necessary to ensure functionality of the user-facing front end, and are **not** accurate._

The above link may be used to access the web-based app, which in its prototype form displays a Navbar at the top of the page that may be used to display:

- Home: The home page
- Bikes: A list of non-profit bike shops that offer bikes for sale. Includes phone number and address for quick contact use. Also includes a "Get Directions" button that utilizes Google Maps.
  - Selecting the name of a shop takes the user to a page with more details for that shop, including a link to the shop's website.
  - Selecting the "View all shops in <state_abbreviation>" listed under a shop of interest will take the user to a list of non-profit shops found in the state selected. From this results page a user may click through a shop's name to its details page.
- Helmets: Organizations that help connect those in need of a free helmet, many of which serve children in need. The usability of this page mirrors that of "Bikes".
- Other: Organizations that help connect those in need of a free bike, many of which serve adults. The usability of this page mirrors that of "Bikes".

## Data API

### https://freebikefinder.onrender.com/

The [above syntax](#back-end) provides API access to the database collection, facilitating data retrieval, as well as document creation and deletion (CRUD functionality). The collection features non-profit shops and organizations that assist with low/no-cost bicycles and accessories.

The API returns data in a standard JSON format, the values of which consist of strings.

### Accessing Non-profit bike shops (/shops)

1. All shops: `https://freebikefinder.onrender.com/shops`
2. Specific shop (via document ID): `*https://freebikefinder.onrender.com/shops/<_id-here>`
   1. Example input: `https://freebikefinder.onrender.com/shops/62f8166c5051f0576d48c63a`
   2. Example output:
      `{"_id":"62f8166c5051f0576d48c63a","website":"https://bikesdelpueblosd.blogspot.com/","name":"Bikes del Pueblo","state":"CA","address":"","phone":"","email":"bikesdelpueblosd@gmail.com","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","Bikes":"TRUE","bikes":"","helmets":"","maintenance":"TRUE","tools":"","classes":"TRUE","suggested_donation":"","volunteering":"TRUE","donate_bikes":"","target_client":""}`
3. All shops in a particular state: `https://freebikefinder.onrender.com/shops?state=<state_-_abbreviation>`
   1. Example input: `https://freebikefinder.onrender.com/shops?state=ri`
   2. Example output:
      `[{"_id":"62f8166c5051f0576d48c6a3","website":"https://www.recycleabike.org/","name":"Recycle-A-Bike","state":"RI","address":"1911 Westminster St. Providence, RI 02909","phone":"(401) 525-1822","email":"shop@recycleabike.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"Free","Bikes":"TRUE","bikes":"","helmets":"","maintenance":"","tools":"","classes":"","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}]`

### Accessing Organizations that provide free helmets (/helmets)

1. All organizations: `https://freebikefinder.onrender.com/helmets`
2. Specific shop (via document ID): `https://freebikefinder.onrender.com/helmets/<_id-here>`
   1. Example input: `https://freebikefinder.onrender.com/helmets/6301a9905051f0576dc8661e`
   2. Example output:
      `{"_id":"6301a9905051f0576dc8661e","website":"https://www.northshorefire.com/","name":"Northshore - King County Fire District #16","state":"WA","address":"7220 NE 181st Street, Kenmore, WA 98028","phone":"(425) 354-1780","email":"","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","bikes":"","helmets":"TRUE","maintenance":"","tools":"","classes":"","suggested_donation":"$6-10","volunteering":"","donate_bikes":"","target_client":"Children"}`
3. All organizations in a particular state: `https://freebikefinder.onrender.com/helmets?state=<state_-_abbreviation>`
   1. Example input: `https://freebikefinder.onrender.com/helmets?state=ny`
   2. Example output (truncated):
      `[{"_id":"6301a9905051f0576dc86627","website":"https://www.1800law1010.com/mhm-free-bicycle-helmets/","name":"Martin, Harding & Mazzotti, LLP Free Bicycle Helmets","state":"NY","address":"1234 Main Street, Anytown, NC 12345","phone":"(800) 529-1010","email":"","contact_form":"","facebook":"https://www.facebook.com/1800LAW1010","twitter":"https://twitter.com/1800LAW1010","instagram":"","cost":"Free","bikes":"","helmets":"TRUE","maintenance":"","tools":"","classes":"","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":"Children"}, ... ]`

### Accessing Organizations that connect people with free/low-cost bikes (/nonprofits)

1. All organizations: `https://freebikefinder.onrender.com/nonprofits`
2. Specific shop (via document ID): `https://freebikefinder.onrender.com/nonprofits/<_id-here>`
   1. Example input: `https://freebikefinder.onrender.com/nonprofits/6301a9c35051f0576dc895a3`
   2. Example output:
      `{"_id":"6301a9c35051f0576dc895a3","website":"https://bikechurch.santacruzhub.org/","name":"Bike Church","state":"CA","address":"1234 Main Street, Anytown, NC 12345","phone":"","email":"postmaster@santacruzhub.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","bikes":"TRUE","helmets":"","maintenance":"TRUE","tools":"TRUE","classes":"?","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}`
3. All organizations in a particular state: `https://freebikefinder.onrender.com/nonprofits?state=<state_postal_abbreviation>`
   1. Example input: `https://freebikefinder.onrender.com/nonprofits?state=ca`
   2. Example output (truncated):
      `[{"_id":"6301a9c35051f0576dc895a3","website":"https://bikechurch.santacruzhub.org/","name":"Bike Church","state":"CA","address":"1234 Main Street, Anytown, NC 12345","phone":"","email":"postmaster@santacruzhub.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","bikes":"TRUE","helmets":"","maintenance":"TRUE","tools":"TRUE","classes":"?","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}, ... ]`

## For Developers:

To run this code locally:

- Fork this repo
- Clone the code to your local environment
- Run `npm install` in the root project directory
- You will likely have to run `npm install bcrypt jest supertest` in the root directory, and `npm install react-scripts` in the `./app` directory for full functionality
  - To make life easier on yourself, installing nodemon with `npm install --save-dev nodemon` will allow hot-restarts of your server as you change the code
- If you're using MongoDB, install the MongoDB Node driver with `npm install mongodb@4.8.1` in the root project directory (earlier versions may not work)

The front end may be run with `npm start` from the `./app` directory.

You may run the back-end service with one or more of the following terminal commands, from the root of the project.

- `npm run startDev` (nodemon must be installed)
- `npm run start`
- `npm start`
- `node index.js`

Depending on your system one or two may work better than the other(s). Nodemon is installed for auto-restart after changes are made.

The back end may be run, however connectivity to the existing Mongo database will not work. The following files will need to be modified with access information for your own database:

1. `dataInterface/users.js`
1. `dataInterface/helmets.js`
1. `dataInterface/nonProfits.js`
1. `dataInterface/shops.js`

Please be aware that the port used to query locally-hosted API endpoints may vary depending on your setup. The creators utilized ports 3000, 5000, and 8000, depending on the situation. Your `curl 'http://localhost:5000/...` may use or need a different port than 5000.

The tests may be run with `npm run test` or `npm run <testfile>` from the `./routes` directory. The test files end in `.test.js`.

## Tech Stack

- Node.js:
  - React.js front-end
  - Express.js API
- Database: MongoDB
- Testing: Jest, Supertest
- Open source: available on [GitHub](https://github.com/RainyCityCoder/freebikefinder)

## Original project credits:

- [RainyCityCoder](https://github.com/RainyCityCoder): Product Manager, API Developer, co-Project Manager (Agile)
- [Ryan O'Donnell](https://www.linkedin.com/in/josephryanodonnell/): React Developer, co-Project Manager (Agile)
- [Amber Bandasith](https://www.linkedin.com/in/amber-bandasith-4436525a/): Database Administration
- Sonal Gupta: Test/QA Engineer
