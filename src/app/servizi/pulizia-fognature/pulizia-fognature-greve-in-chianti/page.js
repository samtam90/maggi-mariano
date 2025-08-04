import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Greve in Chianti",
  canonical: links.servizi["pulizia-fognature"]["greve-in-chianti"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"}  
});
