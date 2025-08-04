import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Laterina",
  canonical: links.servizi["pulizia-fognature"]["laterina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
