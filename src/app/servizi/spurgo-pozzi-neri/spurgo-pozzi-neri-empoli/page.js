import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Empoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["empoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});