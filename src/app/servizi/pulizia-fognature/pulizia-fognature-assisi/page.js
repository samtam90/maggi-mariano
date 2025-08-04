import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Assisi",
  canonical: links.servizi["pulizia-fognature"]["assisi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});
