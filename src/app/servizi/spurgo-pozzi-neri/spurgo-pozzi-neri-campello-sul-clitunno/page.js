import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Campello sul Clitunno",
  canonical: links.servizi["spurgo-pozzi-neri"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});