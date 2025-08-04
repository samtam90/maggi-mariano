import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Enna",
  canonical: links.servizi["pulizia-fognature"]["enna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});
