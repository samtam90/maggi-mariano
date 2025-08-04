import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monte Santa Maria Tiberina",
  canonical: links.servizi["spurgo-pozzi-neri"]["monte-santa-maria-tiberina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});