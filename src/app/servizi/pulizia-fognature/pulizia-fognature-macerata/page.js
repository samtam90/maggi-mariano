import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Macerata",
  canonical: links.servizi["pulizia-fognature"]["macerata"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});
