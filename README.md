# Final Project Frontend

## Development

```bash
# Clone the repository
$ git clone https://github.com/ceonz/final-project-frontend.git && cd final-project-frontend

# Install dependencies
$ npm install

# Run the app
$ npm run start
```

# Frontend Requirements
## UI (React)
  Create a topbar or sidebar component that is present throughout the app
    [`Top bar`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/Navbar.js#L1-L23)

  Create 3 or more additional components
    [`AnimalProfileCard`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/AnimalProfileCard.js#L1-L30)
    [`Searchbar`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/Search.js#L1-L29)
    [`TaskDescriptionCard`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/TaskDescriptionCard.js#L1-L45)
    [`AnimalForm`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/AnimalForm.js#L1-L350)
    [`TaskForm`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/TaskForm.js#L1-L230)
    [`PawPrintIcon`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/PawPrintIcon.js#L1-L21)
    [`NavBar`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/Navbar.js#L1-L23)

  1 or more components should take text-based user input
    [`SearchBar`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/Search.js#L1-L29)
    [`TaskForm`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/TaskForm.js#L1-L230)

  1 or more components should display data representing a single instance from a model
    [`AnimalProfileCard`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/AnimalProfileCard.js#L1-L30)
    [`TaskDescriptionCard`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/TaskDescriptionCard.js#L1-L45)

  Clicking on one of these components should show additional information related to that instance
    [`AnimalProfileCard`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/AnimalProfileCard.js#L1-L30)
    [`TaskDescriptionCard`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/TaskDescriptionCard.js#L1-L45)

  1 or more components should display data based on store state
    [`AnimalDetails`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/AnimalDetails.js#L30-L108)
    [`ShelterTaskDetails`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/ShelterTaskDetails.js#L56-L157)

  Components should enable to user to perform CRUD operations on the backend models
    [`EditAnimalProfile`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/EditAnimalProfile.js#L1-L55)
    [`EditShelterTask`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/EditShelterTask.js#L1-L72)
    [`AnimalService`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/services/animalService.js#L1-L80)
    [`TasksService`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/services/tasksService.js#L1-L80)
    [`AnimalDetails`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/AnimalDetails.js#L30-L108)
    [`ShelterTaskDetails`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/ShelterTaskDetails.js#L56-L157)

## Client-Side Routing (React Router)
  Create 2 or more routes that display different components based on the URL, that are accessible from the navbar/topbar
    [`Home`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/Home.js#L1-L75)
    [`ShelterTasks`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/ShelterTasks.js#L1-L60)
    [`AnimalProfiles`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/AnimalProfiles.js#L1-L63)

  Use dynamic segments to display appropriate info based on the segment info
  Ex: Appropriate task is displayed when the URL matches `/tasks/:taskId`

## State Management (Redux)
  Create a store and a reducer to handle incoming actions

  Create 1 or more action creators to create actions based on inputs
    [`EditAnimalProfiles`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/EditAnimalProfile.js#L12-L55)
    [`EditShelterTasks`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/EditShelterTask.js#L13-L72)

  Update store state using dispatch and actions
    [`AnimalDetails`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/AnimalDetails.js#L30-L43)
    [`AnimalProfiles`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/AnimalProfiles.js#L8-L24)
    [`ShelterTasksDetails`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/ShelterTaskDetails.js#L56-L70)
    [`Sheltertasks`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/pages/ShelterTasks.js#L8-L14)

  Reflect updates to the state in the frontend UI

## API Calls (External and to Backend)
  Backend: Using the backend routes, should be able to perform CRUD operations on database models
    [`animalService`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/services/animalService.js#L1-L80)
    [`tasksService`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/services/tasksService.js#L1-L80)

  External: Should make 2 or more External API calls
    [`Cat/Dog API calls`](https://github.com/ceonz/final-project-frontend/blob/21670d5dd4751d807844cf5a5e2ccdaa6ecb04d7/src/components/AnimalForm.js#L101-L123)
