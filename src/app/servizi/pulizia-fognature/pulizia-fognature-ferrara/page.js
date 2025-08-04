import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ferrara",
  canonical: links.servizi["pulizia-fognature"]["ferrara"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});
