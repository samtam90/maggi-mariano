import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Foiano della Chiana",
  canonical: links.servizi["pulizia-fognature"]["foiano-della-chiana"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});
