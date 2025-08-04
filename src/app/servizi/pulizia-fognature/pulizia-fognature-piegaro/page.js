import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Piegaro",
  canonical: links.servizi["pulizia-fognature"]["piegaro"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});
