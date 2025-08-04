import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montespertoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["montespertoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});