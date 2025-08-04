import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pordenone",
  canonical: links.servizi["pulizia-fognature"]["pordenone"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});
