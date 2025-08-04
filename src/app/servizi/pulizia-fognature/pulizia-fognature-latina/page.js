import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Latina",
  canonical: links.servizi["pulizia-fognature"]["latina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});
