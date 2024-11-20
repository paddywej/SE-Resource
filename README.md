# SE-Resource

SE-Resource is a reimagined version of se.kmitl.ac.th, the official Software Engineering website of KMITL, designed to meet the evolving needs of students, faculty, and alumni. Our website retains the essential features of the original website, such as news, events, and course information, while introducing an "Archive" that allows users to share academic and professional resources, including projects, study notes, files, and other valuable materials.

## Features

- Homepage: Shows details about our program and its curriculum.
- About Us: Briefly introduces Software Engineering of KMITL.
- Program: Gives details about the different programs and curriculum overview.
- Admission: Shows a timeline of the admission and briefly explains it.
- News: Displays the department's news blogs.
- Event: Displays the department's upcoming events.
- Login/Register: User must register and login before accessing the archive.
- Archive: A digital archive where software engineering students and alumni can store and share their projects and study notes.
- Public Files/Private Files: Users can choose to make the files they upload either public or private.

### Technologies Used

Developed using ReactJS, FastAPI, and PostgreSQL.

### How to run

In the backend directory, run 'uvicorn backend.main:app --reload'.
Go to the frontend directory, then run 'npm start'.

```bash
    uvicorn backend.main:app --reload
    npm start
   ```