import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bucine",
  canonical: links.servizi["pulizia-fognature"]["bucine"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});
