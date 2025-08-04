import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Loro ciuffenna",
  canonical: links.servizi["spurgo-pozzi-neri"]["loro-ciuffenna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});