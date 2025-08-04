import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rufina",
  canonical: links.servizi["spurgo-pozzi-neri"]["rufina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});