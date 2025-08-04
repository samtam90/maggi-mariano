import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Forlì-Cesena",
  canonical: links.servizi["pulizia-fognature"]["forli-cesena"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});
