import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pergine Valdarno",
  canonical: links.servizi["spurgo-pozzi-neri"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});