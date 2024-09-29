export const getAllMessages = async (page: number) => {
  try {
    const res = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
