import compareDesc from "date-fns/compare_desc";

const sortPostsByDate = source => {
  if (!(source && source.length)) {
    return [];
  }
  return source.sort((a, b) => {
    let aDate = new Date(a.publish_date);
    let bDate = new Date(b.publish_date);
    return compareDesc(aDate, bDate);
  });
};

export default sortPostsByDate;
