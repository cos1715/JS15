const university = {
  universityName: "Polytechnic",
};

const faculty = Object.create(university, {
  facultyName: {
    value: "Physics and mathematics",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  groups: {
    value: [],
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

function enlistStudent(...val) {
  if (this.groups.length < 12) {
    return this.groups.push(...val);
  }
}

faculty.universityName;
// Polytechnic

enlistStudent.apply(faculty, ["Taras", "Angela", "Serhii"]);
