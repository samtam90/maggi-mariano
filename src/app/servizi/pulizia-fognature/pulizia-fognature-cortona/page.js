import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cortona",
  canonical: links.servizi["pulizia-fognature"]["cortona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});
