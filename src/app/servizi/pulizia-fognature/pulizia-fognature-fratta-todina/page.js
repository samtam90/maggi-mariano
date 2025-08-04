import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Fratta Todina",
  canonical: links.servizi["pulizia-fognature"]["fratta-todina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"}  
});
