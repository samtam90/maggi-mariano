import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montevarchi",
  canonical: links.servizi["pulizia-fognature"]["montevarchi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});
