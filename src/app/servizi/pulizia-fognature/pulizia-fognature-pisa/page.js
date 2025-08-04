import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pisa",
  canonical: links.servizi["pulizia-fognature"]["pisa"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pisa", 
    locationNames: {label: "Pisa", href: "pisa"}  
});
