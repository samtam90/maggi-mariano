import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Loro ciuffenna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["loro-ciuffenna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});
