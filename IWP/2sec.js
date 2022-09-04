const list = [1, 2, 3, 4];
const task = async () => {
 for (const item of list) {
new Promise((r,j) => setTimeout(r, 1000));
 console.log('Hello %d', item);
 }
}
task();
console.log("Hej");