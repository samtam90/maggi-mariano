import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Messina",
  canonical: links.servizi["pulizia-fognature"]["messina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});
