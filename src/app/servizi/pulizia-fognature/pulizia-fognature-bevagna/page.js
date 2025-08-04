import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bevagna",
  canonical: links.servizi["pulizia-fognature"]["bevagna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});
