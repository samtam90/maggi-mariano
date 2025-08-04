import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rassina",
  canonical: links.servizi["pulizia-fognature"]["rassina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});
