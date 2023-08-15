# Reusable Data Table Component

This reusable data table component is designed to provide a comprehensive set of features for displaying and interacting with various types of data tables. It is built using React 18 and utilizes the capabilities of TailwindCSS, ShadCN, and Tanstack Table to create a highly customizable and responsive data table.

## Features

### 1. Sorting
The table allows sorting of columns in ascending or descending order. Clicking on a column header will trigger sorting based on the column's data.

### 2. Global Search
A global search bar is provided to search for specific data across all columns.

### 3. Filtering per Column
Each column can be filtered individually, allowing users to narrow down the data based on specific criteria.

### 4. Pagination
Pagination is implemented to display a limited number of rows per page, enhancing performance for larger datasets.

### 5. Mobile Responsiveness
The table is designed to be mobile-responsive. When viewed on smaller devices, horizontal scrolling is enabled to accommodate the table's content.

### 6. Fixed Columns
Users can choose to fix a specific column on the left side of the table, ensuring its visibility even while scrolling horizontally.

### 7. Row Selection
Row selection is facilitated through checkboxes, enabling users to select multiple rows for further actions.

### 8. Column Visibility Configuration
Users have the option to choose which columns to display, tailoring the view according to their preferences.

## Usage

To integrate this reusable data table component into your project, follow these steps:

1. Clone the Git repository: `git clone https://github.com/shahtaz-tqldd/reusable-table-client.git`
2. Navigate to the project folder: `cd reusable-table-client`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Tech Stack

- React 18
- TailwindCSS
- ShadCN (for styling the data table)
- Tanstack Table (for handling the table functionalities)

## Example

To see a practical example of how this data table component can be used, check out the Directus video tutorial: [Directus Data Table Example](https://www.youtube.com/watch?v=ZjcfDToTU5o)

## Future Enhancements

In future versions of this component, the following features are planned to be added:

- Column reordering with Drag-and-Drop (DND)
- Column width resizing
- Row Drag-and-Drop functionality
- Persistence of table settings using the `useLocalStorage` hook from [usehooks.com](https://usehooks.com)
