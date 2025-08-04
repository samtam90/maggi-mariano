import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Scandicci",
  canonical: links.servizi["pulizia-fognature"]["scandicci"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});
