import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cuneo",
  canonical: links.servizi["pulizia-fognature"]["cuneo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});
