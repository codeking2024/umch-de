
## UMCH Project Guide
#### Next 14.x.x, Sanity 3.x.x Project

#### How to install dependencies in this project?

```bash
npm install
# or
yarn install
```

#### How to run this project?

```bash
npm run dev
# or
yarn run dev

```

#### How to build this project?

```bash
npm run build
# or
yarn run build
```



#### Accessing the Application
Open the Application:
- Launch your web browser and go to http://localhost:3000 to view the application.

Sign In to Sanity Community:
- To access the Sanity Community dashboard, navigate to http://localhost:3000/dashboard/studio in your browser.

## Learn More about Sanity Application

During the installation process, you will be prompted with the following question:

```
Would you like an Embedded Sanity Studio?
```
If you choose "No":\
This means you have set up Sanity Studio as a separate, standalone application outside of Next.js. \
In this case, your Next.js app will not have a `sanity.config.ts` file in its root directory.

If you choose "Yes":\
This indicates that you have integrated Sanity Studio within your Next.js application. \
As a result, you will find a `sanity.config.ts` file in the root directory of your Next.js project.

To ensure a successful integration of Sanity within your Next.js app, please select "Yes" when prompted.

## Notes for your app.

#### File Location for _document.jsx
In a Next.js project, the file` _document.jsx` should be placed in the `src/pages` directory, not in the `src/app` folder. \
The correct path is:\
`src/pages/_document.jsx`

Ensure that `_document.jsx` is located here to properly customize the HTML document structure of your application.

#### Usage of Async Functions in a Sanity + Next.js App
To see how async functions are used in this application, check the following files:
- Main Slide Component:
`/src/components/slide/mainSlide.tsx`
- Header Pages:
All files in the `pages/header` directory
- Data Fetching Utility:
`/src/utils/fetchData.ts`

These files contain examples and implementations of async functions relevant to the integration of Sanity and Next.js.

#### Sample code from `mobileNavbar.tsx` file
```javascript
"use client"; // Add this line to mark the component as a Client Component
import { getNavigationData } from "@/utils/fetchData";

const MobileNavbar: React.FC = () => {
  const [navigationData, setNavigationData] = useState<navigationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMobileNavigationData = async () => {
      try {
        const navMobileDataList = await getNavigationData("title, sort, items", "");
        setNavigationData(navMobileDataList);
      } catch (err) {
        setError('Failed to fetch event data.');
      } finally {
        setLoading(false);
      }
    };

    fetchMobileNavigationData();
  }, []);
```

Following this guide will ensure that your application works as expected. By reviewing and implementing the instructions provided, you can be confident that everything will function properly.







## Authors

- [codeking2024](https://www.github.com/codeking2024)


## Appendix

Any additional information goes here

https://www.sanity.io/learn/course/content-driven-web-application-foundations/building-a-content-editable-website