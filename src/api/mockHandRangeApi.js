import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const handRanges = [
  {
    userId: 0,
    position: 0,
    hands: [
      "AKo",
      "KKo",
      "KJo",
      "KQo",
      "QQo",
      "QJo",
      "JJo",
      "JTo",
      "J9o",
      "Q9o",
      "QTo",
      "KTo",
      "A9o",
      "K9o",
      "ATo",
      "AJo",
      "AQo",
      "AAo",
      "AKs"
    ]
  },
  { userId: 0, position: 1, hands: ["AAo", "KKo", "QQo", "A5s"] },
  {
    userId: 0,
    position: 2,
    hands: [
      "22o",
      "33o",
      "44o",
      "55o",
      "66o",
      "77o",
      "88o",
      "99o",
      "TTo",
      "JJo",
      "QQo",
      "KKo",
      "AAo",
      "AKo",
      "AKs",
      "AQs",
      "KQs",
      "AJs",
      "KJs",
      "ATs",
      "A5s",
      "AQo",
      "JTs",
      "QJs"
    ]
  },
  { userId: 0, position: 3, hands: ["AAo", "KKo", "AKo", "KQs", "AQs", "AKs"] }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = course => {
  return replaceAll(course.title, " ", "-");
};

class HandRangeApi {
  static getHandRanges() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], handRanges));
      }, delay);
    });
  }

  //   static saveCourse(course) {
  //     course = Object.assign({}, course); // to avoid manipulating object passed in.
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         // Simulate server-side validation
  //         const minCourseTitleLength = 1;
  //         if (course.title.length < minCourseTitleLength) {
  //           reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //         }

  //         if (course.id) {
  //           const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //           courses.splice(existingCourseIndex, 1, course);
  //         } else {
  //           //Just simulating creation here.
  //           //The server would generate ids and watchHref's for new courses in a real app.
  //           //Cloning so copy returned is passed by value rather than by reference.
  //           course.id = generateId(course);
  //           course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //           courses.push(course);
  //         }

  //         resolve(course);
  //       }, delay);
  //     });
  //   }

  //   static deleteCourse(courseId) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         const indexOfCourseToDelete = courses.findIndex(course => {
  //           return course.courseId == courseId;
  //         });
  //         courses.splice(indexOfCourseToDelete, 1);
  //         resolve();
  //       }, delay);
  //     });
  //   }
}

export default HandRangeApi;
