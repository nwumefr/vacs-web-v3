import React from "react";
import { Building, BookOpen } from "lucide-react";

const ServiceIcon = ({ name, ...props }) => {
  switch (name) {
    case "building":
      return <Building {...props} />;
    case "book-open":
      return <BookOpen {...props} />;
    // case "home":
    //   return <Home {...props} />;
    default:
      return null;
  }
};

export default ServiceIcon;
