export function compareCourses(c1: any, c2: any) {
  const compare = c1.name - c2.name;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
