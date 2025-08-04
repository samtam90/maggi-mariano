import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Poppi",
  canonical: links.servizi["pulizia-fognature"]["poppi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});
