import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sondrio",
  canonical: links.servizi["pulizia-fognature"]["sondrio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});
