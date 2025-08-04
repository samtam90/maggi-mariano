import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Borgo San Lorenzo",
  canonical: links.servizi["pulizia-fognature"]["borgo-san-lorenzo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});
