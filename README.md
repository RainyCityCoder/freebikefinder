# freebikefinder

This full-stack app is a re-launch of the app built as the final project for the Full Stack Development with JavaScript course sequence I took. Built originally with a team o

The :warning: sign and _italic text_ indicates stuff I need to fix.

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

### :warning: _LINK HERE_

:warning: _WILL THIS CHANGE?:_ Please be aware at this time only non-profit bike shops are searchable. Organizations that help connect those in need of a free helmet or bike will be added in the future.

The above link may be used to access the web-based app, which in its prototype form displays a Navbar at the top of the page that may be used to display:

- Home: The home page
- Bikes: A list of non-profit bike shops that offer bikes for sale. Includes phone number and address for quick contact use. Also includes a "Get Directions" button that utilizes Google Maps.
  - Selecting the name of a shop takes the user to a page with more details for that shop, including a link to the shop's website.
  - Selecting the "View all shops in <state_abbreviation>" listed under a shop of interest will take the user to a list of non-profit shops found in the state selected. From this results page a user may click through a shop's name to its details page.
- Helmets: Organizations that help connect those in need of a free helmet, many of which serve children in need. The usability of this page mirrors that of "Bikes".
- Other: Organizations that help connect those in need of a free bike, many of which serve adults. The usability of this page mirrors that of "Bikes".

On occasion the heroku app will "fall asleep" with lack of calls. Accessing the link to the :warning: _Heroku app_ :warning: (see below) such that it displays the JSON data entries in your browser may be necessary for the Netlify-hosted front-end app to function properly. It is not necessary to access `/shops`, `/helmets` _and_ `nonprofits`; only accessing one is enough to "wake up" the back end.

:warning: _Need to use something other than "1234 Main Street"; maybe "No address provided"???_ Please be aware that some entries will feature an address that starts with "1234 Main Street". These address entries are placeholders that are necessary to ensure functionality of the user-facing front end, and are likely **not** accurate.

## Data API

### :warning: _LINK HERE_

The above syntax provides API access to the database collection, facilitating data retrieval, as well as document creation and deletion (CRUD functionality). The collection features non-profit shops and organizations that assist with low/no-cost bicycles and accessories.

The API returns data in a standard JSON format.

**Please note:** Data fields will (at this time) return (contain) a string.

### :warning: Accessing Non-profit bike shops (/shops) _Will need to updat this with links to the hosted API_

1. All shops: :warning:`*LINK HERE*/shops`
2. Specific shop (via document ID): :warning:`*LINK HERE*/shops/<_id-here>`
   1. Example input: :warning:`*LINK HERE*/shops/62f8166c5051f0576d48c62a`
   2. Example output:
      `{"_id":"62f8166c5051f0576d48c62a","website":"https://bicas.org/","name":"Bicycle Inter Community Art and Salvage","state":"AZ","address":"2001 N 7th Ave Tucson AZ","phone":"(520) 628-7950","email":"bicas@bicas.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"Earn/Cost","Bikes":"TRUE","bikes":"TRUE","helmets":"","maintenance":"TRUE","tools":"TRUE","classes":"TRUE","suggested_donation":"","volunteering":"TRUE","donate_bikes":"TRUE","target_client":""}`
3. All shops in a particular state: :warning:`*LINK HERE*/shops?state=<state_-_abbreviation>`
   1. Example input: :warning:`*LINK HERE*/shops?state=ri`
   2. Example output:
      `[{"_id":"62f8166c5051f0576d48c6a3","website":"https://www.recycleabike.org/","name":"Recycle-A-Bike","state":"RI","address":"1911 Westminster St. Providence, RI 02909","phone":"(401) 525-1822","email":"shop@recycleabike.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"Free","Bikes":"TRUE","bikes":"","helmets":"","maintenance":"","tools":"","classes":"","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}]`

### Accessing Organizations that provide free helmets (/helmets)

1. All organizations: :warning:`*LINK HERE*/helmets`
2. Specific shop (via document ID): `*LINK HERE*/helmets/<_id-here>`
   1. Example input: :warning:`*LINK HERE*/helmets/6301a9905051f0576dc8661e`
   2. Example output:
      `{"_id":"6301a9905051f0576dc8661e","website":"https://www.northshorefire.com/","name":"Northshore - King County Fire District #16","state":"WA","address":"7220 NE 181st Street, Kenmore, WA 98028","phone":"(425) 354-1780","email":"","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","bikes":"","helmets":"TRUE","maintenance":"","tools":"","classes":"","suggested_donation":"$6-10","volunteering":"","donate_bikes":"","target_client":"Children"}`
