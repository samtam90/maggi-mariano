import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Parma",
  canonical: links.servizi["spurgo-pozzi-neri"]["parma"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});