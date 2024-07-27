# SMU PCMob3-0: Demo App #0: Names

Welcome to the **Names** app, part of the SMU PCMob3-0 project. This demo app is designed to showcase how a list of names can be displayed and managed in a mobile application using React Native. The goal is to test the performance and functionality when handling a large number of entries.

## App Overview

The **Names** app demonstrates the challenges and limitations associated with using the `ScrollView` component in React Native, particularly when dealing with large datasets. It's optimized for mobile devices to highlight these challenges effectively, as the limitations of `ScrollView` do not appear in the web version of React Native.

## Features

- **Display a List of Names**: Shows a list of names that can be scrolled through.
- **Performance Testing**: Tests the performance of the app with a large number of names to demonstrate the potential shortcomings of using `ScrollView` for such tasks.
  
## Setup and Installation

To set up and run this app on your mobile device, follow these steps:

1. **Clone the Repository**:

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/smu-pcmob3-0.git
   ```

2. **Navigate to the Project Directory**:

    ```bash
    cd smu-pcmob3-0
    ```

3. **Install Dependencies**:

   Use npm or yarn to install the required dependencies:
   ```bash
   npm install
   ```

   or
   ```bash
    yarn install
    ```

4. **Run the App on a Mobile Device**:

   Start the React Native development server and run the app on your mobile device using:
   ```bash
    npx react-native run-android
    ```
   or
   ```bash
   npx react-native run-ios
   ```

Ensure you have the necessary environment set up for running React Native on Android or iOS devices.

## Key Learnings
Understanding ScrollView: Learn about the limitations and performance issues when using ScrollView with a large dataset.
Optimizing for Mobile Devices: Gain insights into how React Native apps behave on mobile devices as compared to web versions.
Contribution
Contributions to this project are welcome! If you have suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

## Contribution

Contributions to this project are welcome! If you have any suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.



