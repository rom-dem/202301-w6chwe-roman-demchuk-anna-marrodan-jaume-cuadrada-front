# DATA

- list of robots
  - name string
  - image url string
  - speed number between 0 and 10
  - endurance number between 0 and 10
  - creation date date

# DATA LAYER

- Load robots
- Load a robot
- Delete a robot from the list of robots
- Add a robot to the list of robots
- Change name of a robot

# COMPONENTS

## APP

- Show Layout component

## Layout

- Show robots list component
- Show "Robots" title with heading
-

## Robot (card)

- Receives a robot
- Receives delete a robot action
- Recieves modify a robot action
- Shows robot's name inside a heading
- Shows robot's photo, speed, endurance and creation date
- Shows button to delete a robot
- Shows button to modify a robot

## Robots (list)

- Receives list of robots
- Show a Robot card component for every robot on the list of robots
- Sends a Robot card component for every robot
- Sends a Robot to each Robot card component

## Form

- Receives a function to add a new robot
- Receives a function to update an existing robot
- Receives the information to update an existing robot
- Shows an input for the robot's name with label "Name"
- Shows an input for the robot's image url with label "Image URL"
- Shows an input for the robot's speed with label "Speed"
- Shows an input for the robot's endurance with label "Endurance"
- Shows an input for the robot's creation date with label "Creation date"
- Shows a button to submit the form
- Sends a new robot to the database
-

## Button

- Receives an icon
- Receives an action
- Shows the received icon inside a button
- On click executes a received action
