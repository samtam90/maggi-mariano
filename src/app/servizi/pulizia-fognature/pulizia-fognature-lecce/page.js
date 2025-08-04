import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lecce",
  canonical: links.servizi["pulizia-fognature"]["lecce"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});
