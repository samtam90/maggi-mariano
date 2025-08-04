import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Gorizia",
  canonical: links.servizi["pulizia-fognature"]["gorizia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});
