import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ravenna",
  canonical: links.servizi["pulizia-fognature"]["ravenna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});
