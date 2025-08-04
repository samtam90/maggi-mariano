import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Trevi",
  canonical: links.servizi["pulizia-fognature"]["trevi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});
