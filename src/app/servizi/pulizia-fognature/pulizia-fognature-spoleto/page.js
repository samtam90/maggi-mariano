import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Spoleto",
  canonical: links.servizi["pulizia-fognature"]["spoleto"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});
