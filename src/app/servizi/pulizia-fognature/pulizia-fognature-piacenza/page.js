import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Piacenza",
  canonical: links.servizi["pulizia-fognature"]["piacenza"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});
