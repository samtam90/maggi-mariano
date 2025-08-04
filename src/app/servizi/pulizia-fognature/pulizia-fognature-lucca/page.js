import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lucca",
  canonical: links.servizi["pulizia-fognature"]["lucca"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});
