import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sassari",
  canonical: links.servizi["pulizia-fognature"]["sassari"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});
