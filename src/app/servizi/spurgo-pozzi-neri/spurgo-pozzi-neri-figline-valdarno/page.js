import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Figline Valdarno",
  canonical: links.servizi["spurgo-pozzi-neri"]["figline-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});