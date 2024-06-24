/**
 *
 * <div id="parent">
 *   <div id="child1"> //h1 and h2 are child of this div and they are siblings
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div>
 * <div id="child2"> //h1 and h2 are child of this div and they are siblings
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 * </div>
 * reactElement (object)=> is a html which browser understand
 */
// this makes things complex it is core react but we use jsx to make it eaiser
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]); //parent div --> child div --> h1 tag

const heading = React.createElement(
  //createElement creates an object with type :h1 , attributes (id) , child ("ho ho")
  "h1",
  { id: "parent", xyz: "abc" }, //attributes
  "ho ho ho" //props means childrens of tag
); // create element

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); //create root of div to add parent inside it

root.render(parent); // creating h1 tag from parent object and injecting it inside root (replacing html created tags inside root)  (parent obj to h1 tag and put into div)
//createElement always creates an object it will me converted to tag while its rendering it is converted into html and puts it into dom
