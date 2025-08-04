import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Fiesole",
  canonical: links.servizi["pulizia-fognature"]["fiesole"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});
