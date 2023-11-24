import { useRouteError } from "react-router-dom";
import PageContent from "../components/ErrorPageContent/PageContent";

const ErrorPage = () => {
  let title = "Nothing to eat here...";
  let message = "Let's discover something delicious.";

  //Now we can customize the errors according to the error codes
  //   if (error.status === 500) {
  //     message = error.data.message;
  //   }

  //   if (error.status === 404) {
  //     title = "Not Found";
  //     message = "Could not found Page";
  //   }
  return <PageContent title={title} message={message} />;
};

export default ErrorPage;
