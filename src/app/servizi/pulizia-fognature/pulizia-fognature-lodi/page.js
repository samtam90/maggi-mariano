import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lodi",
  canonical: links.servizi["pulizia-fognature"]["lodi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});
