import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Imperia",
  canonical: links.servizi["spurgo-pozzi-neri"]["imperia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});