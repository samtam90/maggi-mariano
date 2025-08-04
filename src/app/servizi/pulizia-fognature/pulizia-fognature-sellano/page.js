import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sellano",
  canonical: links.servizi["pulizia-fognature"]["sellano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});