3. All organizations in a particular state: :warning:`*LINK HERE*/helmets?state=<state_-_abbreviation>`
   1. Example input: :warning:`*LINK HERE*/helmets?state=ny`
   2. Example output (truncated):
      `[{"_id":"6301a9905051f0576dc86626","website":"https://buffalopal.com/pal-bicycle-safety-and-free-bike-helmet-giveaway-program/","name":"PAL Bicycle Safety and Free Bike Helmet Giveaway Program","state":"NY","address":"65 Niagara Square, 21st Floor Buffalo, NY 14202","phone":"(716) 851-4615","email":"PoliceAthleticLeague@city-buffalo.com","contact_form":"","facebook":"https://www.facebook.com/PALBuffalo/","twitter":"https://twitter.com/PalBuffalo","instagram":"https://www.instagram.com/pal_buffalo/","cost":"Free","bikes":"","helmets":"TRUE","maintenance":"","tools":"","classes":"","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}, ... ]`

### Accessing Organizations that connect people with free/low-cost bikes (/nonprofits)

1. All organizations: :warning:`*LINK HERE*/nonprofits`
2. Specific shop (via document ID): `*LINK HERE*/nonprofits/<_id-here>`
   1. Example input: :warning:`*LINK HERE*/nonprofits/6301a9c35051f0576dc895a3`
   2. Example output:
      `{"_id":"6301a9c35051f0576dc895a3","website":"https://bikechurch.santacruzhub.org/","name":"Bike Church","state":"CA","address":"1234 Main Street, Anytown, NC 12345","phone":"","email":"postmaster@santacruzhub.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","bikes":"TRUE","helmets":"","maintenance":"TRUE","tools":"TRUE","classes":"?","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}`
3. All organizations in a particular state: :warning:`*LINK HERE*/nonprofits?state=<state_abbreviation>`
   1. Example input: :warning:`*LINK HERE*/nonprofits?state=ca`
   2. Example output (truncated):
      `[{"_id":"6301a9c35051f0576dc895a3","website":"https://bikechurch.santacruzhub.org/","name":"Bike Church","state":"CA","address":"1234 Main Street, Anytown, NC 12345","phone":"","email":"postmaster@santacruzhub.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"","bikes":"TRUE","helmets":"","maintenance":"TRUE","tools":"TRUE","classes":"?","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""},{"_id":"6301a9c35051f0576dc895a2","website":"https://bikeslocounty.org/","name":"Bike Slo County ","state":"CA","address":"1234 Main Street, Anytown, NC 12345","phone":"","email":"rick@bikeslocounty.org","contact_form":"","facebook":"","twitter":"","instagram":"","cost":"Earn","bikes":"TRUE","helmets":"TRUE","maintenance":"TRUE","tools":"TRUE","classes":"TRUE","suggested_donation":"","volunteering":"","donate_bikes":"","target_client":""}, ... ]`

## For Developers:

To run this code locally:

- Fork this repo
- Clone the code to your local environment
- Run `npm install` in the root project directory
- You will likely have to run `npm install bcrypt jest supertest` in the root directory, and `npm install react-scripts` in the `./app` directory for full functionality

You may run the back-end service with any of the following terminal commands, from the root of the project.

- `npm run startDev`
- `npm run start`
- `npm start`
- `node index.js`

Depending on your system one or two may work better than the other(s). Nodemon is installed for auto-restart after changes are made.

The front-end may be run with `npm start` from the `./app` directory.

Please be aware that the port used to query API endpoints may vary depending on your setup. The creators utilized ports 3000, 5000, and 8000, depending on the situation. Your `curl 'http://localhost:5000/...` may use or need a different port than 5000.

The tests may be run with `npm run test` or `npm run <testfile>` from the `./routes` directory. The test files end in `.test.js`.

## Tech Stack

- Node.js:
  - React.js front-end
  - Express.js API
- :warning: React app hosted on _HOST HERE_
- :warning: Express code hosted on _HOST HERE_
- Database: MongoDB
- Testing: Jest, Supertest
- Open source: available on [GitHub](https://github.com/RainyCityCoder/freebikefinder)

## Original project credits:

- [RainyCityCoder](https://github.com/RainyCityCoder): Product Manager, API Developer, co-Project Manager (Agile)
- :warning:_TeammateOne_: React Developer, co-Project Manager (Agile)
- :warning:_TeammateTwo_: Database Administration
- :warning:_TeammateThree_: Tests/QA Engineer
