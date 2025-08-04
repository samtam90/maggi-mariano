import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature [name]",
  canonical: links.servizi["pulizia-fognature"]["[path]"]
});
export default withBaseProps({ 
    title: "Pulizia fognature [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
