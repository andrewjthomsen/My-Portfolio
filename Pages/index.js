import React from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";

// const index = () => {
//   return (
//       <h1>Hello from index page!</h1>
//   )
// };

// const Index = function() {
//     return (
//         <h1>Hello from index page from non-ES6 function!</h1>
//     )
// }
class Index extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>I am Index Page from Class Component</h1>
      </BaseLayout>
    );
  }
}
export default Index;