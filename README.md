# Chaki
To run it in your local device, you need to run in two terminals one for the backend server and one for the frontend.

### Setup and Run Instructions

### For the Backend Server:

1. Open a terminal.
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Create a virtual environment:
   ```sh
   python -m venv myenv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```sh
     myenv\Scripts\activate
     ```
   - On macOS:
     ```sh
     source myenv/bin/activate
     ```
5. Install the required packages:
   ```sh
   pip install -r requirements.txt
   ```
6. Start the backend server:
   ```sh
   node server.js
   ```

### For the Frontend Server:

1. Open another terminal.
2. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
3. Create a virtual environment:
   ```sh
   python -m venv myenv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```sh
     myenv\Scripts\activate
     ```
   - On macOS:
     ```sh
     source myenv/bin/activate
     ```
5. Install the required packages:
   ```sh
   pip install -r requirements.txt
   ```
6. Start the frontend server:
   ```sh
   npm start
   ```