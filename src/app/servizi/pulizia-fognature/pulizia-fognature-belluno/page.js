import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Belluno",
  canonical: links.servizi["pulizia-fognature"]["belluno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});
