import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Loro ciuffenna",
  canonical: links.servizi["pulizia-fognature"]["loro-ciuffenna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});
