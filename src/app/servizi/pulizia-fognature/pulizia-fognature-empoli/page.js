import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Empoli",
  canonical: links.servizi["pulizia-fognature"]["empoli"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});
